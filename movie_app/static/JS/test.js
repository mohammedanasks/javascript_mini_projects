

const api_url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const imagepath="https://image.tmdb.org/t/p/w1280/";

const search_movie = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const serch=document.getElementById('search');

const main=document.querySelector('main');

const form=document.getElementById('form')

const api_data =getmovies(api_url)
const detail_view= api_data;



async function getmovies(url){
  const res= await fetch(url)
  const resdata= await res.json()
  


  show_movies(resdata.results)
  return resdata;

}

function show_movies(movies){
  main.innerHTML='';
  movies.forEach(movie => {
    const {poster_path,title,vote_average,overview}=movie;
    const movieLI=document.createElement('div')
    const movie_details=document.createElement('div')
    movie_details.classList.add("details")
    movieLI.classList.add('movie')
    movieLI.innerHTML=`  
    <img onClick="data()"
      src="${imagepath+poster_path}";
      alt=""
    />
    <div class="movie-info">
        <h6>${title}</h6>
        <span class="${getmovie_rate(vote_average)}">${vote_average}</span>
    </div>`
    
    main.append(movieLI)

   
    
  });

}

function data(){
    console.log("dscfds")
}




 

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const serchitem=serch.value;
  console.log(serchitem.results)
  if(serchitem){
    getmovies(search_movie+serchitem);

    serch.value="";
  }
})

function getmovie_rate(vote){
  if(vote>=8){
    return 'green'
  }else if(vote>=5){
    return 'orange'
  }else{
    return 'red'
  }
}