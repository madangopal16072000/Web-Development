let choice = prompt("Enter your choice : ");
while (choice !== "new" && choice !== "list" && choice !== "delete" && choice !== "quit")
    choice = prompt("Enter correct choice : ");
let Arr = [];
while (choice !== "quit") {
    switch (choice) {
        case "new":
            let input = prompt("Enter your TODO : ");
            Arr.push(input);
            console.log(`TODO : ${input} added Successfully`);
            break;
        case "list":
            console.log("***********************");
            for (let i = 0; i < Arr.length; i++)
                console.log(`${i} : ${Arr[i]}`);
            console.log("***********************");
            break;
        case "delete":
            let pos = parseInt(prompt("Enter number to delete TODO : "));
            if(pos < Arr.length && pos >= 0)
            {
            console.log(`${Arr.splice(pos, 1)} deleted successfully`);
            }
            else
            {
                console.log("Unknown number");
            }
            break;

    }
    choice = prompt("Enter your choice : ");
}

console.log("Oh! you quit the app");

