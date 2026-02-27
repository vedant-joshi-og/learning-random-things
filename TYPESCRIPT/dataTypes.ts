// String

let s : string =  "Something Random";

//Common methods

s.length;
s.toUpperCase();
s.toLowerCase();
s.indexOf("S");
s.charAt(5);
s.substring(2,5);
s.startsWith("SOmething");
s.endsWith("dom");
s.split(" ");
s.trim();

//Number

let n : number = 17;

//method

Number("17");
parseInt("17");
parseFloat("17.17");
isNaN(n);
Math.max(1, 2, 3);
Math.min(1, 2, 3);
Math.random();
Math.round(17.4);
Math.PI;
Math.floor(17.9);
Math.ceil(17.1);

// Boolean

let b : boolean = true;

// methods

// Sharam karo !

// Array

let arr : number[] = [1, 2, 3, 4, 5];

// methods

arr.length;
arr.push(7);
arr.pop(); //remove last and return
arr.map(x => x*1); // hahahaha
arr.slice(1,4);
arr.filter(x => x%2 == 0);
arr.includes(20);
arr.indexOf(2);
arr.forEach(x => console.log(x));
arr.reduce((acc, val) => acc + val, 0);
arr.sort((a, b) => a-b);
arr.splice(2);
// arr.find(x => x.gf_age < 18)

// Tupple

let tup : [string,number] = ["vemacitrind",1];

tup[0];
tup[1];

// ENUM

enum Color {Red, Green, Blue}

// enum is used for reverese mapping.
// Yes you had correct Queation ! Why just not use String array
// You can do color[0] to get 'Red' but you cannot do color.Red to get 0.
// But you can do color.indexOf('Red'). Hahahah F**k typescript

Color.Red

// Any

let x: any = 5;
x = true;
x = 'Data khatammm~ Khel Khatammm~ Khel Khatam betaaa~';


