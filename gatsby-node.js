const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  });
};

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  // see: https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect, createPage } = actions;

  // SSL string validation
  require('./secrets');
  createPage({
    path:
      '.well-known/acme-challenge/TpdiixwUCObIavOqpwYJJH4NSzMZWEn9ZYXfNSKQdVw',
    component: path.resolve('./src/pages/ssl.js'),
    context: {
      content: process.env.SSL,
    },
  });

  // One-off redirect, note trailing slash missing on fromPath and
  // toPath here.
  // createRedirect({
  //   fromPath: '/software',
  //   isPermanent: true,
  //   redirectInBrowser: true,
  //   toPath: '/projects',
  // });

  let redirectBatch = [
    { fromPath: '/software', toPath: '/projects', isPermanent: true },
    // Docs > Creating and modifying pages > Removing trailing slashes
    // https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#removing-trailing-slashes
    { fromPath: '/software/', toPath: '/projects', isPermanent: true },
    { fromPath: '/photography', toPath: '/' }, // Redirect home until this section is launched. Take out for dev!
    { fromPath: '/photography/', toPath: '/' },
  ];

  redirectBatch.forEach(
    ({ fromPath, toPath, redirectInBrowser = true, isPermanent = false }) => {
      createRedirect({
        fromPath,
        toPath,
        redirectInBrowser,
        isPermanent,
      });
    }
  );
};
