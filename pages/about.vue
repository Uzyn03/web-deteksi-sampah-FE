<template>
  <div class="max-w-4xl mx-auto space-y-8">
    <!-- Hero Section -->
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-gray-900">Tentang EcoDetect</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Sistem deteksi sampah berbasis AI untuk membantu pengelolaan limbah yang lebih efektif dan berkelanjutan.
      </p>
    </div>

    <!-- Mission & Vision -->
    <div class="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span>Misi Kami</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-gray-600">
            Mengembangkan teknologi AI yang dapat membantu masyarakat dalam mengidentifikasi dan memilah sampah dengan akurat, 
            sehingga mendukung program daur ulang dan pengelolaan limbah yang berkelanjutan.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="flex items-center space-x-2">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            <span>Visi Kami</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-gray-600">
            Menjadi platform terdepan dalam teknologi deteksi sampah yang membantu menciptakan lingkungan yang lebih bersih 
            dan mendukung ekonomi sirkular melalui pengelolaan sampah yang cerdas.
          </p>
        </CardContent>
      </Card>
    </div>

    <!-- Features -->
    <Card>
      <CardHeader>
        <CardTitle>Fitur Utama</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Deteksi Akurat</h3>
              <p class="text-sm text-gray-600">AI dengan tingkat akurasi tinggi dalam mengidentifikasi jenis sampah</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Dashboard Analitik</h3>
              <p class="text-sm text-gray-600">Visualisasi data dan statistik deteksi sampah</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Edukasi</h3>
              <p class="text-sm text-gray-600">Informasi edukatif tentang pengelolaan sampah</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Riwayat Deteksi</h3>
              <p class="text-sm text-gray-600">Penyimpanan dan pelacakan hasil deteksi</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Mudah Digunakan</h3>
              <p class="text-sm text-gray-600">Interface yang intuitif dan user-friendly</p>
            </div>
          </div>

          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Export Data</h3>
              <p class="text-sm text-gray-600">Ekspor hasil deteksi untuk analisis lebih lanjut</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Technology Stack -->
    <Card>
      <CardHeader>
        <CardTitle>Teknologi yang Digunakan</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="text-center p-4 border rounded-lg">
            <div class="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span class="text-green-600 font-bold">AI</span>
            </div>
            <h3 class="font-semibold">Machine Learning</h3>
            <p class="text-sm text-gray-600">YOLO Object Detection</p>
          </div>

          <div class="text-center p-4 border rounded-lg">
            <div class="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span class="text-blue-600 font-bold">Vue</span>
            </div>
            <h3 class="font-semibold">Frontend</h3>
            <p class="text-sm text-gray-600">Nuxt 3 + Tailwind CSS</p>
          </div>

          <div class="text-center p-4 border rounded-lg">
            <div class="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span class="text-purple-600 font-bold">API</span>
            </div>
            <h3 class="font-semibold">Backend</h3>
            <p class="text-sm text-gray-600">FastAPI + Python</p>
          </div>

          <div class="text-center p-4 border rounded-lg">
            <div class="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span class="text-orange-600 font-bold">DB</span>
            </div>
            <h3 class="font-semibold">Database</h3>
            <p class="text-sm text-gray-600">Firebase Firestore</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Contact -->
<Card>
  <CardHeader>
    <CardTitle>Kontak Developer</CardTitle>
  </CardHeader>
  <CardContent>
    <div class="flex items-center justify-center space-x-8">
      <div class="text-center">
        <!-- Profile Photo -->
        <div class="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden border-2 border-gray-200">
          <img 
            :src="profilePhoto" 
            :alt="developerName"
            class="w-full h-full object-cover"
            @error="handleImageError"
          />
        </div>
        
        <!-- Name and Title -->
        <h3 class="font-semibold text-lg">{{ developerName }}</h3>
        <p class="text-sm text-gray-600 mb-3">{{ developerTitle }}</p>
        
        <!-- Contact Icons -->
        <div class="flex items-center justify-center space-x-4">
          <!-- Instagram -->
          <a 
            :href="instagramUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
            title="Follow di Instagram"
          >
            <Instagram class="w-5 h-5" />
          </a>
          
          <!-- Email -->
          <a 
            :href="emailUrl" 
            class="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
            title="Kirim Email"
          >
            <Mail class="w-5 h-5" />
          </a>
          
          <!-- GitHub -->
          <a 
            :href="githubUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
            title="GitHub Profile"
          >
            <Github class="w-5 h-5" />
          </a>
          <!-- linkedln -->
          <a 
            :href="linkedinUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-900 transition-all duration-300 transform hover:scale-110"
            title="linkedin Profile"
          >
            <linkedin class="w-5 h-5" />
          </a>
        </div>
        
        <!-- Contact Info Text -->
        <div class="mt-4 space-y-1">
          <p class="text-xs text-gray-500">
            📧 {{ developerEmail }}
          </p>
          <p class="text-xs text-gray-500">
            📱 Ikuti untuk update project terbaru
          </p>
        </div>
      </div>
    </div>
  </CardContent>
</Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Instagram, Mail, Github, Linkedin } from 'lucide-vue-next'

// Data developer - sesuaikan dengan info Anda
const developerName = ref('Uzyn')
const developerTitle = ref('Full Stack Developer')
const developerEmail = ref('ahmadpjn06@gmail.com') // Ganti dengan email Anda
const profilePhoto = ref('https://res.cloudinary.com/dimnxx6fd/image/upload/v1754300812/uzyngans_ivyylk.jpg') // Path ke foto profil Anda

// Social Media URLs - sesuaikan dengan akun Anda
const instagramUrl = ref('https://instagram.com/fauzynn_')
const emailUrl = ref(`mailto:${developerEmail.value}?subject=Tanya tentang EcoDetect&body=Halo Uzyn, saya tertarik dengan project EcoDetect...`)
const githubUrl = ref('https://github.com/uzyn03')
const linkedinUrl = ref('https://www.linkedin.com/in/ahmad-fauzi-869ba22a1/')

// Handle error jika foto tidak ditemukan
const handleImageError = (event) => {
  // Fallback ke avatar default jika foto tidak ditemukan
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAgOCAwek0xMiAxNGE3IDcgMCAwMC03IDdoMTRhNyA3IDAgMDAtNy03eiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
}
</script>
