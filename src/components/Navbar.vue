<template>
    <nav class="bg-blue-600 p-4 text-white flex justify-between items-center">
      <!-- Logo -->
      <h1 class="text-lg font-bold">Stock API</h1>
  
      <!-- Menú de escritorio -->
      <div class="hidden md:flex space-x-4">
        <router-link to="/" class="px-4 hover:underline">🏠 Acciones</router-link>
        <router-link to="/recommendations" class="px-4 hover:underline">⭐ Recomendaciones</router-link>
      </div>
  
      <!-- Botón de menú para móviles -->
      <button @click="toggleMenu" class="md:hidden text-xl focus:outline-none">
        ☰
      </button>
  
      <!-- Menú desplegable en móviles -->
      <div v-if="isMenuOpen" class="absolute top-14 right-4 bg-white text-black shadow-md rounded-lg w-40 md:hidden">
        <router-link to="/" class="block px-4 py-2 hover:bg-gray-200">🏠 Acciones</router-link>
        <router-link to="/recommendations" class="block px-4 py-2 hover:bg-gray-200">⭐ Recomendaciones</router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  