import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    lastFetched: null
  }),

  getters: {
    isDataFresh: (state) => {
      if (!state.lastFetched) return false
      const CACHE_DURATION = 15 * 60 * 1000 // 15 minutes in milliseconds
      return Date.now() - state.lastFetched < CACHE_DURATION
    }
  },

  actions: {
    async fetchPosts() {
      // Check if data is still fresh
      if (this.isDataFresh && this.posts.length > 0) {
        return this.posts
      }

      this.loading = true
      this.error = null

      try {
        const data = await $fetch('https://dummyjson.com/posts')
        this.posts = data.posts
        this.lastFetched = Date.now()
        return this.posts
      } catch (error) {
        this.error = 'Failed to fetch posts'
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchPostById(id) {
      // Check if post exists in current posts
      const existingPost = this.posts.find(post => post.id === parseInt(id))
      if (existingPost && this.isDataFresh) {
        this.currentPost = existingPost
        return existingPost
      }

      this.loading = true
      this.error = null

      try {
        const post = await $fetch(`https://dummyjson.com/posts/${id}`)
        this.currentPost = post
        
        // Update the post in the posts array if it exists
        const index = this.posts.findIndex(p => p.id === parseInt(id))
        if (index !== -1) {
          this.posts[index] = post
        }
        
        return post
      } catch (error) {
        this.error = 'Failed to fetch post'
        throw error
      } finally {
        this.loading = false
      }
    },

    clearCurrentPost() {
      this.currentPost = null
    }
  }
})