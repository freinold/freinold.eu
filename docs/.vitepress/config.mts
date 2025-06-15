import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "freinold.eu",
  description: "Fabian Reinold's personal info (+ potentially blog)",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Skills",
        link: "/skills/",
      },
    ],
    sidebar: [],
    socialLinks: [
      { icon: "github", link: "https://github.com/freinold" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/fabian-reinold" },
    ],
  },
});
