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
            <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="font-semibold">Uzyn</h3>
            <p class="text-sm text-gray-600">Full Stack Developer</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
</script>
