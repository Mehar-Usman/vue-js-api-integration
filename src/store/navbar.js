import { defineStore } from 'pinia';

export const useNavbarStore = defineStore({
  id: 'navbar',
  state: () => ({
    isOpen: false, // Initial state of the navbar (closed)
    items: [
      { title: 'Home', link: '#' },
      { title: 'About', link: '#' },
      { title: 'Services', link: '#' },
      { title: 'Contact', link: '#' }
    ]
  }),
  actions: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;
    },
    closeNavbar() {
      this.isOpen = false;
    },
  },
});
