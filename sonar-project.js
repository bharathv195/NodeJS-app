sonarqubeScanner({
  serverUrl: 'http://65.2.151.18:9000/',
       options : {
	    'sonar.projectDescription': 'This application prints HelloWorld using NodeJS',
	    'sonar.projectName': 'hello-world',
	    'sonar.projectKey':'NodeJS',
	    'sonar.login': '',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
