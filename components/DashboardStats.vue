<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card class="bg-white shadow">
      <CardHeader>
        <CardTitle>Total Gambar Terdeteksi</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-2xl font-semibold">{{ totalImages }}</p>
      </CardContent>
    </Card>

    <Card class="bg-white shadow">
      <CardHeader>
        <CardTitle>Organik</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-2xl font-semibold text-green-600">{{ totalOrganik }}</p>
      </CardContent>
    </Card>

    <Card class="bg-white shadow">
      <CardHeader>
        <CardTitle>Anorganik</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-2xl font-semibold text-red-600">{{ totalAnorganik }}</p>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const totalImages = 127 // nanti bisa diambil dari backend/Firebase
const totalOrganik = 74
const totalAnorganik = 53
</script>
