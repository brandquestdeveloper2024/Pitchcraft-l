/**
 * Cloudflare Worker for PitchCraft Demo
 * Serves static files from GitHub with caching
 */

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Map root to index.html
    if (url.pathname === '/') {
      url.pathname = '/index.html';
    }
    
    // Construct GitHub raw content URL
    const githubUrl = new URL(
      `https://raw.githubusercontent.com/brandquestdeveloper2024/Pitchcraft-l/main${url.pathname}`
    );
    
    try {
      // Fetch from GitHub
      const response = await fetch(githubUrl, {
        cf: {
          cacheTtl: 86400, // Cache for 24 hours
          cacheEverything: true,
          minify: {
            javascript: true,
            css: true,
            html: true,
          },
        },
      });
      
      // Handle 404s
      if (response.status === 404) {
        // Try index.html for SPA routing
        const indexUrl = new URL(
          'https://raw.githubusercontent.com/brandquestdeveloper2024/Pitchcraft-l/main/index.html'
        );
        const indexResponse = await fetch(indexUrl, {
          cf: {
            cacheTtl: 3600,
            cacheEverything: true,
          },
        });
        
        return new Response(indexResponse.body, {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
      
      // Add caching headers
      const headers = new Headers(response.headers);
      headers.set('Cache-Control', 'public, max-age=86400');
      headers.set('Access-Control-Allow-Origin', '*');
      
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    } catch (error) {
      return new Response('Error fetching resource: ' + error.message, {
        status: 500,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  },

  // Scheduled handler (optional - for periodic cache refresh)
  async scheduled(event) {
    console.log('Scheduled event triggered');
    // Could be used for cache invalidation if needed
  },
};
