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

    <!-- Loading State -->
    <div v-if="isLoading && !stats" class="flex items-center justify-center py-12">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      <span class="ml-2 text-gray-600">Memuat data...</span>
    </div>

    <!-- Statistics Cards -->
    <DashboardStat 
      v-if="stats"
      :totalImages="stats.totalImages"
      :totalOrganik="stats.totalOrganik"
      :totalAnorganik="stats.totalAnorganik"
    />

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" v-if="stats">
      <!-- Detection Trend Chart -->
      <Card>
        <CardHeader>
          <CardTitle>Trend Deteksi Harian (7 Hari Terakhir)</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-64">
            <div v-if="chartData.length === 0" class="h-full flex items-center justify-center bg-gray-50 rounded-lg">
              <p class="text-gray-500">Belum ada data untuk ditampilkan</p>
            </div>
            <div v-else class="space-y-2">
              <div v-for="(day, index) in chartData" :key="index" class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span class="text-sm font-medium">{{ day.date }}</span>
                <div class="flex items-center space-x-4">
                  <div class="flex items-center space-x-1">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span class="text-sm">{{ day.organik }}</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span class="text-sm">{{ day.anorganik }}</span>
                  </div>
                  <span class="text-sm font-semibold">Total: {{ day.total }}</span>
                </div>
              </div>
            </div>
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
              <span class="text-sm text-gray-500">{{ organikPercentage }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-green-600 h-2 rounded-full transition-all duration-500" 
                :style="{ width: `${organikPercentage}%` }"
              ></div>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium">Anorganik</span>
              <span class="text-sm text-gray-500">{{ anorganikPercentage }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-red-600 h-2 rounded-full transition-all duration-500" 
                :style="{ width: `${anorganikPercentage}%` }"
              ></div>
            </div>

            <!-- Summary -->
            <div class="mt-4 p-3 bg-blue-50 rounded-lg">
              <h4 class="font-semibold text-blue-800 mb-2">Ringkasan</h4>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span class="text-blue-600">Total Deteksi:</span>
                  <span class="font-semibold ml-1">{{ stats.totalImages }}</span>
                </div>
                <div>
                  <span class="text-blue-600">Akurasi Rata-rata:</span>
                  <span class="font-semibold ml-1">{{ averageAccuracy }}%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Recent Activity -->
    <Card v-if="recentActivities.length > 0">
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
            <div class="text-right">
              <Badge :variant="activity.type === 'organik' ? 'default' : 'destructive'">
                {{ activity.type }}
              </Badge>
              <p class="text-xs text-gray-500 mt-1">{{ activity.detectionCount }} objek</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Empty State -->
    <Card v-if="!isLoading && stats && stats.totalImages === 0">
      <CardContent class="text-center py-12">
        <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Belum Ada Data</h3>
        <p class="text-gray-500 mb-4">Mulai deteksi sampah untuk melihat statistik di dashboard.</p>
        <NuxtLink to="/">
          <Button>Mulai Deteksi</Button>
        </NuxtLink>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import DashboardStat from '@/components/DashboardStats.vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useFirestore } from '@/composables/useFirestore'

useHead({
  title: 'Dashboard - EcoDetect',
  meta: [
    { name: 'description', content: 'Dashboard statistik dan analitik deteksi sampah' }
  ]
})

const { getStatistics, getRecentActivities } = useFirestore()

const isLoading = ref(false)
const stats = ref(null)
const recentActivities = ref([])
const chartData = ref([])

const organikPercentage = computed(() => {
  if (!stats.value || stats.value.totalImages === 0) return 0
  return ((stats.value.totalOrganik / stats.value.totalImages) * 100).toFixed(1)
})

const anorganikPercentage = computed(() => {
  if (!stats.value || stats.value.totalImages === 0) return 0
  return ((stats.value.totalAnorganik / stats.value.totalImages) * 100).toFixed(1)
})

const averageAccuracy = computed(() => {
  // This would be calculated from actual detection confidence scores
  return 87.5 // Placeholder
})

const formatDate = (date) => {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const prepareChartData = (dailyStats) => {
  const last7Days = []
  const today = new Date()
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateKey = date.toISOString().split('T')[0]
    const dayData = dailyStats[dateKey] || { organik: 0, anorganik: 0, total: 0 }
    
    last7Days.push({
      date: date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }),
      ...dayData
    })
  }
  
  return last7Days
}

const loadData = async () => {
  isLoading.value = true
  try {
    const [statisticsData, activitiesData] = await Promise.all([
      getStatistics(),
      getRecentActivities(5)
    ])
    
    stats.value = statisticsData
    recentActivities.value = activitiesData
    chartData.value = prepareChartData(statisticsData.dailyStats || {})
  } catch (error) {
    console.error('Error loading dashboard data:', error)
  } finally {
    isLoading.value = false
  }
}

const refreshData = async () => {
  await loadData()
}

onMounted(() => {
  loadData()
})
</script>
