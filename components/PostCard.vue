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