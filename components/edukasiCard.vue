<template>
  <Card :class="`border-${color}-500`">
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{{ description }}</p>
    </CardContent>
  </Card>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  color: {
    type: String,
    default: 'gray'
  }
})

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
</script>
