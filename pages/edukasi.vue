<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <!-- Header -->
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-gray-900">Edukasi Pemilahan Sampah</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Pelajari cara memilah sampah dengan benar untuk mendukung lingkungan yang lebih bersih dan berkelanjutan.
      </p>
    </div>

    <!-- Main Categories -->
    <div class="grid md:grid-cols-2 gap-8">
      <EdukasiCard
        title="Sampah Organik"
        description="Sampah yang mudah terurai secara alami oleh mikroorganisme dalam waktu relatif singkat."
        color="green"
      />
      <EdukasiCard
        title="Sampah Anorganik"
        description="Sampah yang sulit atau tidak dapat terurai secara alami dan membutuhkan waktu yang sangat lama."
        color="red"
      />
    </div>

    <!-- Detailed Information -->
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Organic Waste Details -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center space-x-2 text-green-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            <span>Sampah Organik</span>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div>
            <h4 class="font-semibold mb-2">Contoh Sampah Organik:</h4>
            <ul class="grid grid-cols-2 gap-2 text-sm">
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Sisa makanan</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Kulit buah</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Daun kering</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Ranting pohon</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Kertas bekas</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Kardus</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-2">Cara Pengelolaan:</h4>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start space-x-2">
                <span class="text-green-600 font-bold">1.</span>
                <span>Pisahkan dari sampah anorganik</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-600 font-bold">2.</span>
                <span>Buat kompos untuk pupuk tanaman</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-600 font-bold">3.</span>
                <span>Gunakan untuk biogas jika memungkinkan</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-600 font-bold">4.</span>
                <span>Kurangi porsi makanan untuk mengurangi sisa</span>
              </li>
            </ul>
          </div>

          <div class="p-3 bg-green-50 rounded-lg">
            <p class="text-sm text-green-800">
              <strong>💡 Tips:</strong> Sampah organik dapat terurai dalam 2-6 bulan dan bermanfaat untuk kesuburan tanah.
            </p>
          </div>
        </CardContent>
      </Card>

      <!-- Inorganic Waste Details -->
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center space-x-2 text-red-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
            <span>Sampah Anorganik</span>
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div>
            <h4 class="font-semibold mb-2">Contoh Sampah Anorganik:</h4>
            <ul class="grid grid-cols-2 gap-2 text-sm">
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Botol plastik</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Kaleng minuman</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Kantong plastik</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Botol kaca</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Styrofoam</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Logam bekas</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-2">Cara Pengelolaan:</h4>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start space-x-2">
                <span class="text-red-600 font-bold">1.</span>
                <span>Pisahkan berdasarkan jenis material</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-red-600 font-bold">2.</span>
                <span>Bersihkan sebelum dibuang</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-red-600 font-bold">3.</span>
                <span>Jual ke pengepul atau bank sampah</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-red-600 font-bold">4.</span>
                <span>Daur ulang menjadi produk baru</span>
              </li>
            </ul>
          </div>

          <div class="p-3 bg-red-50 rounded-lg">
            <p class="text-sm text-red-800">
              <strong>⚠️ Perhatian:</strong> Sampah anorganik dapat bertahan hingga ratusan tahun di lingkungan.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- 3R Principle -->
    <Card>
      <CardHeader>
        <CardTitle class="text-center">Prinsip 3R: Reduce, Reuse, Recycle</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center space-y-3">
            <div class="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-blue-700">Reduce</h3>
            <p class="text-sm text-gray-600">
              Kurangi penggunaan barang yang dapat menghasilkan sampah. Pilih produk dengan kemasan minimal.
            </p>
          </div>
          
          <div class="text-center space-y-3">
            <div class="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-green-700">Reuse</h3>
            <p class="text-sm text-gray-600">
              Gunakan kembali barang yang masih layak pakai untuk fungsi yang sama atau berbeda.
            </p>
          </div>
          
          <div class="text-center space-y-3">
            <div class="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-purple-700">Recycle</h3>
            <p class="text-sm text-gray-600">
              Daur ulang sampah menjadi produk baru yang bermanfaat dan bernilai ekonomis.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Tips Section -->
    <div class="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle class="text-green-700">Tips Mengurangi Sampah Organik</CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start space-x-2">
              <span class="text-green-600">•</span>
              <span>Beli makanan sesuai kebutuhan</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-green-600">•</span>
              <span>Simpan makanan dengan benar</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-green-600">•</span>
              <span>Manfaatkan sisa makanan untuk kompos</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-green-600">•</span>
              <span>Berikan sisa makanan layak untuk hewan</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="text-red-700">Tips Mengurangi Sampah Anorganik</CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start space-x-2">
              <span class="text-red-600">•</span>
              <span>Gunakan tas belanja yang dapat digunakan berulang</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-red-600">•</span>
              <span>Pilih produk dengan kemasan yang dapat didaur ulang</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-red-600">•</span>
              <span>Hindari penggunaan produk sekali pakai</span>
            </li>
            <li class="flex items-start space-x-2">
              <span class="text-red-600">•</span>
              <span>Jual sampah anorganik ke bank sampah</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>

    <!-- Call to Action -->
    <Card class="bg-gradient-to-r from-green-50 to-blue-50">
      <CardContent class="text-center py-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Mulai Deteksi Sampah Anda</h3>
        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
          Gunakan teknologi AI kami untuk membantu mengidentifikasi jenis sampah dan belajar cara pengelolaan yang tepat.
        </p>
        <NuxtLink to="/">
          <Button size="lg" class="bg-green-600 hover:bg-green-700">
            Mulai Deteksi Sekarang
          </Button>
        </NuxtLink>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import EdukasiCard from '@/components/edukasiCard.vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

useHead({
  title: 'Edukasi Pemilahan Sampah - EcoDetect',
  meta: [
    { name: 'description', content: 'Pelajari cara memilah sampah organik dan anorganik dengan benar untuk lingkungan yang lebih bersih' }
  ]
})
</script>
