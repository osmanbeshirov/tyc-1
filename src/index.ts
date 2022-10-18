//1. set parameter to your static value
// let age: number = 20;
// if (age < 50)
//     age += 10;



//basic types examples in TS
let sales: number = 123_483_959;
let course: string = 'TypeScript';
let is_published: boolean = true;


//any type
let level;


//function
// function render(document: any) {
//     console.log(document)
// }

//type array
let numbers: number[] = [1, 2, 3];
let names: string[] = ['john', 'sam', 'dean']



// type tuple
//types number and properties number are must be equal
let user: [number, string, boolean, number] = [10, 'sma', true, 23];


//type enums
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize)



