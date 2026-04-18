<script>
import { mapActions } from 'pinia';
import { useGenericStore } from '@/stores/generic';
import { RouterView } from "vue-router";

export default {
  name: 'App',
  
  methods: {
    ...mapActions(useGenericStore, ['applyThemeClass'])
  },
  
  mounted() {
    this.applyThemeClass();
  }
}
</script>

<template>
  <RouterView />
</template>

<style>
  
</style>
