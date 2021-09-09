'use strict';

const axios = require('axios');
require('dotenv').config();
const MOVIES_API_KEY = process.env.MOVIES_API_KEY;

  const Movie=  async (request, response) => {
    
    const city_name = request.query.query;
  console.log(city_name);
    const movie = "https://api.themoviedb.org/3/search/movie";
    const movieResponse = await axios.get(
      `${movie}?query=${city_name}&api_key=${MOVIES_API_KEY}`
    );
  
    
    if (city_name) {
     
      let arr1 = movieResponse.data.results.map((data1) => {
        return new Movie(
          `Title: ${data1.title}`,
          `Overview: ${data1.overview}`,
          `Average votes: ${data1.vote_average}`,
          ` Total Votes: ${data1.vote_count}`,
          `${data1.poster_path}`,
          `popularity:${data1.popularity}`,
          `release_date:${data1.release_date}`
  
        );
      });
  
      if (arr1.length) {
        response.json(arr1);
      } else {
        response.send("error: Something went wrong.");
      }
    } 
  };
 
 


  

  module.exports = Movie;