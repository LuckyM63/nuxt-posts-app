<!-- pages/posts/[id].vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <!-- Back Button -->
      <div class="mb-6">
        <button 
          @click="$router.push('/posts')"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Posts
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="postsStore.loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span class="ml-3 text-gray-600">Loading post...</span>
      </div>

      <!-- Error State -->
      <div v-else-if="postsStore.error || !postsStore.currentPost" class="text-center py-12">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {{ postsStore.error || 'Post not found' }}
        </div>
        <div class="flex justify-center space-x-4">
          <button 
            @click="fetchPost"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Try Again
          </button>
          <button 
            @click="$router.push('/posts')"
            class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Back to Posts
          </button>
        </div>
      </div>

      <!-- Post Detail -->
      <div v-else class="max-w-4xl mx-auto">
        <article class="bg-white rounded-lg shadow-lg p-8">
          <header class="mb-8">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
              {{ postsStore.currentPost.title }}
            </h1>
            <div class="flex items-center text-gray-600 text-sm">
              <span class="mr-4">Post #{{ postsStore.currentPost.id }}</span>
              <span class="mr-4">By User {{ postsStore.currentPost.userId }}</span>
            </div>
          </header>

          <div class="prose prose-lg max-w-none mb-8">
            <p class="text-gray-700 leading-relaxed text-lg">
              {{ postsStore.currentPost.body }}
            </p>
          </div>

         

          <!-- Navigation -->
          <div class="border-t pt-8 mt-8">
            <div class="text-center">
              <button 
                @click="$router.push('/posts')"
                class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded transition-colors"
              >
                All Posts
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from '~/stores/posts'

const route = useRoute()
const router = useRouter()
const postsStore = usePostsStore()

// Reactive data
const currentId = computed(() => parseInt(route.params.id))

// Watch for route changes and fetch post
watch(() => route.params.id, async (newId) => {
  if (newId) {
    await fetchPost()
  }
}, { immediate: true })

async function fetchPost() {
  if (!currentId.value || isNaN(currentId.value)) {
    await router.push('/posts')
    return
  }

  try {
    await postsStore.fetchPostById(currentId.value)
  } catch (error) {
    console.error('Error fetching post:', error)
  }
}

// Clear current post when leaving the page
onUnmounted(() => {
  postsStore.clearCurrentPost()
})

// Set dynamic page title
useHead({
  title: computed(() => postsStore.currentPost?.title || 'Post Detail')
})
</script>