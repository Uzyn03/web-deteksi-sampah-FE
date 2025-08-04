<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-900">Riwayat Deteksi</h1>
      <div class="flex space-x-2">
        <Button variant="outline" @click="clearHistory" :disabled="historyItems.length === 0 || isLoading">
          Hapus Semua
        </Button>
        <Button @click="exportHistory" :disabled="historyItems.length === 0 || isLoading">
          Export
        </Button>
        <Button @click="loadHistory" :disabled="isLoading">
          <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Refresh
        </Button>
      </div>
    </div>

    <!-- Filter Section -->
    <Card>
      <CardContent class="pt-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label for="dateFrom">Dari Tanggal</Label>
            <Input id="dateFrom" type="date" v-model="filters.dateFrom" @change="applyFilters" />
          </div>
          <div>
            <Label for="dateTo">Sampai Tanggal</Label>
            <Input id="dateTo" type="date" v-model="filters.dateTo" @change="applyFilters" />
          </div>
          <div>
            <Label for="wasteType">Jenis Sampah</Label>
            <select id="wasteType" v-model="filters.wasteType" @change="applyFilters" class="w-full p-2 border border-gray-300 rounded-md">
              <option value="">Semua</option>
              <option value="organik">Organik</option>
              <option value="anorganik">Anorganik</option>
            </select>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Loading State -->
    <div v-if="isLoading" class="flex items-center justify-center py-12">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      <span class="ml-2 text-gray-600">Memuat riwayat...</span>
    </div>

    <!-- History List -->
    <div v-else-if="filteredHistory.length === 0" class="text-center py-12">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <h3 class="mt-2 text-sm font-medium text-gray-900">Tidak ada riwayat</h3>
      <p class="mt-1 text-sm text-gray-500">
        {{ historyItems.length === 0 ? 'Mulai deteksi sampah untuk melihat riwayat di sini.' : 'Tidak ada data yang sesuai dengan filter.' }}
      </p>
      <NuxtLink to="/" v-if="historyItems.length === 0">
        <Button class="mt-4">Mulai Deteksi</Button>
      </NuxtLink>
    </div>

    <div v-else class="grid gap-4">
      <Card v-for="item in filteredHistory" :key="item.id" class="overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent class="p-0">
          <div class="flex">
            <!-- Image -->
            <div class="w-32 h-32 mt-8 ml-4 flex-shrink-0">
              <img 
                :src="item.originalImageUrl || '/placeholder.svg?height=128&width=128'" 
                :alt="`Detection ${item.id}`"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </div>
            
            <!-- Content -->
            <div class="flex-1 p-4 ">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-lg font-semibold">Deteksi #{{ item.id.slice(-6) }}</h3>
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
                  <span class="ml-1">{{ item.processingTime?.toFixed(3) }}s</span>
                </div>
                <div>
                  <span class="font-medium">Confidence:</span>
                  <span class="ml-1">{{ item.avgConfidence?.toFixed(1) }}%</span>
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
                <Button size="sm" variant="outline" @click="downloadResult(item)" v-if="item.annotatedImageUrl">
                  Download
                </Button>
                <Button size="sm" variant="destructive" @click="deleteItem(item.id)" :disabled="isDeleting">
                  Hapus
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Pagination -->
    <div v-if="filteredHistory.length > 0" class="flex items-center justify-between">
      <p class="text-sm text-gray-700">
        Menampilkan {{ filteredHistory.length }} dari {{ historyItems.length }} hasil
      </p>
      <div class="flex space-x-2">
        <Button variant="outline" size="sm" @click="loadMore" v-if="hasMore" :disabled="isLoading">
          Muat Lebih Banyak
        </Button>
      </div>
    </div>

    <!-- Detail Modal -->
    <div v-if="selectedItem" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeModal">
      <Card class="max-w-4xl max-h-[90vh] overflow-y-auto m-4" @click.stop>
        <CardHeader>
          <CardTitle>Detail Deteksi #{{ selectedItem.id.slice(-6) }}</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-2">Gambar Asli</h4>
              <img :src="selectedItem.originalImageUrl" alt="Original" class="w-full rounded-lg" />
            </div>
            <div v-if="selectedItem.annotatedImageUrl">
              <h4 class="font-semibold mb-2">Gambar Teranotasi</h4>
              <img :src="selectedItem.annotatedImageUrl" alt="Annotated" class="w-full rounded-lg" />
            </div>
          </div>
          
          <div v-if="selectedItem.detections && selectedItem.detections.length > 0">
            <h4 class="font-semibold mb-2">Detail Deteksi</h4>
            <div class="space-y-2 max-h-40 overflow-y-auto">
              <div v-for="(det, index) in selectedItem.detections" :key="index" class="p-3 bg-gray-50 rounded-md text-sm">
                <p><strong>Kelas:</strong> {{ det.class_name }}</p>
                <p><strong>Kepercayaan:</strong> {{ (det.confidence * 100).toFixed(2) }}%</p>
              </div>
            </div>
          </div>
          
          <div class="flex justify-end space-x-2">
            <Button variant="outline" @click="closeModal">Tutup</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFirestore } from '@/composables/useFirestore'

