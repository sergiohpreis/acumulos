import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Acúmulos",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "pt-BR",
    baseUrl: "acumulos.sergiohpreis.com",
    ignorePatterns: ["**/_template.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "Newsreader",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f2ede3",
          lightgray: "#ddd4c2",
          gray: "#a89f8c",
          darkgray: "#4a4238",
          dark: "#221f1a",
          secondary: "#8c2f1b",
          tertiary: "#5f6b4f",
          highlight: "rgba(140, 47, 27, 0.08)",
          textHighlight: "#e8c76688",
        },
        darkMode: {
          light: "#1b1815",
          lightgray: "#332e28",
          gray: "#6b6459",
          darkgray: "#c9c0b0",
          dark: "#efe9dd",
          secondary: "#c4573a",
          tertiary: "#8a9b73",
          highlight: "rgba(196, 87, 58, 0.12)",
          textHighlight: "#8a731f88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(
        {
          maxDepth: 6,
        }
      ),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
