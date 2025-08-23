import './styles/index.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="font-bold text-xl">Portfolio</div>
          <div class="flex space-x-8">
            <a href="#blog" class="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <a href="#projects" class="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#case-studies" class="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a>
            <a href="#concepts" class="text-gray-600 hover:text-gray-900 transition-colors">Concepts</a>
            <a href="#about" class="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="container mx-auto max-w-4xl">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to My Digital Space
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          A collection of thoughts, projects, and explorations in technology, design, and creativity.
        </p>
        <div class="flex gap-4">
          <button class="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            View Projects
          </button>
          <button class="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Read Blog
          </button>
        </div>
      </div>
    </section>

    <!-- Content Sections Preview -->
    <section class="py-16 px-4 bg-white">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold mb-12 text-center">Explore My Work</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Blog Posts -->
          <div class="group cursor-pointer">
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white h-48 flex flex-col justify-between transform group-hover:scale-105 transition-transform">
              <div>
                <h3 class="text-2xl font-bold mb-2">Blog</h3>
                <p class="opacity-90">Articles and thoughts on technology, development, and design</p>
              </div>
              <div class="text-sm opacity-75">12 posts →</div>
            </div>
          </div>

          <!-- Projects -->
          <div class="group cursor-pointer">
            <div class="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white h-48 flex flex-col justify-between transform group-hover:scale-105 transition-transform">
              <div>
                <h3 class="text-2xl font-bold mb-2">Projects</h3>
                <p class="opacity-90">Completed works and ongoing developments</p>
              </div>
              <div class="text-sm opacity-75">8 projects →</div>
            </div>
          </div>

          <!-- Case Studies -->
          <div class="group cursor-pointer">
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white h-48 flex flex-col justify-between transform group-hover:scale-105 transition-transform">
              <div>
                <h3 class="text-2xl font-bold mb-2">Case Studies</h3>
                <p class="opacity-90">Deep dives into problem-solving approaches</p>
              </div>
              <div class="text-sm opacity-75">5 studies →</div>
            </div>
          </div>

          <!-- Concepts -->
          <div class="group cursor-pointer">
            <div class="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white h-48 flex flex-col justify-between transform group-hover:scale-105 transition-transform">
              <div>
                <h3 class="text-2xl font-bold mb-2">Explorations</h3>
                <p class="opacity-90">Experimental concepts and creative ideas</p>
              </div>
              <div class="text-sm opacity-75">15 concepts →</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Posts Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold mb-8">Recent Posts</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
            <div class="text-sm text-gray-500 mb-2">January 15, 2025</div>
            <h3 class="text-xl font-semibold mb-2">Building Scalable Web Applications</h3>
            <p class="text-gray-600 mb-4">Exploring patterns and practices for creating maintainable, scalable web architectures...</p>
            <a href="#" class="text-blue-600 hover:text-blue-700 font-medium">Read more →</a>
          </article>

          <article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
            <div class="text-sm text-gray-500 mb-2">January 10, 2025</div>
            <h3 class="text-xl font-semibold mb-2">The Art of Component Design</h3>
            <p class="text-gray-600 mb-4">Creating reusable, flexible components that stand the test of time...</p>
            <a href="#" class="text-blue-600 hover:text-blue-700 font-medium">Read more →</a>
          </article>

          <article class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
            <div class="text-sm text-gray-500 mb-2">January 5, 2025</div>
            <h3 class="text-xl font-semibold mb-2">Performance Optimization Techniques</h3>
            <p class="text-gray-600 mb-4">Deep dive into modern performance optimization strategies for web applications...</p>
            <a href="#" class="text-blue-600 hover:text-blue-700 font-medium">Read more →</a>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h4 class="font-bold mb-4">Portfolio</h4>
            <p class="text-gray-400">A space for thoughts, projects, and creative explorations.</p>
          </div>
          <div>
            <h4 class="font-bold mb-4">Content</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#blog" class="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#projects" class="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#case-studies" class="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#concepts" class="hover:text-white transition-colors">Concepts</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Connect</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" class="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Newsletter</h4>
            <p class="text-gray-400 mb-4">Subscribe for updates on new posts and projects.</p>
            <div class="flex">
              <input type="email" placeholder="Enter email" class="bg-gray-800 px-4 py-2 rounded-l flex-1 text-white">
              <button class="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
`