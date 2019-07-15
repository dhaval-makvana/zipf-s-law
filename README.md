This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Getting Started: Installing on your own machine`

1> Clone the git repository
2> npm install - all the required packages/dependencies
3> npm start - to run a local server
4> You can see the Zipf's law visualization for an internal dataset on http://localhost:3000
5> To see the visualization for another dataset, import that dataset on App.js and store in the variable named `data`

### `Solution Approach`

1> Algorithm to store the count of each word in a text (Not optimized or totally correct)
2> Basic UI setup for the visualization
3> Setting up d3 axes using dummy data
4> Setting up scatter plot points using dummy data
5> Writing a util function to convert the count object in d3-format data (nothing but how the scatter plot will take data as it's input).
6> Tried making it responsive (somewhat successful)
7> Tried showing tooltip on hovering a circle to give a better UX (didn't succeed)
