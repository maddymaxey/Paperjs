Package.describe({  
  name: 'maddymaxey:paperjs',
  summary: 'Wraps the Paper.js javascript library for use with Meteor',
  version: '0.9.23',
  git: 'https://github.com/maddymaxey/paperjs.git'
});

Package.onUse(function(api) {  
  api.addFiles([
    'Paperjs/paper-full.js',
    ], ['client']);
  });
