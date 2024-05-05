// getData.js
import { defineStore } from 'pinia';

export const useGetDataStore = defineStore({
  id: 'getData',
  state: () => ({
    posts: [],
  }),
  actions: {
    async fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        this.posts = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
