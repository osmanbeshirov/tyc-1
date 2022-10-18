//1. set parameter to your static value
// let age: number = 20;
// if (age < 50)
//     age += 10;



//basic types examples in TS
// let sales: number = 123_483_959;
// let course: string = 'TypeScript';
// let is_published: boolean = true;


//any type
// let level;


//function
// function render(document: any) {
//     console.log(document)
// }

//type array
// let numbers: number[] = [1, 2, 3];
// let names: string[] = ['john', 'sam', 'dean']



// type tuple
//types number and properties number are must be equal
// let user: [number, string, boolean, number] = [10, 'sma', true, 23];


// //type enums
// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium;
// console.log(mySize)


//functions in TS
// function calculateTax(income: number, taxYear: number): number {
//     if (taxYear < 2022) {
//         return 30 * 1.5
//     }
//     return income * 2
// }

// calculateTax(10_000, 2022)



//object types in TS\
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'Osman',
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }




//custom types
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}


let employee: Employee = {
    id: 1,
    name: 'Osman',
    retire: (date: Date) => {
        console.log(date)
    }
}


//union types
// function kgToLbs(weight: number | string): number {

//     //Narrowing
//     if (typeof weight === 'number') {
//         return weight * 2
//     }
//     else {
//         return parseInt(weight) * 2;
//     }

// }

// kgToLbs(30);
// kgToLbs('10kq')




//intersection method
// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {
//         console.log('drag')
//     },
//     resize: () => {
//         console.log('resize')
//     }
// }




//Literal types
// type Quantity = 50 | 100;
// let score: Quantity = 50

// type Metric = 'cm' | 'inch';
// let size: Metric = 'cm'



//nullable types

// function greet(name: string | null | undefined) {
//     if (name) {
//         console.log(name.toUpperCase())
//     }
//     else {
//         console.log('Hi')
//     }
// }

// greet('osman')
