<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card class="bg-white shadow hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle class="flex items-center justify-between">
          <span>Total Gambar Terdeteksi</span>
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-3xl font-bold text-blue-600">{{ totalImages }}</p>
        <p class="text-sm text-gray-500 mt-1">Total deteksi dilakukan</p>
      </CardContent>
    </Card>

    <Card class="bg-white shadow hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle class="flex items-center justify-between">
          <span>Sampah Organik</span>
          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-3xl font-bold text-green-600">{{ totalOrganik }}</p>
        <p class="text-sm text-gray-500 mt-1">{{ organikPercentage }}% dari total</p>
      </CardContent>
    </Card>

    <Card class="bg-white shadow hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle class="flex items-center justify-between">
          <span>Sampah Anorganik</span>
          <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-3xl font-bold text-red-600">{{ totalAnorganik }}</p>
        <p class="text-sm text-gray-500 mt-1">{{ anorganikPercentage }}% dari total</p>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const props = defineProps({
  totalImages: {
    type: Number,
    default: 0
  },
  totalOrganik: {
    type: Number,
    default: 0
  },
  totalAnorganik: {
    type: Number,
    default: 0
  }
})

const organikPercentage = computed(() => {
  if (props.totalImages === 0) return 0
  return ((props.totalOrganik / props.totalImages) * 100).toFixed(1)
})

const anorganikPercentage = computed(() => {
  if (props.totalImages === 0) return 0
  return ((props.totalAnorganik / props.totalImages) * 100).toFixed(1)
})
</script>
