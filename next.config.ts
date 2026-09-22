import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  experimental: {
    mdxRs: true
  },

  reactCompiler: false,
};

export default withMDX(nextConfig);