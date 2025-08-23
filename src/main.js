import './styles/index.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-6xl font-bold text-white text-center mb-8">
        Vite + Tailwind CSS
      </h1>
      <p class="text-xl text-white text-center mb-12">
        Fast build tool with utility-first CSS framework
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
          <h2 class="text-2xl font-semibold text-gray-800 mb-3">⚡ Lightning Fast</h2>
          <p class="text-gray-600">Instant server start and HMR that stays fast regardless of app size.</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
          <h2 class="text-2xl font-semibold text-gray-800 mb-3">🎨 Utility First</h2>
          <p class="text-gray-600">Build modern designs directly in your markup with Tailwind CSS.</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
          <h2 class="text-2xl font-semibold text-gray-800 mb-3">🚀 Production Ready</h2>
          <p class="text-gray-600">Optimized builds with code splitting and tree-shaking out of the box.</p>
        </div>
      </div>
    </div>
  </div>
`