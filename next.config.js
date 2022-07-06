/** @type {import('next').NextConfig} */
// const ss = `/gggggggg/`;
const redirectBase = process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : '';
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: "public/images",
      exportFolderPath: "out",
      quality: 75,
    },
  },
  env: {
    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
    distServer: 'https://dist.ballerina.io',
  },
  async rewrites() {
    return [
      {
        source: `/learn/build-a-data-service-in-ballerina`,
        destination: `/learn/get-started/build-a-data-service-in-ballerina`,
      },
      {
        source: `/${redirectBase}learn/deploy-ballerina-on-kubernetes`,
        destination: `/${redirectBase}learn/get-started/deploy-ballerina-on-kubernetes`,
      },
      {
        source: `/${redirectBase}learn/get-started-with-ballerina`,
        destination: `/${redirectBase}learn/get-started/get-started-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/language-basics`,
        destination: `/${redirectBase}learn/get-started/language-basics`,
      },
      {
        source: `/${redirectBase}learn/work-with-data-in-ballerina`,
        destination: `/${redirectBase}learn/get-started/work-with-data-in-ballerina`,
      },
      {
        source: `/${redirectBase}learn/write-a-graphql-api-with-ballerina`,
        destination: `/${redirectBase}learn/get-started/write-a-graphql-api-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/write-a-grpc-service-with-ballerina`,
        destination: `/${redirectBase}learn/get-started/write-a-grpc-service-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/write-a-restful-api-with-ballerina`,
        destination: `/${redirectBase}learn/get-started/write-a-restful-api-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/install-ballerina/:slug`,
        destination: `/${redirectBase}learn/get-started/install-ballerina/:slug`,
      },
      {
        source: '/learn',
        destination: '/learn/get-started/install-ballerina/set-up-ballerina',
      },



      {
        source: `/${redirectBase}learn/ballerina-openapi-support`,
        destination: `/${redirectBase}learn/guides/ballerina-openapi-support`,
      },
      {
        source: `/${redirectBase}learn/ballerina-shell`,
        destination: `/${redirectBase}learn/guides/ballerina-shell`,
      },
      {
        source: `/${redirectBase}learn/call-java-code-from-ballerina`,
        destination: `/${redirectBase}learn/guides/call-java-code-from-ballerina`,
      },
      {
        source: `/${redirectBase}learn/debug-ballerina-programs`,
        destination: `/${redirectBase}learn/guides/debug-ballerina-programs`,
      },
      {
        source: `/${redirectBase}learn/generate-code-documentation`,
        destination: `/${redirectBase}learn/guides/generate-code-documentation`,
      },
      {
        source: `/${redirectBase}learn/manage-dependencies`,
        destination: `/${redirectBase}learn/guides/manage-dependencies`,
      },
      {
        source: `/${redirectBase}learn/observe-ballerina-programs`,
        destination: `/${redirectBase}learn/guides/observe-ballerina-programs`,
      },
      {
        source: `/${redirectBase}learn/organize-ballerina-code`,
        destination: `/${redirectBase}learn/guides/organize-ballerina-code`,
      },
      {
        source: `/${redirectBase}learn/publish-packages-to-ballerina-central`,
        destination: `/${redirectBase}learn/guides/publish-packages-to-ballerina-central`,
      },
      {
        source: `/${redirectBase}learn/configure-ballerina-programs/:slug`,
        destination: `/${redirectBase}learn/guides/configure-ballerina-programs/:slug`,
      },
      {
        source: `/${redirectBase}learn/distinctive-language-features/:slug`,
        destination: `/${redirectBase}learn/guides/distinctive-language-features/:slug`,
      },
      {
        source: `/${redirectBase}learn/run-ballerina-programs-in-the-cloud/:slug`,
        destination: `/${redirectBase}learn/guides/run-ballerina-programs-in-the-cloud/:slug`,
      },
      {
        source: `/${redirectBase}learn/test-ballerina-code/:slug`,
        destination: `/${redirectBase}learn/guides/test-ballerina-code/:slug`,
      },


      {
        source: `/${redirectBase}learn/package-references`,
        destination: `/${redirectBase}learn/references/package-references`,
      },
      {
        source: `/${redirectBase}learn/cli-documentation/:slug`,
        destination: `/${redirectBase}learn/references/cli-documentation/:slug`,
      },
      {
        source: `/${redirectBase}learn/java-interoperability/:slug`,
        destination: `/${redirectBase}learn/references/java-interoperability/:slug`,
      },
      {
        source: `/${redirectBase}learn/style-guide/coding-conventions`,
        destination: `/${redirectBase}learn/references/style-guide/coding-conventions`,
      },
      {
        source: `/${redirectBase}learn/style-guide/coding-conventions/:slug`,
        destination: `/${redirectBase}learn/references/style-guide/coding-conventions/:slug`,
      },

      {
        source: `/${redirectBase}downloads/swan-lake-release-notes`,
        destination: `/${redirectBase}downloads/swan-lake-release-notes/2201.0.2`,
      }
    ]
  },
  
  resolve: [{"path":false,"fs": false}],


}

module.exports = nextConfig
