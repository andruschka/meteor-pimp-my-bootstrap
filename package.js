Package.describe({
  name: 'andruschka:pimp-my-bootstrap',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Some cool buttons and tweaks for Bootstrap 3',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('pimp-my-bootstrap.css', 'client');
});
