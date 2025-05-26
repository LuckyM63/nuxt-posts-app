<!-- pages/index.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Floating Particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-30"></div>
      <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
      <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300 rounded-full animate-bounce opacity-25"></div>
      <div class="absolute top-2/3 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-35"></div>
    </div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <div class="text-center">
        <!-- Glowing Title -->
        <h1 class="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-8 animate-pulse">
          Welcome to PostsApp
        </h1>
        
        <!-- Subtitle with Glassmorphism Effect -->
        <div class="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 mb-12 max-w-3xl mx-auto shadow-2xl">
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed">
            Discover and explore interesting posts from our community. 
            Built with <span class="text-emerald-400 font-semibold">Nuxt.js</span>, 
            <span class="text-purple-400 font-semibold">Pinia</span>, and 
            <span class="text-cyan-400 font-semibold">Tailwind CSS</span>.
          </p>
        </div>

        <!-- CTA Button with Hover Animation -->
        <NuxtLink 
          to="/posts"
          class="group relative inline-block"
        >
          <div class="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div class="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-12 rounded-xl text-xl transform transition-all duration-200 group-hover:scale-105 group-hover:shadow-2xl">
            <span class="flex items-center">
              View Posts
              <svg class="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </div>
        </NuxtLink>
      </div>
      
      <!-- Feature Cards with 3D Effect -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="group perspective-1000">
          <div class="relative preserve-3d group-hover:rotate-y-6 transition-all duration-500 backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
            <div class="relative z-10 text-center">
              <div class="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Rich Content</h3>
              <p class="text-white/80 text-lg">Explore diverse posts with tags and reactions</p>
            </div>
          </div>
        </div>
        
        <div class="group perspective-1000">
          <div class="relative preserve-3d group-hover:rotate-y-6 transition-all duration-500 backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/25">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
            <div class="relative z-10 text-center">
              <div class="bg-gradient-to-br from-emerald-400 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Fast Loading</h3>
              <p class="text-white/80 text-lg">Optimized with caching and state management</p>
            </div>
          </div>
        </div>
        
        <div class="group perspective-1000">
          <div class="relative preserve-3d group-hover:rotate-y-6 transition-all duration-500 backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-pink-500/25">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
            <div class="relative z-10 text-center">
              <div class="bg-gradient-to-br from-pink-400 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">Responsive Design</h3>
              <p class="text-white/80 text-lg">Perfect experience on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes tilt {
  0%, 50%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(0.5deg);
  }
  75% {
    transform: rotate(-0.5deg);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-tilt {
  animation: tilt 10s infinite linear;
}

.perspective-1000 {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.rotate-y-6 {
  transform: rotateY(6deg);
}
</style>