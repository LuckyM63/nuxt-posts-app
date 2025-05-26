<template>
  <div 
    class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
    @click="navigateToPost"
  >
    <div class="mb-4">
      <h3 class="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
        {{ post.title }}
      </h3>
      <p class="text-gray-600 text-sm line-clamp-3">
        {{ post.body }}
      </p>
    </div>
    
    <div class="flex items-center justify-between text-sm text-gray-500">
      <span>Post #{{ post.id }}</span>
      <span>User {{ post.userId }}</span>
    </div>
    
    <div v-if="post.tags && post.tags.length" class="mt-4">
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in post.tags.slice(0, 3)" 
          :key="tag"
          class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
        >
          #{{ tag }}
        </span>
        <span 
          v-if="post.tags.length > 3"
          class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
        >
          +{{ post.tags.length - 3 }} more
        </span>
      </div>
    </div>
    
    <div v-if="post.reactions" class="mt-4 flex items-center">
      <svg class="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
      </svg>
      <span class="text-sm text-gray-600">{{ post.reactions }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const navigateToPost = () => {
  router.push(`/posts/${props.post.id}`)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>