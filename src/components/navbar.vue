<template>
    <nav class="bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <!-- Navbar logo -->
          <div class="flex-shrink-0">
            <a href="#" class="flex items-center">
              <img src="/public/vite.svg" alt="Logo" class="h-8 w-auto">
            </a>
          </div>
  
          <!-- Hamburger menu button -->
          <div class="flex md:hidden">
            <button @click="toggleNavbar" class="text-white hover:text-gray-400 focus:outline-none">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path v-if="!isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
                <path v-else fill-rule="evenodd" clip-rule="evenodd" d="M1 2h22v2H1V2zm0 8h22v2H1v-2zm0 8h22v2H1v-2z"/>
              </svg>
            </button>
          </div>
  
          <!-- Navbar links -->
          <div class="hidden md:flex flex-grow items-center justify-end" :class="{ 'flex': isOpen, 'hidden': !isOpen, 'sm:flex': isOpen }">
            <a v-for="(item, index) in navbarItems" :key="index" :href="item.link" class="text-white px-4 py-2 hover:bg-gray-700 rounded">{{ item.title }}</a>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useNavbarStore } from '../store/navbar.js';
  
  const navbarStore = useNavbarStore();
  const isOpen = computed(() => navbarStore.isOpen);
  const navbarItems = computed(() => navbarStore.items);
  
  const toggleNavbar = () => navbarStore.toggleNavbar();
  </script>
  