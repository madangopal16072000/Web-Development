for(let i=1; i<=10; i++)
{
console.log("HELLO FROM FIRST SCRIPT!!!!");
}

const args = process.argv.slice(2);
for( let arg of args)
console.log("Hello " + arg);