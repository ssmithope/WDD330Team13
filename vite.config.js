import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/", // Root directory for the project

  server: {
    open: true, // Automatically opens the browser on server start
    host: true, // Exposes the server to the network
  },

  build: {
    outDir: "../dist", // Output directory for the build
    emptyOutDir: true, // Clears the output directory before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),       // Entry point for main page
        cart: resolve(__dirname, "src/cart/index.html"),  // Entry point for cart page
        checkout: resolve(__dirname, "src/checkout/index.html"), // Checkout page
        checkedout: resolve(__dirname, "src/checkout/success.html"), // Success page
        product: resolve(__dirname, "src/product_pages/index.html"), // Product pages
        listing: resolve(__dirname, "src/product-listing/index.html"), // Product listing page
      },
    },
  },
});
