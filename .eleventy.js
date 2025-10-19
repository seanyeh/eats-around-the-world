import * as sass from "sass";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent, inputPath) {
      let result = sass.compileString(inputContent, {
        loadPaths: [
          this.config.dir.input + "/_includes",
          this.config.dir.input
        ]
      });
      return async () => {
        return result.css;
      };
    }
  });
  
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
}