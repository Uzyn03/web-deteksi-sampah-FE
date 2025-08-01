<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <Card class="w-full max-w-2xl p-6 shadow-lg">
      <CardHeader>
        <CardTitle class="text-2xl font-bold text-center">Deteksi Sampah</CardTitle>
        <CardDescription class="text-center text-gray-600">Unggah gambar untuk mendeteksi sampah organik dan anorganik.</CardDescription>
      </CardHeader>
      <CardContent>
        <!-- Configuration Status -->
        <div class="mb-4 space-y-2">
          <div v-if="!isCloudinaryConfigured" class="p-3 bg-yellow-100 border border-yellow-400 rounded-md">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <p class="text-sm text-yellow-800">
                <strong>Peringatan:</strong> Cloudinary belum dikonfigurasi. Gambar tidak akan disimpan ke cloud.
              </p>
            </div>
          </div>
          
          <div v-if="isCloudinaryConfigured" class="p-3 bg-green-100 border border-green-400 rounded-md">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-sm text-green-800">
                <strong>Siap:</strong> Cloudinary terkonfigurasi. Gambar akan disimpan ke cloud storage.
              </p>
            </div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Image Upload -->
          <div class="mb-2">
            <Label>Upload Gambar Sampah</Label>
            <div class="mt-2">
              <div
                class="flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                @drop="handleDrop"
                @dragover.prevent
                @dragenter.prevent
              >
                <div class="space-y-1 text-center">
                  <div v-if="imagePreview" class="mb-4">
                    <img
                      :src="imagePreview"
                      alt="Preview"
                      class="mx-auto h-32 w-32 object-cover rounded-lg shadow-md"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      @click="removeImage"
                      class="mt-2"
                    >
                      Hapus Gambar
                    </Button>
                  </div>
                  <div v-else>
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          accept="image/*"
                          @change="handleFileChange"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="fileError" class="mt-2 text-sm text-red-600">
              {{ fileError }}
            </div>
          </div>

          <div class="grid w-full items-center gap-1.5">
            <Label for="confidence">Confidence Threshold (0.0 - 1.0)</Label>
            <Input id="confidence" type="number" step="0.01" min="0" max="1" v-model.number="confidenceThreshold" placeholder="0.25" />
          </div>

          <div class="grid w-full items-center gap-1.5">
            <Label for="iou">IoU Threshold (0.0 - 1.0)</Label>
            <Input id="iou" type="number" step="0.01" min="0" max="1" v-model.number="iouThreshold" placeholder="0.45" />
          </div>

          <Button type="submit" :disabled="isSubmitting || !selectedFile" class="w-full">
            <span v-if="isSubmitting" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ currentStep }}
            </span>
            <span v-else>Deteksi Sampah</span>
          </Button>
        </form>

        <div v-if="apiError" class="mt-6 p-4 bg-red-100 text-red-700 rounded-md">
          <p class="font-semibold">Error:</p>
          <p>{{ apiError }}</p>
          <div v-if="debugInfo" class="mt-2 text-xs">
            <details>
              <summary class="cursor-pointer">Debug Info</summary>
              <pre class="mt-2 text-xs bg-red-50 p-2 rounded overflow-auto">{{ debugInfo }}</pre>
            </details>
          </div>
        </div>

        <div v-if="detectionResult" class="mt-6 border-t pt-6">
          <h3 class="text-xl font-semibold mb-4">Hasil Deteksi:</h3>
          <p class="mb-2">Ditemukan: <span class="font-bold">{{ detectionResult.detection_count }} objek</span></p>
          <p class="mb-4">Waktu Pemrosesan: <span class="font-bold">{{ detectionResult.processing_time.toFixed(3) }} detik</span></p>

          <div v-if="detectionResult.annotated_image" class="mb-6">
            <h4 class="text-lg font-medium mb-2">Gambar Teranotasi:</h4>
            <img :src="detectionResult.annotated_image" alt="Annotated Image" class="max-w-full h-auto rounded-md shadow-md" />
          </div>

          <div v-if="detectionResult.detections && detectionResult.detections.length > 0">
            <h4 class="text-lg font-medium mb-2">Detail Deteksi:</h4>
            <ul class="space-y-2">
              <li v-for="(det, index) in detectionResult.detections" :key="index" class="p-3 bg-gray-50 rounded-md border border-gray-200">
                <p><strong>Kelas:</strong> {{ det.class_name }} (ID: {{ det.class_id }})</p>
                <p><strong>Kepercayaan:</strong> {{ (det.confidence * 100).toFixed(2) }}%</p>
                <p><strong>BBox:</strong> (x1: {{ det.bbox.x1.toFixed(2)}}, y1: {{ det.bbox.y1.toFixed(2)}}, x2: {{ det.bbox.x2.toFixed(2)}}, y2: {{ det.bbox.y2.toFixed(2)}})</p>
              </li>
            </ul>
          </div>
          <div v-else>
            <p class="text-gray-500">Tidak ada objek yang terdeteksi pada gambar ini.</p>
          </div>

          <div class="mt-4 flex space-x-2">
            <Button @click="saveToHistory" :disabled="isSaving" variant="outline">
              <span v-if="isSaving">Menyimpan...</span>
              <span v-else>Simpan ke Riwayat</span>
            </Button>
            <Button @click="resetForm" variant="outline">
              Deteksi Lagi
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCloudinary } from '@/composables/useCloudinary'
import { useFirestore } from '@/composables/useFirestore'

// SEO
useHead({
  title: 'Deteksi Sampah - EcoDetect',
  meta: [
    { name: 'description', content: 'Upload gambar untuk mendeteksi sampah organik dan anorganik menggunakan AI' }
  ]
})

