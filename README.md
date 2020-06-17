# Mars Weather App

This application displays information about the weather over the last few Mars days (sols). 
Nasa provide several API's and it is the NASA InSight: Mars Weather Service API (https://api.nasa.gov/assets/insight/InSight%20Weather%20API%20Documentation.pdf) which I am using to get the data. 


## Client Side

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Packages 
I have used several 3rd party packages in the code. I always make sure that they are well known and check for vulnerabilities. I use https://libraries.io to make sure they have a decent score (at least 20). 

### Testing 
I have written unit tests for my atoms and the Temperature component. In reality I would of course have added tests to all components, pages and services. 

### Improvements 
 - I don't particular like the wind direction graph, it doesn't explain to the user what it is. 
 - The url to AWS API Gateway is hardcoded into the WeatherService.ts. It needs to be in a configuration file. 


## Serverless function 

I have created an AWS Lambda serverless function, written in Node.js. This calls the NASA api, maps the data into a format that is required for the client side application, and then returns it.  

There is an API gateway set up to enable the client application to trigger the lambda. 

I have included the code in the ServerSide folder of this Git repository. I had almost no experience of writing node.js and had never used or created a serverless function before. 


### Improvements 
- I know that there is a way of creating configuration files for the setting up of the lambda and api gateway but I did not get round to  figuring out how to do it. 
- The NASA endpoint is hardcoded including the apikey. In reality I would have set up an environment variable and perhaps a secret as well
- There are no tests for the Lambda.


## Running the application
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


