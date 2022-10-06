const form = document.querySelector('form');
const div = document.querySelector('div');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("SUBMITTED");
    const show = form.elements[0].value;
    // console.log(show);
    const config = { params : { q : show }};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // console.log(res.data[0].show.image.medium);
    // const img = document.createElement('img');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img);
    makeImages(res.data);
    form.elements[0].value = "";
})

const makeImages = (shows) => {
    const ImgContainer = document.createElement('div');
    ImgContainer.id = "ImgContainer";
    div.append(ImgContainer);
    for(let result of shows)
    {
        if(result.show.image)
        {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            ImgContainer.append(img);
        }

    }
}

const delBtn = document.querySelector('#deleteBtn')
const delImg = () => {
    const container = document.querySelector('#ImgContainer');
    container.remove();
}
delBtn.addEventListener('click', delImg);

