<!-- GetData.vue -->
<template>
    <div>
      <button @click="fetchPosts">Fetch Posts</button>
      <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
      <p v-else>No posts available</p>
    </div>
  </template>
  
  <script setup>
  import { useGetDataStore } from '../store/getData.js';
  
  const { posts, fetchPosts } = useGetDataStore();
  </script>
  