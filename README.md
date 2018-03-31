# Movie list

### Todos

* First page
* Add category function
* themoviedb integration
* Search for movie
* Add movie to category
* Export list as external page


### API

* http://files.tmdb.org/p/exports/movie_ids_03_30_2018.json.gz
 - List of all IDs until this date
* https://api.themoviedb.org/3/movie/550?api_key=<apikey>
 - Details of movie with ID
* https://api.themoviedb.org/3/search/movie?api_key=<apikey>&language=en-US&query=fight%20club&page=1&include_adult=false
 - Search for movie name


### Commands
```bash
npm install

npm start

npm run build && yarn global add serve && serve -s build
```