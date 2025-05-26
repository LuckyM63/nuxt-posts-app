<!-- error.vue -->
<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-900 mb-4">{{ error.statusCode }}</h1>
      <p class="text-xl text-gray-600 mb-8">{{ error.statusMessage }}</p>
      <button 
        @click="handleError"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
      >
        Go Home
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>