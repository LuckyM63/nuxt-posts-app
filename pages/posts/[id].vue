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
      <div v-else-if="postsStore.error" class="text-center py-12">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {{ postsStore.error }}
        </div>
        <button 
          @click="fetchPost"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Try Again
        </button>
      </div>

      <!-- Post Detail -->
      <div v-else-if="postsStore.currentPost" class="max-w-4xl mx-auto">
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

          <!-- Tags -->
          <div v-if="postsStore.currentPost.tags && postsStore.currentPost.tags.length" 
               class="mb-8">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in postsStore.currentPost.tags" 
                :key="tag"
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Reactions -->
          <div v-if="postsStore.currentPost.reactions" class="mb-8">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
              <span class="text-lg text-gray-700">{{ postsStore.currentPost.reactions }} reactions</span>
            </div>
          </div>

          <!-- Navigation -->
          <div class="border-t pt-8 mt-8">
            <div class="flex justify-between items-center">
              <button 
                @click="$router.push('/posts')"
                class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded transition-colors"
              >
                All Posts
              </button>
              <div class="flex space-x-4">
                <button 
                  v-if="postsStore.currentPost.id > 1"
                  @click="navigateToPost(postsStore.currentPost.id - 1)"
                  class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Previous
                </button>
                <button 
                  @click="navigateToPost(postsStore.currentPost.id + 1)"
                  class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Not Found -->
      <div v-else class="text-center py-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h2>
        <p class="text-gray-600 mb-6">The post you're looking for doesn't exist.</p>
        <button 
          @click="$router.push('/posts')"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors"
        >
          Back to Posts
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from '~/stores/posts'

const route = useRoute()
const router = useRouter()
const postsStore = usePostsStore()

const postId = computed(() => parseInt(route.params.id))

// Fetch post on component mount and when route changes
watch(postId, fetchPost, { immediate: true })

async function fetchPost() {
  if (!postId.value || isNaN(postId.value)) {
    await router.push('/posts')
    return
  }

  try {
    await postsStore.fetchPostById(postId.value)
  } catch (error) {
    console.error('Error fetching post:', error)
  }
}

function navigateToPost(id) {
  router.push(`/posts/${id}`)
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