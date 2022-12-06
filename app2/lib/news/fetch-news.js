//./todaynews\src\app\lib\news\fetch-news.js

import fetch from "cross-fetch";

export function fetchTopics(topic, country){
  return fetch(`https://gnews.io/api/v3/topics/${topic}?token=0c22f9c1b6762f8775884a1b914945a3&country=${country}`, {method:"GET"})
  .then((response)=>response.json())
}

export function fetchTopNews(country){
  return fetch(`https://gnews.io/api/v3/top-news?token=0c22f9c1b6762f8775884a1b914945a3&country=${country}`, {method:"GET"})
  .then((response)=>response.json())
}

export function fetchSearchNews(query, country){
  return fetch(`https://gnews.io/api/v3/search?q=${query}&token=0c22f9c1b6762f8775884a1b914945a3&country=${country}`, {method:"GET"})
  .then((response)=>response.json())
}