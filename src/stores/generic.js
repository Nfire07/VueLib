import { defineStore } from 'pinia';


const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
};

export const useGenericStore = defineStore('generic', {
  state: () => ({
    language: localStorage.getItem('lang') || 'it',
    
    theme: getInitialTheme(),
  }),
  
  actions: {
    changeLanguage(newLang) {
      this.language = newLang;
      localStorage.setItem('lang', newLang);
    },
    
    setTheme(newTheme) {
      this.theme = newTheme;
      localStorage.setItem('theme', newTheme);
      this.applyThemeClass();
    },

    toggleTheme() {
      const nextTheme = this.theme === 'light' ? 'dark' : 'light';
      this.setTheme(nextTheme);
    },

    applyThemeClass() {
      const root = document.documentElement;
      if (this.theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }
});