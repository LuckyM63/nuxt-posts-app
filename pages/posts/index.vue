<!-- pages/posts/index.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Posts</h1>
        <p class="text-gray-600">Discover interesting posts from our community</p>
      </div>

      <!-- Loading State -->
      <div v-if="postsStore.loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span class="ml-3 text-gray-600">Loading posts...</span>
      </div>

      <!-- Error State -->
      <div v-else-if="postsStore.error" class="text-center py-12">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {{ postsStore.error }}
        </div>
        <button 
          @click="refreshPosts"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Try Again
        </button>
      </div>

      <!-- Posts Grid -->
      <div v-else-if="postsStore.posts.length" 
           class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard 
          v-for="post in postsStore.posts" 
          :key="post.id" 
          :post="post" 
        />
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-500 text-lg">No posts available</p>
      </div>

      <!-- Cache Info -->
      <div v-if="postsStore.lastFetched" class="mt-8 text-center text-sm text-gray-500">
        <p>
          Data cached for 15 minutes. 
          Last updated: {{ formatDate(postsStore.lastFetched) }}
        </p>
        <button 
          @click="refreshPosts"
          class="mt-2 text-blue-600 hover:text-blue-800 underline"
        >
          Refresh Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from '~/stores/posts'

// Set page meta
definePageMeta({
  title: 'Posts'
})

const postsStore = usePostsStore()

// Fetch posts on component mount
onMounted(async () => {
  try {
    await postsStore.fetchPosts()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
})

// Refresh posts function
const refreshPosts = async () => {
  postsStore.lastFetched = null // Force refresh
  try {
    await postsStore.fetchPosts()
  } catch (error) {
    console.error('Error refreshing posts:', error)
  }
}

// Format date helper
const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString()
}
</script>