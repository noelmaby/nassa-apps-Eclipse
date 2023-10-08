export default {
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html", // Specify your main entry point (index.html).
        about: "./about.html", // Add other HTML files as separate entry points.
        projects: "./projects.html", // Add more as needed.
        contact: "./contact.html",
      },
    },
  },
  base: "",
};
