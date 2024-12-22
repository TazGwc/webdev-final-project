const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

// OpenWeatherMap API key
const apiKey = '9a31722555823f1593251c4e60e47b5f';

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve the static files to the public directory
app.use(express.static(path.join(__dirname, 'public')));

// The main route to render the weather data
app.get('/', (req, res) => {
  res.render('index', {
    city: undefined,
    temperature: undefined,
    weatherDescription: undefined,
    weatherIcon: undefined,
    dressingSuggestion: undefined,
  });
});

app.get('/weather', async (req, res) => {
  const city = req.query.city || 'London';
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = response.data;

    const temperature = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;
    const weatherIcon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

    let dressingSuggestion;
    // Very cold weather
    if (temperature <= 10) {
      dressingSuggestion = 'Wear a heavy winter coat, scarf, and gloves.';
    // Mild cold weather
    } else if (temperature <= 20) {
      dressingSuggestion = 'Wear a jacket or sweater and long pants.';
    // Spring like weather
    } else if (temperature <= 30) {
      dressingSuggestion = 'A light jacket or t-shirt would be perfect!';
    // Summer like weather
    } else {
      dressingSuggestion = 'Wear light clothing like shorts or a sundress.';
    }

    res.render('index', {
      city,
      temperature,
      weatherDescription,
      weatherIcon,
      dressingSuggestion,
    });
  } catch (error) {
    res.render('index', {
      city,
      temperature: 'Error fetching data',
      weatherDescription: undefined,
      weatherIcon: undefined,
      dressingSuggestion: undefined,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

