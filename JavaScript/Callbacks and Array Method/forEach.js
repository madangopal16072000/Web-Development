// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function print(el)
// {
//     console.log(el);
// }

// arr.forEach(print);
// // another way

// arr.forEach(function(el){
//     console.log(el);
// })


let movie = [
    {
        title : "MI-6",
        score : 95
    },
    {
        title : "Harry Potter",
        score : 90
    },
    {
        title : "Doctor Strange",
        score : 85
    },
    {
        title : "Alien",
        score : 80
    }
];


movie.forEach(function(movie)
{
    console.log(`${movie.title} : ${movie.score}/100`);
})