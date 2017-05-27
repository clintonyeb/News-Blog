import axios from 'axios'

function getNewsItems(callback) {

  const url  = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=d0ac5f715baf4c7e87626f39a3a52499'; 
  
  axios.get(url)
  .then(function (response) {
    callback(null, response.data)
  })
  .catch(function (error) {
    callback(error)
  })

}

export {
  getNewsItems
}