const config = {
    reporters: ['default', 
    'github-actions',
    [
        'jest-junit',
        {outputDirectory: 'reports/junit', outputName: ' jest-junit.xml.'},
      ]
    ],
  };
  
  module.exports = config;