const config = useRuntimeConfig()
const { uploadImage } = useCloudinary()
const { saveDetectionResult } = useFirestore()

const selectedFile = ref(null)
const confidenceThreshold = ref(0.25)
const iouThreshold = ref(0.45)
const isSubmitting = ref(false)
const isSaving = ref(false)
const detectionResult = ref(null)
const apiError = ref(null)
const fileError = ref('')
const imagePreview = ref(null)
const cloudinaryImageUrl = ref(null)
const currentStep = ref('')
const debugInfo = ref('')

// Check if Cloudinary is configured
const isCloudinaryConfigured = computed(() => {
  return !!(config.public.cloudinaryCloudName && config.public.cloudinaryUploadPreset)
})

// Get API base URL
const apiBaseUrl = computed(() => {
  return config.public.apiBaseUrl || 'http://localhost:8000'
})

const removeImage = () => {
  selectedFile.value = null
  imagePreview.value = null
  cloudinaryImageUrl.value = null
}

const handleFileChange = (event) => {
  const file = event.target.files[0]
  processFile(file)
}

const handleDrop = (event) => {
  event.preventDefault()
  const file = event.dataTransfer.files[0]
  processFile(file)
}

const processFile = (file) => {
  if (file) {
    if (!file.type.startsWith('image/')) {
      fileError.value = 'Hanya file gambar yang diizinkan.'
      selectedFile.value = null
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      fileError.value = 'Ukuran file maksimal 5MB.'
      selectedFile.value = null
      return
    }
    fileError.value = ''
    selectedFile.value = file
    imagePreview.value = URL.createObjectURL(file)
  } else {
    selectedFile.value = null
    imagePreview.value = null
  }
}

const handleSubmit = async () => {
  if (!selectedFile.value) {
    fileError.value = 'Silakan pilih file gambar terlebih dahulu.'
    return
  }

  isSubmitting.value = true
  apiError.value = null
  detectionResult.value = null
  debugInfo.value = ''

  try {
    let cloudinaryResult = null

    // Try to upload to Cloudinary if configured
    if (isCloudinaryConfigured.value) {
      try {
        currentStep.value = 'Mengupload gambar ke cloud...'
        cloudinaryResult = await uploadImage(selectedFile.value)
        cloudinaryImageUrl.value = cloudinaryResult.url
        console.log('Cloudinary upload successful:', cloudinaryResult.url)
      } catch (cloudinaryError) {
        console.warn('Cloudinary upload failed, continuing without cloud storage:', cloudinaryError)
        debugInfo.value = `Cloudinary Error: ${cloudinaryError.message}`
      }
    }

    // Send to detection API
    currentStep.value = 'Mendeteksi sampah...'
    const formData = new FormData()
    formData.append('file', selectedFile.value)
    formData.append('confidence_threshold', confidenceThreshold.value)
    formData.append('iou_threshold', iouThreshold.value)
    formData.append('return_image', 'true')

    const detectionUrl = `${apiBaseUrl.value}/api/v1/detection/detect`
    console.log('Sending detection request to:', detectionUrl)

    const response = await fetch(detectionUrl, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ detail: 'Unknown error' }))
      throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    detectionResult.value = {
      ...data,
      originalImageUrl: cloudinaryResult?.url || imagePreview.value,
      cloudinaryPublicId: cloudinaryResult?.publicId || null,
    }

    currentStep.value = 'Selesai!'
  } catch (error) {
    apiError.value = error.message
    console.error('Error during detection:', error)
    debugInfo.value = JSON.stringify({
      error: error.message,
      stack: error.stack,
      apiUrl: `${apiBaseUrl.value}/api/v1/detection/detect`,
      cloudinaryConfigured: isCloudinaryConfigured.value,
    }, null, 2)
  } finally {
    isSubmitting.value = false
    currentStep.value = ''
  }
}

const saveToHistory = async () => {
  if (!detectionResult.value) return

  isSaving.value = true
  try {
    // Determine dominant type
    const organikCount = detectionResult.value.detections?.filter(d => 
      d.class_name.toLowerCase().includes('organic') || 
      d.class_name.toLowerCase().includes('organik')
    ).length || 0
    
    const anorganikCount = detectionResult.value.detections?.filter(d => 
      !d.class_name.toLowerCase().includes('organic') && 
      !d.class_name.toLowerCase().includes('organik')
    ).length || 0

    const dominantType = organikCount > anorganikCount ? 'organik' : 'anorganik'

    const historyData = {
      originalImageUrl: detectionResult.value.originalImageUrl,
      annotatedImageUrl: detectionResult.value.annotated_image,
      cloudinaryPublicId: detectionResult.value.cloudinaryPublicId,
      detectionCount: detectionResult.value.detection_count,
      processingTime: detectionResult.value.processing_time,
      confidenceThreshold: confidenceThreshold.value,
      iouThreshold: iouThreshold.value,
      dominantType,
      detections: detectionResult.value.detections,
      avgConfidence: detectionResult.value.detections?.reduce((sum, d) => sum + d.confidence, 0) / (detectionResult.value.detections?.length || 1) * 100,
    }

    await saveDetectionResult(historyData)
    
    // Show success message
    apiError.value = null
    alert('Hasil deteksi berhasil disimpan ke riwayat!')
  } catch (error) {
    console.error('Error saving to history:', error)
    apiError.value = 'Gagal menyimpan ke riwayat: ' + error.message
  } finally {
    isSaving.value = false
  }
}

const resetForm = () => {
  selectedFile.value = null
  imagePreview.value = null
  detectionResult.value = null
  apiError.value = null
  fileError.value = ''
  cloudinaryImageUrl.value = null
  debugInfo.value = ''
}
</script>
