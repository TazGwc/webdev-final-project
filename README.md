# Forecast Fits!
## webdev-final-project
This is a weather outfit suggestion app. Based on the weather of your city, the app will suggest the most appropriate clothing. The web app uses Node.js, Express, EJS (Embedded JavaScript), Bootstrap, and Axios. Due to time contraints and major technical setbacks, I was able to run it only once and see the final product. I am not able to run it anymore. I cannot verify if the webapp will succesfully run on your machine. Instead, I will explain what each file does and what the final product should look like. 

## File Function
- 'index.ejs': This is where the HTML layout for the web application is. It has EJS embedded. It also renders weather-related icons, descriptions, and suggestions dynamically.
- 'app.js': This is where all the magic happens. Here, node.js, express, and axios combine to fetch all the relevant data from the OpenWeather API. It is also where the server starts when launched.
- 'styles.css': This is where all the color schemes, fonts, and designs of the web app are. I tried encorporating a minty green, and pink pastel aesthetic.

## The Web App
Forecast Fits is a web app that caters to the modern user. We understand how prepared one must be before leaving home. So instead of randomly gauging the weather and mistakenly wearing shorts on a frigid day, Forecast Fits has your back! We take the guesswork out of getting ready for your day. We even tell you exactly what to wear. You simply tell us what city you are in and we will give you the current forecast and suggest the most appropriate outfit. I will walk you through how the web app should function:
1. First you should see a webpage with a form prompting you to enter your city. Click Submit after.
2. The next page should show you the: city's temperature, a brief description of the weather, a matching weather icon, an outfit suggestion and another matching icon.
3. If the City is not availble in the API or there is an error, you will recieve the following message: "Could not fetch weather data. Please try again."



