<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      <Button @click="refreshData" :disabled="isLoading">
        <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Refresh
      </Button>
    </div>

    <!-- Statistics Cards -->
    <DashboardStat 
      :totalImages="stats.totalImages"
      :totalOrganik="stats.totalOrganik"
      :totalAnorganik="stats.totalAnorganik"
    />

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Detection Trend Chart -->
      <Card>
        <CardHeader>
          <CardTitle>Trend Deteksi Mingguan</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p class="text-gray-500">Chart akan ditampilkan di sini</p>
          </div>
        </CardContent>
      </Card>

      <!-- Waste Type Distribution -->
      <Card>
        <CardHeader>
          <CardTitle>Distribusi Jenis Sampah</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium">Organik</span>
              <span class="text-sm text-gray-500">{{ ((stats.totalOrganik / stats.totalImages) * 100).toFixed(1) }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-green-600 h-2 rounded-full" 
                :style="{ width: `${(stats.totalOrganik / stats.totalImages) * 100}%` }"
              ></div>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium">Anorganik</span>
              <span class="text-sm text-gray-500">{{ ((stats.totalAnorganik / stats.totalImages) * 100).toFixed(1) }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-red-600 h-2 rounded-full" 
                :style="{ width: `${(stats.totalAnorganik / stats.totalImages) * 100}%` }"
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Recent Activity -->
    <Card>
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div v-for="activity in recentActivities" :key="activity.id" class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium">{{ activity.description }}</p>
              <p class="text-xs text-gray-500">{{ formatDate(activity.timestamp) }}</p>
            </div>
            <Badge :variant="activity.type === 'organik' ? 'default' : 'destructive'">
              {{ activity.type }}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DashboardStat from '@/components/DashboardStats.vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const isLoading = ref(false)
const stats = ref({
  totalImages: 127,
  totalOrganik: 74,
  totalAnorganik: 53
})

const recentActivities = ref([
  {
    id: 1,
    description: 'Deteksi sampah organik berhasil',
    type: 'organik',
    timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
  },
  {
    id: 2,
    description: 'Deteksi sampah anorganik berhasil',
    type: 'anorganik',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
  },
  {
    id: 3,
    description: 'Deteksi sampah organik berhasil',
    type: 'organik',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5) // 5 hours ago
  }
])

const formatDate = (date) => {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const refreshData = async () => {
  isLoading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  // Here you would fetch real data from Firebase
  isLoading.value = false
}

onMounted(() => {
  // Load initial data from Firebase
})
</script>
