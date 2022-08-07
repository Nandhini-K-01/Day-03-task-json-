//For the given JSON iterate over all for loops 
var movies = [
{
        "title": "The Godfather",
        "year": "1972",
        "genre": "Drama"
},
    {
        "title": "Superbad",
        "year": "2007",
        "genre": "comedy"
},
    {
        "title": "The Departed",
        "year": "2006",
        "genre": "Drama",
    
}
];
//for loop
for (var i=0; i<movies.length; i++){
    console.log(movies[i])
    //to get title name alone
    console.log(movies[i].title)
}

//for in loop
for (var i in movies){
    console.log(movies[i])
    //to get title name alone
    console.log(movies[i].title)
}

//forEach loop
movies.forEach((ele)=>{
    console.log(ele);
  //to get title name alone
console.log(ele.title)
})

//for of loop
for (var ele of movies) {
    console.log(ele);
    // to get title name alone
    console.log(ele.title)
 }