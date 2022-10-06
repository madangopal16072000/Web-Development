async function hello()
{
    return 'Hello! Man';
}

const sing = async () => {
    return 'la la la';
}

sing().then( (data) => {
    console.log("Return with : ", data);
});