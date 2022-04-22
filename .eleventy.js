const path = require("path");
const prettier = require("prettier");
const sass = require("sass");

// 💡 Edit this config as you need!
const config = {
  dir: {
    input: "src", // Source files directory
    output: "public", // Production files directory
    // includes: "_includes", // Layouts, partials, macros, extends directory
    // data: "_data", // Content directory
  },
};

module.exports = function (eleventyConfig) {
  /**
   * Browsersync configuration
   *
   * 11ty docs: https://www.11ty.dev/docs/watch-serve/#browsersync
   * Browsersync docs: https://browsersync.io/docs/options
   */
  eleventyConfig.setBrowserSyncConfig({
    open: true,
  });

  /**
   * Nunjucks environment config
   *
   * 11ty docs: https://www.11ty.dev/docs/languages/nunjucks/
   * Nunjucks docs: https://mozilla.github.io/nunjucks/api.html#configure
   */
  eleventyConfig.setNunjucksEnvironmentOptions({
    trimBlocks: true,
  });

  /**
   * Better looking HTML output
   *
   * Prettier docs: https://prettier.io/docs/en/api.html
   * Transforms docs: https://www.11ty.dev/docs/config/#transforms
   */
  eleventyConfig.addTransform("prettier", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const minified = prettier.format(content, { parser: "html" });
      return minified;
    }
  });

  /**
   * Watch Sass and JavaScript files
   *
   * Inspired by (sass): https://github.com/5t3ph/11ty-sass-skeleton
   * Inspired by (js): https://github.com/chrissy-dev/eleventy-web-starter
   */
  eleventyConfig.addWatchTarget("./src/sass");
  eleventyConfig.addWatchTarget("./src/js");

  return config;
};