const { getDetectionHistory, deleteDetection } = useFirestore()

const filters = ref({
  dateFrom: '',
  dateTo: '',
  wasteType: ''
})

const historyItems = ref([])
const isLoading = ref(false)
const isDeleting = ref(false)
const selectedItem = ref(null)
const hasMore = ref(false)
const currentLimit = ref(20)

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

const loadHistory = async () => {
  isLoading.value = true
  try {
    const history = await getDetectionHistory(currentLimit.value)
    historyItems.value = history
    hasMore.value = history.length === currentLimit.value
  } catch (error) {
    console.error('Error loading history:', error)
  } finally {
    isLoading.value = false
  }
}

const loadMore = async () => {
  currentLimit.value += 20
  await loadHistory()
}

const applyFilters = () => {
  // Filters are applied via computed property
}

const viewDetails = (item) => {
  selectedItem.value = item
}

const closeModal = () => {
  selectedItem.value = null
}

const downloadResult = (item) => {
  if (item.annotatedImageUrl) {
    const link = document.createElement('a')
    link.href = item.annotatedImageUrl
    link.download = `detection-${item.id.slice(-6)}.jpg`
    link.click()
  }
}

const deleteItem = async (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus item ini?')) {
    isDeleting.value = true
    try {
      await deleteDetection(id)
      const index = historyItems.value.findIndex(item => item.id === id)
      if (index > -1) {
        historyItems.value.splice(index, 1)
      }
    } catch (error) {
      console.error('Error deleting item:', error)
      alert('Gagal menghapus item')
    } finally {
      isDeleting.value = false
    }
  }
}

const clearHistory = async () => {
  if (confirm('Apakah Anda yakin ingin menghapus semua riwayat?')) {
    isLoading.value = true
    try {
      for (const item of historyItems.value) {
        await deleteDetection(item.id)
      }
      historyItems.value = []
    } catch (error) {
      console.error('Error clearing history:', error)
      alert('Gagal menghapus riwayat')
    } finally {
      isLoading.value = false
    }
  }
}

const exportHistory = () => {
  const dataStr = JSON.stringify(filteredHistory.value, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = `detection-history-${new Date().toISOString().split('T')[0]}.json`
  link.click()
}

const handleImageError = (event) => {
  event.target.src = '/placeholder.svg?height=128&width=128'
}

useHead({
  title: 'Riwayat Deteksi - EcoDetect',
  meta: [
    { name: 'description', content: 'Riwayat hasil deteksi sampah yang telah dilakukan' }
  ]
})

onMounted(() => {
  loadHistory()
})
</script>
