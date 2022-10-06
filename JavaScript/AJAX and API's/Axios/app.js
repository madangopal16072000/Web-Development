// axios.get("https://swapi.dev/api/people/1/")
// .then( res => {
//     console.log("RESPONSE!!", res);
// })
// .catch(e => {
//     console.log("ERROR", e);
// })

const starWarPeople = async (id) => {
    try
    {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }catch(e) {
        console.log("ERROR!!", e);
    }
}

// working fine /// 



// const list = document.querySelector('ul');
// const button = document.querySelector('button');
// const getDadJoke = async () => {
//     const config = {
//         headers : {
//             Accept : 'application/json'
//         }
//     };
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
    
//     newLi = document.createElement('li');
//     newLi.append(res.data.joke);
//     list.append(newLi);
// }
// button.addEventListener('click', getDadJoke);




const list = document.querySelector('ul');
const button = document.querySelector('button');
const getDadJoke = async () => {
    try
    {
        const config = {
            headers : {
                Accept : 'application/json'
            }
        };
        const res = await axios.get(`https://icanhazdadjoke.com/`, config);
        // console.log(res);
        return (res.data.joke);
    }
    catch(e)
    {
        console.log("ERROR!!!", e);
    }
};
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    list.append(newLi);

}

button.addEventListener('click', addNewJoke)

