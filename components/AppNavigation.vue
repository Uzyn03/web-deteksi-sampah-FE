<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-800">EcoDetect</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            :class="{ 'text-green-600 bg-green-50': $route.path === '/' }"
          >
            Deteksi
          </NuxtLink>
          <NuxtLink 
            to="/dashboard" 
            class="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            :class="{ 'text-green-600 bg-green-50': $route.path === '/dashboard' }"
          >
            Dashboard
          </NuxtLink>
          <NuxtLink 
            to="/history" 
            class="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            :class="{ 'text-green-600 bg-green-50': $route.path === '/history' }"
          >
            Riwayat
          </NuxtLink>
          <NuxtLink 
            to="/edukasi" 
            class="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            :class="{ 'text-green-600 bg-green-50': $route.path === '/edukasi' }"
          >
            Edukasi
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            :class="{ 'text-green-600 bg-green-50': $route.path === '/about' }"
          >
            Tentang
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <Button variant="ghost" size="sm" @click="toggleMobileMenu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </Button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          <NuxtLink 
            to="/" 
            class="text-gray-600 hover:text-green-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            @click="closeMobileMenu"
          >
            Deteksi
          </NuxtLink>
          <NuxtLink 
            to="/dashboard" 
            class="text-gray-600 hover:text-green-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            @click="closeMobileMenu"
          >
            Dashboard
          </NuxtLink>
          <NuxtLink 
            to="/history" 
            class="text-gray-600 hover:text-green-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            @click="closeMobileMenu"
          >
            Riwayat
          </NuxtLink>
          <NuxtLink 
            to="/edukasi" 
            class="text-gray-600 hover:text-green-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            @click="closeMobileMenu"
          >
            Edukasi
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-600 hover:text-green-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            @click="closeMobileMenu"
          >
            Tentang
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
