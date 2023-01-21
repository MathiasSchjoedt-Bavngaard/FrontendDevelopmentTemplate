const config = {
    reporters: ['default', 
    'github-actions',
    [
        'jest-junit',
        {outputDirectory: 'reports/junit', outputName: 'js-test-results.xml'},
      ]
    ],
  };
  
  export default config;