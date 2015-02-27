Package.describe({
  name:    'awelles:hook-test',
  summary: 'Tries to capture `rendered`, `created`, `destroyed` hooks on Template.body to see what it breaks.',
  version: '0.0.1',
  // git:     'https://github.com/msavin/Mongol.git',
  documentation: 'README.md',
  // debugOnly: true
});

Package.onUse(function(api) {

  var clientFiles = [
      "hook-test.html",
      "hook-test.js",      
      "hook-test.css"
  ];

  var serverFiles = [    
  ];
  
  var commonFiles = [    
  ];

  
  api.use(['templating','tracker','mongo'], 'client');
  
  api.add_files(commonFiles);
  api.add_files(clientFiles, "client");
  api.add_files(serverFiles, "server");
  
});