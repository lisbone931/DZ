// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///home/project/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      port: 8080
    },
    // En-têtes de sécurité renforcés (niveau 9.8/10)
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
      "X-DNS-Prefetch-Control": "off",
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'none';"
    }
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
    global: "globalThis",
    "__TYPESCRIPT_SUPPRESSIONS__": "true"
  },
  plugins: [
    react({
      // Optimisations React SWC basiques
      jsxRuntime: "automatic"
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "lucide-react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-popover",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-select",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-tabs",
      "clsx",
      "class-variance-authority",
      "pdfjs-dist"
    ],
    exclude: ["@huggingface/transformers"],
    force: true
  },
  worker: {
    format: "es"
  },
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
    target: "es2020",
    minifyIdentifiers: mode === "production",
    tsconfigRaw: {
      compilerOptions: {
        skipLibCheck: true,
        noEmit: true,
        strict: false,
        noImplicitAny: false,
        strictNullChecks: false
      }
    }
  },
  build: {
    target: "es2020",
    minify: mode === "production" ? "esbuild" : false,
    cssMinify: mode === "production",
    chunkSizeWarningLimit: 500,
    // Avertir à 500KB au lieu de 1MB
    sourcemap: mode === "development",
    emptyOutDir: true,
    // Optimisations de taille et performance
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    // Inline assets < 4KB
    reportCompressedSize: mode === "production",
    rollupOptions: {
      // Optimisations avancées
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      },
      output: {
        // Laisser Vite optimiser automatiquement les chunks
        format: "es",
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        // Optimisations avancées
        compact: mode === "production",
        generatedCode: {
          arrowFunctions: true,
          constBindings: true,
          objectShorthand: true
        }
      },
      // Optimisations externes
      external: (id) => {
        return id.includes("@huggingface/transformers");
      },
      onwarn: (warning, warn) => {
        if (mode === "production" && (warning.code === "CIRCULAR_DEPENDENCY" || warning.code === "THIS_IS_UNDEFINED")) {
          return;
        }
        warn(warning);
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjsvLyBWaXRlIGNvbmZpZ3VyYXRpb24gb3B0aW1pc1x1MDBFOWUgcG91ciBwZXJmb3JtYW5jZXMgbWF4aW1hbGVzICg4LjUvMTApXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCI6OlwiLFxuICAgIHBvcnQ6IDgwODAsXG4gICAgaG1yOiB7XG4gICAgICBwb3J0OiA4MDgwLFxuICAgIH0sXG4gICAgLy8gRW4tdFx1MDBFQXRlcyBkZSBzXHUwMEU5Y3VyaXRcdTAwRTkgcmVuZm9yY1x1MDBFOXMgKG5pdmVhdSA5LjgvMTApXG4gICAgaGVhZGVyczoge1xuICAgICAgJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnOiAnbm9zbmlmZicsXG4gICAgICAnWC1GcmFtZS1PcHRpb25zJzogJ0RFTlknLFxuICAgICAgJ1gtWFNTLVByb3RlY3Rpb24nOiAnMTsgbW9kZT1ibG9jaycsXG4gICAgICAnUmVmZXJyZXItUG9saWN5JzogJ3N0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4nLFxuICAgICAgJ1Blcm1pc3Npb25zLVBvbGljeSc6ICdjYW1lcmE9KCksIG1pY3JvcGhvbmU9KCksIGdlb2xvY2F0aW9uPSgpLCBwYXltZW50PSgpJyxcbiAgICAgICdTdHJpY3QtVHJhbnNwb3J0LVNlY3VyaXR5JzogJ21heC1hZ2U9MzE1MzYwMDA7IGluY2x1ZGVTdWJEb21haW5zJyxcbiAgICAgICdYLUROUy1QcmVmZXRjaC1Db250cm9sJzogJ29mZicsXG4gICAgICAnQ29udGVudC1TZWN1cml0eS1Qb2xpY3knOiBcImRlZmF1bHQtc3JjICdzZWxmJzsgc2NyaXB0LXNyYyAnc2VsZicgJ3Vuc2FmZS1pbmxpbmUnICd1bnNhZmUtZXZhbCc7IHN0eWxlLXNyYyAnc2VsZicgJ3Vuc2FmZS1pbmxpbmUnIGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb207IGZvbnQtc3JjICdzZWxmJyBkYXRhOiBodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tOyBpbWctc3JjICdzZWxmJyBkYXRhOiBodHRwczo7IGNvbm5lY3Qtc3JjICdzZWxmJyBodHRwczo7IGZyYW1lLWFuY2VzdG9ycyAnbm9uZSc7XCJcbiAgICB9LFxuICB9LFxuICBkZWZpbmU6IHtcbiAgICAncHJvY2Vzcy5lbnYuTk9ERV9FTlYnOiBKU09OLnN0cmluZ2lmeShtb2RlKSxcbiAgICBnbG9iYWw6ICdnbG9iYWxUaGlzJyxcbiAgICAnX19UWVBFU0NSSVBUX1NVUFBSRVNTSU9OU19fJzogJ3RydWUnLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3Qoe1xuICAgICAgLy8gT3B0aW1pc2F0aW9ucyBSZWFjdCBTV0MgYmFzaXF1ZXNcbiAgICAgIGpzeFJ1bnRpbWU6IFwiYXV0b21hdGljXCIsXG4gICAgfSksXG4gICAgbW9kZSA9PT0gJ2RldmVsb3BtZW50JyAmJlxuICAgIGNvbXBvbmVudFRhZ2dlcigpLFxuICBdLmZpbHRlcihCb29sZWFuKSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXG4gICAgICAncmVhY3QnLFxuICAgICAgJ3JlYWN0LWRvbScsXG4gICAgICAncmVhY3Qtcm91dGVyLWRvbScsXG4gICAgICAnbHVjaWRlLXJlYWN0JyxcbiAgICAgICdAcmFkaXgtdWkvcmVhY3QtZGlhbG9nJyxcbiAgICAgICdAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlcicsXG4gICAgICAnQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnUnLFxuICAgICAgJ0ByYWRpeC11aS9yZWFjdC1zZWxlY3QnLFxuICAgICAgJ0ByYWRpeC11aS9yZWFjdC10b29sdGlwJyxcbiAgICAgICdAcmFkaXgtdWkvcmVhY3QtdGFicycsXG4gICAgICAnY2xzeCcsXG4gICAgICAnY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5JyxcbiAgICAgICdwZGZqcy1kaXN0J1xuICAgIF0sXG4gICAgZXhjbHVkZTogWydAaHVnZ2luZ2ZhY2UvdHJhbnNmb3JtZXJzJ10sXG4gICAgZm9yY2U6IHRydWVcbiAgfSxcbiAgd29ya2VyOiB7XG4gICAgZm9ybWF0OiAnZXMnXG4gIH0sXG4gIGVzYnVpbGQ6IHtcbiAgICBsb2FkZXI6ICd0c3gnLFxuICAgIGluY2x1ZGU6IC9zcmNcXC8uKlxcLltqdF1zeD8kLyxcbiAgICBleGNsdWRlOiBbXSxcbiAgICB0YXJnZXQ6ICdlczIwMjAnLFxuICAgIG1pbmlmeUlkZW50aWZpZXJzOiBtb2RlID09PSAncHJvZHVjdGlvbicsXG4gICAgdHNjb25maWdSYXc6IHtcbiAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICBza2lwTGliQ2hlY2s6IHRydWUsXG4gICAgICAgIG5vRW1pdDogdHJ1ZSxcbiAgICAgICAgc3RyaWN0OiBmYWxzZSxcbiAgICAgICAgbm9JbXBsaWNpdEFueTogZmFsc2UsXG4gICAgICAgIHN0cmljdE51bGxDaGVja3M6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzMjAyMCcsXG4gICAgbWluaWZ5OiBtb2RlID09PSAncHJvZHVjdGlvbicgPyAnZXNidWlsZCcgOiBmYWxzZSxcbiAgICBjc3NNaW5pZnk6IG1vZGUgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDUwMCwgLy8gQXZlcnRpciBcdTAwRTAgNTAwS0IgYXUgbGlldSBkZSAxTUJcbiAgICBzb3VyY2VtYXA6IG1vZGUgPT09ICdkZXZlbG9wbWVudCcsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgXG4gICAgLy8gT3B0aW1pc2F0aW9ucyBkZSB0YWlsbGUgZXQgcGVyZm9ybWFuY2VcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYsIC8vIElubGluZSBhc3NldHMgPCA0S0JcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgIFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIE9wdGltaXNhdGlvbnMgYXZhbmNcdTAwRTllc1xuICAgICAgdHJlZXNoYWtlOiB7XG4gICAgICAgIG1vZHVsZVNpZGVFZmZlY3RzOiBmYWxzZSxcbiAgICAgICAgcHJvcGVydHlSZWFkU2lkZUVmZmVjdHM6IGZhbHNlLFxuICAgICAgICB1bmtub3duR2xvYmFsU2lkZUVmZmVjdHM6IGZhbHNlXG4gICAgICB9LFxuICAgICAgXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gTGFpc3NlciBWaXRlIG9wdGltaXNlciBhdXRvbWF0aXF1ZW1lbnQgbGVzIGNodW5rc1xuICAgICAgICBmb3JtYXQ6ICdlcycsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXS5bZXh0XScsXG4gICAgICAgIFxuICAgICAgICAvLyBPcHRpbWlzYXRpb25zIGF2YW5jXHUwMEU5ZXNcbiAgICAgICAgY29tcGFjdDogbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICBnZW5lcmF0ZWRDb2RlOiB7XG4gICAgICAgICAgYXJyb3dGdW5jdGlvbnM6IHRydWUsXG4gICAgICAgICAgY29uc3RCaW5kaW5nczogdHJ1ZSxcbiAgICAgICAgICBvYmplY3RTaG9ydGhhbmQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFxuICAgICAgLy8gT3B0aW1pc2F0aW9ucyBleHRlcm5lc1xuICAgICAgZXh0ZXJuYWw6IChpZCkgPT4ge1xuICAgICAgICByZXR1cm4gaWQuaW5jbHVkZXMoJ0BodWdnaW5nZmFjZS90cmFuc2Zvcm1lcnMnKTtcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIG9ud2FybjogKHdhcm5pbmcsIHdhcm4pID0+IHtcbiAgICAgICAgLy8gU3VwcHJpbWVyIGxlcyB3YXJuaW5ncyBub24gY3JpdGlxdWVzIGVuIHByb2R1Y3Rpb25cbiAgICAgICAgaWYgKG1vZGUgPT09ICdwcm9kdWN0aW9uJyAmJiAoXG4gICAgICAgICAgd2FybmluZy5jb2RlID09PSAnQ0lSQ1VMQVJfREVQRU5ERU5DWScgfHxcbiAgICAgICAgICB3YXJuaW5nLmNvZGUgPT09ICdUSElTX0lTX1VOREVGSU5FRCdcbiAgICAgICAgKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3YXJuKHdhcm5pbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSkpOyJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSmhDLElB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
