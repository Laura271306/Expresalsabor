import { defineConfig } from "vite";
import { componentTagger } from "lovable-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2018',
    cssTarget: 'chrome80',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libs - highest priority
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-core';
          }
          // Router - load on demand
          if (id.includes('react-router-dom')) {
            return 'router';
          }
          // UI components - split by usage
          if (id.includes('@radix-ui')) {
            if (id.includes('accordion') || id.includes('collapsible')) {
              return 'ui-accordion';
            }
            if (id.includes('dialog') || id.includes('toast')) {
              return 'ui-overlay';
            }
            return 'ui-base';
          }
          // Carousel - separate chunk
          if (id.includes('embla-carousel')) {
            return 'carousel';
          }
          // Icons - separate chunk
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          // Other vendors
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize chunk names for caching
        chunkFileNames: 'assets/[name]-[hash:8].js',
        entryFileNames: 'assets/[name]-[hash:8].js',
        assetFileNames: 'assets/[name]-[hash:8].[ext]',
      },
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log', 'console.info', 'console.debug'] : [],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
        reduce_vars: true,
        reduce_funcs: true,
        collapse_vars: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        dead_code: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
      },
      format: {
        comments: false,
        ecma: 2018,
      },
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
  },
}));
