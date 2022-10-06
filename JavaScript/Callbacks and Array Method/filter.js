let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

const odds = arr.filter(num => {
    return num % 2 == 1;
})


function divCreator(num)
{
    return function(element){
        return element%num == 0;
    }
}

const div7 = divCreator(7);

const number = arr.filter(div7(ele));