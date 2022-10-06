// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log("IT LOADED!!");
//     const data = JSON.parse(this.responseText);
//     console.log(data.name, data.height);
// };

// req.onerror = function(){
//     console.log("ERROR!!!");
//     console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();



//// FETCH API ////


// fetch("https://swapi.dev/api/people/1/")
// .then( res => {
//     console.log("RESOLVED!!", res);
//     return res.json(); 
// })
// .then( data => {
//     console.log("JSON DONE!!", data);
//     return fetch("https://swapi.dev/api/people/2/");
// })
// .then(res => {
//     console.log("RESOLVED (2)", res);
//     return res.json();
// })
// .then( data => console.log("JSON DONE!!", data))
// .catch( e => {
//     console.log("ERROR!!", e);
// });



///// ASYNC FUNCTION ////

const starWarPeople = async () => {
    try{
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
    
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    }catch(e) {
        console.log("ERRROR!!", e);
    }

};

starWarPeople();