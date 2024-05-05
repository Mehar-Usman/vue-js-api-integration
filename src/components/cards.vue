<!-- Card.vue -->
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="card in cards" :key="card.id" class="max-w-xs rounded overflow-hidden shadow-lg">
        <img :src="card.imageUrl" alt="Card Image" class="w-full h-card-img">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ card.title }}</div>
          <p class="text-gray-700 text-base">{{ card.subtitle }}</p>
          <p class="text-gray-700 text-base">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCardStore } from '../store/card';
  
  const cards = useCardStore().cards;
  </script>
  
  <style>
  /* Custom style for card images */
  .h-card-img {
    height: 200px; /* Set the height for card images */
  }
  </style>
  