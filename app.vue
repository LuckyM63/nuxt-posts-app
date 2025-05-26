<!-- app.vue -->
<template>
  <div>
    <nav class="bg-white shadow-lg border-b">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-8">
            <NuxtLink to="/" class="text-2xl font-bold text-gray-900">
              PostsApp
            </NuxtLink>
            <div class="hidden md:flex space-x-6">
              <NuxtLink 
                to="/" 
                class="text-gray-600 hover:text-gray-900 transition-colors"
                active-class="text-blue-600 font-semibold"
              >
                Home
              </NuxtLink>
              <NuxtLink 
                to="/posts" 
                class="text-gray-600 hover:text-gray-900 transition-colors"
                active-class="text-blue-600 font-semibold"
              >
                Posts
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>