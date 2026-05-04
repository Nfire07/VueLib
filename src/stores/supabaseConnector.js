/**
 * Author: Mele Nicolo' Emanuele
 * Date: May 1, 2026
 * License: MIT
 * Description: Supabase connector store for authentication, session management and database queries
 */

import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';
import router from '@/router';

const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const applyFilters = (query, filters = {}) => {
  Object.entries(filters).forEach(([column, value]) => {
    query = query.eq(column, value);
  });
  return query;
};

export const useSupabaseConnector = defineStore('supabaseConnector', {
  state: () => ({
    client: supabaseClient,
    session: null,
    user: null,
    loading: false,
    error: null
  }),

  getters: {
    /**
     * @return {boolean} Whether a user is currently authenticated
     */
    isAuthenticated: (state) => !!state.session && !!state.user,
  },

  actions: {
    /**
     * @param none
     * @return {Promise<void>}
     * @desc Initialize Supabase auth, restore existing session, and listen for auth state changes
     */
    async initializeAuth() {
      this.loading = true;
      this.error = null;

      try {
        const { data: { session }, error } = await this.client.auth.getSession();

        if (error) throw error;

        this.session = session;
        this.user = session?.user ?? null;

        this.client.auth.onAuthStateChange((event, newSession) => {
          this.session = newSession;
          this.user = newSession?.user ?? null;
        });
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    /**
     * @param none
     * @return {boolean} True if authenticated, false and redirects to /login otherwise
     * @desc Check if a user is logged in; redirect to /login if not
     */
    requireAuth() {
      if (!this.isAuthenticated) {
        router.push('/login');
        return false;
      }
      return true;
    },

    /**
     * @param redirectPath {string} Path to redirect after successful login (default: '/')
     * @return {void}
     * @desc Redirect to /login with an optional post-login redirect path as query param
     */
    redirectToLogin(redirectPath = '/') {
      router.push({ path: '/login', query: { redirect: redirectPath } });
    },

    /**
     * @param credentials {Object} User credentials object
     * @param credentials.email {string} User email address
     * @param credentials.password {string} User password
     * @return {Promise<Object>} Authentication response data
     * @desc Sign in user with email and password credentials
     */
    async signInWithEmail(credentials) {
      this.loading = true;
      this.error = null;

      try {
        const { data, error } = await this.client.auth.signInWithPassword(credentials);

        if (error) throw error;

        this.session = data.session;
        this.user = data.user;

        return data;
      } catch (err) {
        this.error = err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    /**
     * @param none
     * @return {Promise<void>}
     * @desc Sign out current user, clear session data, and redirect to /login
     */
    async signOut() {
      this.loading = true;
      this.error = null;

      try {
        const { error } = await this.client.auth.signOut();

        if (error) throw error;

        this.session = null;
        this.user = null;

        router.push('/login');
      } catch (err) {
        this.error = err.message;
        throw err;
      } finally {
        this.loading = false;
      }
    },

    /**
     * @param table {string} Database table name to query
     * @param options {Object} Query configuration options
     * @param options.columns {string} Column selection string (default: '*')
     * @param options.filters {Object} Filter conditions as key-value pairs
     * @param options.limit {number} Maximum number of rows to return
     * @param options.orderBy {Object} Order configuration with column and ascending flag
     * @return {Promise<Array>} Query result data array
     * @desc Execute a SELECT query on a Supabase table with optional filters, limit and order
     */
    async queryTable(table, options = {}) {
      this.error = null;

      try {
        let query = this.client.from(table).select(options.columns || '*');

        query = applyFilters(query, options.filters);

        if (options.limit) query = query.limit(options.limit);
        if (options.orderBy) {
          query = query.order(options.orderBy.column, {
            ascending: options.orderBy.ascending ?? true
          });
        }

        const { data, error } = await query;

        if (error) throw error;

        return data;
      } catch (err) {
        this.error = err.message;
        throw err;
      }
    },

    /**
     * @param table {string} Database table name
     * @param record {Object} Record data to insert
     * @return {Promise<Object>} Newly inserted record object
     * @desc Insert a new record into the specified database table and return it
     */
    async insertRecord(table, record) {
      this.error = null;

      try {
        const { data, error } = await this.client
          .from(table)
          .insert(record)
          .select()
          .single();

        if (error) throw error;

        return data;
      } catch (err) {
        this.error = err.message;
        throw err;
      }
    },

    /**
     * @param table {string} Database table name
     * @param updates {Object} Fields and values to update
     * @param match {Object} Conditions to match rows for update
     * @return {Promise<Object>} Updated record object
     * @desc Update records in a table matching the given conditions and return the updated record
     */
    async updateRecord(table, updates, match) {
      this.error = null;

      try {
        let query = this.client.from(table).update(updates);

        query = applyFilters(query, match);

        const { data, error } = await query.select().single();

        if (error) throw error;

        return data;
      } catch (err) {
        this.error = err.message;
        throw err;
      }
    },

    /**
     * @param table {string} Database table name
     * @param match {Object} Conditions to match rows for deletion
     * @return {Promise<void>}
     * @desc Delete records from a table that match the given conditions
     */
    async deleteRecord(table, match) {
      this.error = null;

      try {
        let query = this.client.from(table).delete();

        query = applyFilters(query, match);

        const { error } = await query;

        if (error) throw error;
      } catch (err) {
        this.error = err.message;
        throw err;
      }
    }
  }
});