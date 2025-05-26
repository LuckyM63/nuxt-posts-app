# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:# 📝 Nuxt Posts App

A modern, responsive web application built with Nuxt.js 3 for browsing and viewing posts. Features intelligent caching, state management with Pinia, and beautiful UI with Tailwind CSS.

[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.x-00DC82?style=flat&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Pinia](https://img.shields.io/badge/Pinia-2.x-FFD859?style=flat&logo=pinia&logoColor=black)](https://pinia.vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 🚀 Live Demo

[API Documentation](https://dummyjson.com/docs/posts)

## ✨ Features

### 🎯 Core Features
- **📱 Responsive Design** - Perfect experience on all devices
- **⚡ Fast Loading** - Optimized performance with intelligent caching
- **🔄 Smart Caching** - 15-minute cache system to reduce API calls
- **🎨 Modern UI** - Beautiful interface with Tailwind CSS

### 🛠️ Technical Features
- **🏪 State Management** - Centralized state with Pinia
- **📊 Real-time Data** - Fetches from DummyJSON API
- **🔍 Error Handling** - Comprehensive error states and loading indicators
- **♿ Accessibility** - WCAG compliant with proper semantic markup
- **📦 Component Architecture** - Reusable and maintainable components

### 🎪 User Experience
- **🖱️ Clickable Posts** - Navigate seamlessly between list and detail views
- **🏷️ Tag System** - Visual categorization with colored tags
- **❤️ Reactions** - Display post engagement metrics
- **🔄 Navigation** - Previous/Next post navigation
- **🔙 Breadcrumbs** - Easy navigation back to posts list

## 🖼️ Screenshots

### Home Page View

![Uploading Screenshot 2025-05-26 at 8.38.15 PM.png…]()


### Posts List View
<img width="1376" alt="Screenshot 2025-05-26 at 8 37 05 PM" src="https://github.com/user-attachments/assets/77b26217-b661-447e-bbb8-248c73b4eaa5" />


### Post Detail View
<img width="1228" alt="Screenshot 2025-05-26 at 8 37 30 PM" src="https://github.com/user-attachments/assets/2d627631-c5e5-4d17-a530-6f6c6be133dc" />


## 🏃‍♂️ Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nuxt-posts-app.git

# Navigate to project directory
cd nuxt-posts-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000)

## 📚 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate

# Lint code
npm run lint

# Type check
npm run type-check
```

### Project Structure

```
nuxt-posts-app/
├── 📁 assets/
│   └── css/
│       └── main.css              # Global styles
├── 📁 components/
│   └── PostCard.vue              # Reusable post card component
├── 📁 pages/
│   ├── index.vue                 # Home page
│   └── posts/
│       ├── index.vue             # Posts list page
│       └── [id].vue              # Dynamic post detail page
├── 📁 stores/
│   └── posts.ts                  # Pinia store for posts
├── 📁 types/
│   └── index.ts                  # TypeScript type definitions
├── app.vue                       # Main app component
├── error.vue                     # Error page
├── nuxt.config.ts               # Nuxt configuration
└── package.json                 # Project dependencies
```

## 🛠️ Tech Stack

### Frontend Framework
- **[Nuxt.js 3](https://nuxt.com/)** - Vue.js meta-framework
- **[Vue.js 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### State Management
- **[Pinia](https://pinia.vuejs.org/)** - Vue.js store library

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)** - Beautiful typographic defaults

### API & Data
- **[DummyJSON](https://dummyjson.com/)** - Fake REST API for testing
- **[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)** - Native HTTP client

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vite](https://vitejs.dev/)** - Fast build tool

## 🏗️ Architecture

### State Management Flow
```mermaid
graph TD
    A[Component] --> B[Pinia Store]
    B --> C[API Call]
    C --> D[Cache Check]
    D -->|Fresh| E[Return Cached Data]
    D -->|Stale| F[Fetch New Data]
    F --> G[Update Cache]
    G --> H[Return Data]
    E --> A
    H --> A
```

### Caching Strategy
- **Cache Duration**: 15 minutes
- **Cache Key**: Based on endpoint and timestamp
- **Cache Invalidation**: Manual refresh or timeout
- **Storage**: In-memory (Pinia state)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
NUXT_PUBLIC_API_BASE_URL=https://dummyjson.com
NUXT_PUBLIC_CACHE_DURATION=900000  # 15 minutes in milliseconds

# App Configuration
NUXT_PUBLIC_APP_NAME=Nuxt Posts App
NUXT_PUBLIC_APP_DESCRIPTION=A modern posts application
```

### Nuxt Configuration

Key configurations in `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  }
})
```

## 📱 API Reference

### Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Fetch all posts |
| GET | `/posts/{id}` | Fetch single post |

### Response Format

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Post Title",
      "body": "Post content...",
      "userId": 1,
      "tags": ["tag1", "tag2"],
      "reactions": 5
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 30
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: https://github.com/LuckyM63
- LinkedIn: https://www.linkedin.com/in/lucky-mishra-june2000/
- Email: mishra2000lucky@gmail.com


