<template>
  <div class="min-h-screen bg-gray-50">
    <div class="z-90 sticky top-0">
      <AppNavigation />
    </div>

    <main class="container mx-auto px-4 py-8">
      <NuxtPage />
    </main>

    <footer class="bg-white border-t mt-16">
      <div class="container mx-auto px-4 py-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div
                class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
              </div>
              <span class="text-xl font-bold text-gray-800">EcoDetect</span>
            </div>
            <p class="text-gray-600 text-sm">
              Sistem deteksi sampah berbasis AI untuk lingkungan yang lebih
              bersih dan berkelanjutan.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-gray-800 mb-4">Fitur</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>Deteksi Sampah AI</li>
              <li>Dashboard Analitik</li>
              <li>Riwayat Deteksi</li>
              <li>Edukasi Lingkungan</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-gray-800 mb-4">Navigasi</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>
                <NuxtLink to="/" class="hover:text-green-600">Deteksi</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/dashboard" class="hover:text-green-600"
                  >Dashboard</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/history" class="hover:text-green-600"
                  >Riwayat</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/edukasi" class="hover:text-green-600"
                  >Edukasi</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/about" class="hover:text-green-600"
                  >Tentang</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 EcoDetect by Uzyn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import AppNavigation from "@/components/AppNavigation.vue";
</script>
