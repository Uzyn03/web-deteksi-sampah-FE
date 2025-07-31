<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-900">Riwayat Deteksi</h1>
      <div class="flex space-x-2">
        <Button variant="outline" @click="clearHistory" :disabled="historyItems.length === 0">
          Hapus Semua
        </Button>
        <Button @click="exportHistory" :disabled="historyItems.length === 0">
          Export
        </Button>
      </div>
    </div>

    <!-- Filter Section -->
    <Card>
      <CardContent class="pt-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label for="dateFrom">Dari Tanggal</Label>
            <Input id="dateFrom" type="date" v-model="filters.dateFrom" />
          </div>
          <div>
            <Label for="dateTo">Sampai Tanggal</Label>
            <Input id="dateTo" type="date" v-model="filters.dateTo" />
          </div>
          <div>
            <Label for="wasteType">Jenis Sampah</Label>
            <select id="wasteType" v-model="filters.wasteType" class="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Semua</option>
              <option value="organik">Organik</option>
              <option value="anorganik">Anorganik</option>
            </select>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- History List -->
    <div v-if="filteredHistory.length === 0" class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <h3 class="mt-2 text-sm font-medium text-gray-900">Tidak ada riwayat</h3>
      <p class="mt-1 text-sm text-gray-500">Mulai deteksi sampah untuk melihat riwayat di sini.</p>
    </div>

    <div v-else class="grid gap-4">
      <Card v-for="item in filteredHistory" :key="item.id" class="overflow-hidden">
        <CardContent class="p-0">
          <div class="flex">
            <!-- Image -->
            <div class="w-32 h-32 flex-shrink-0">
              <img 
                :src="item.originalImage" 
                :alt="`Detection ${item.id}`"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Content -->
            <div class="flex-1 p-4">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-lg font-semibold">Deteksi #{{ item.id }}</h3>
                  <p class="text-sm text-gray-500">{{ formatDate(item.timestamp) }}</p>
                </div>
                <Badge :variant="item.dominantType === 'organik' ? 'default' : 'destructive'">
                  {{ item.dominantType }}
                </Badge>
              </div>
              
              <div class="mt-2 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="font-medium">Objek Terdeteksi:</span>
                  <span class="ml-1">{{ item.detectionCount }}</span>
                </div>
                <div>
                  <span class="font-medium">Waktu Proses:</span>
                  <span class="ml-1">{{ item.processingTime }}s</span>
                </div>
                <div>
                  <span class="font-medium">Confidence:</span>
                  <span class="ml-1">{{ item.avgConfidence }}%</span>
                </div>
                <div>
                  <span class="font-medium">IoU Threshold:</span>
                  <span class="ml-1">{{ item.iouThreshold }}</span>
                </div>
              </div>

              <div class="mt-3 flex space-x-2">
                <Button size="sm" variant="outline" @click="viewDetails(item)">
                  Lihat Detail
                </Button>
                <Button size="sm" variant="outline" @click="downloadResult(item)">
                  Download
                </Button>
                <Button size="sm" variant="destructive" @click="deleteItem(item.id)">
                  Hapus
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const filters = ref({
  dateFrom: '',
  dateTo: '',
  wasteType: ''
})

// Mock data - replace with Firebase data
const historyItems = ref([
  {
    id: 1,
    originalImage: '/placeholder.svg?height=128&width=128',
    annotatedImage: '/placeholder.svg?height=400&width=400',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    detectionCount: 3,
    processingTime: 1.234,
    avgConfidence: 85.6,
    iouThreshold: 0.45,
    dominantType: 'organik',
    detections: []
  },
  {
    id: 2,
    originalImage: '/placeholder.svg?height=128&width=128',
    annotatedImage: '/placeholder.svg?height=400&width=400',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    detectionCount: 2,
    processingTime: 0.987,
    avgConfidence: 92.3,
    iouThreshold: 0.45,
    dominantType: 'anorganik',
    detections: []
  }
])

const filteredHistory = computed(() => {
  return historyItems.value.filter(item => {
    const matchesDateFrom = !filters.value.dateFrom || 
      item.timestamp >= new Date(filters.value.dateFrom)
    const matchesDateTo = !filters.value.dateTo || 
      item.timestamp <= new Date(filters.value.dateTo + 'T23:59:59')
    const matchesType = !filters.value.wasteType || 
      item.dominantType === filters.value.wasteType
    
    return matchesDateFrom && matchesDateTo && matchesType
  })
})

const formatDate = (date) => {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const viewDetails = (item) => {
  // Navigate to detail page or show modal
  console.log('View details for:', item)
}

const downloadResult = (item) => {
  // Download annotated image
  const link = document.createElement('a')
  link.href = item.annotatedImage
  link.download = `detection-${item.id}.jpg`
  link.click()
}

const deleteItem = (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus item ini?')) {
    const index = historyItems.value.findIndex(item => item.id === id)
    if (index > -1) {
      historyItems.value.splice(index, 1)
    }
  }
}

const clearHistory = () => {
  if (confirm('Apakah Anda yakin ingin menghapus semua riwayat?')) {
    historyItems.value = []
  }
}

const exportHistory = () => {
  // Export to CSV or JSON
  const dataStr = JSON.stringify(historyItems.value, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'detection-history.json'
  link.click()
}
</script>
