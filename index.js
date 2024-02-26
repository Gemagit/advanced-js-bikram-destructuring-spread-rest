//RESUELVE LOS EJERCICIOS AQUÍ
// EJERCICIO 1

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];


const { name } = empleados[1];
let ana = empleados[1];
console.log(ana.name);


//EJERCICIO 2

const { email } = empleados[0];
let emailLuis = empleados[0];
emailLuis = emailLuis.email;
console.log(emailLuis);

//EJERCICIO 3

// Inicialmente
let a = 5;
let b = 3;
[a, b] = [b, a];
console.log(a);

// Al final
//let a = 3;
//let b = 5;

//EJERCICIO 4

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};


const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);

//EJERCICIO 5

function sumEveryOther(x, y, ...num) {

    //   console.log(num);
    //    console.log([...num]);
    let suma = x + y;
    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }
    return suma;
}

//sumEveryOther(6, 8, 2, 3, 1); //20
//sumEveryOther(11, 3, 12);  //26
console.log(sumEveryOther(6, 8, 2, 3, 1));


//EJERCICIO 6


function addOnlyNums(...item) {
    let result = 0;
    for (let i = 0; i < item.length; i++) {
        //console.log("prueba: "+item[i]);
        if (typeof item[i] === "number") {
            //console.log("prueba2: "+item[i]);
            result += item[i];
        }
    }
    //console.log("resultado: "+result);
    return result;
}

//console.log(addOnlyNums(1,"perro", 6, "gato", "ratón", 7)); // 14
console.log(addOnlyNums(1, "perro", 2, 4)); //7
//addOnlyNums(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina"); // 19

//EJERCICIO 7 

console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4


function countTheArgs(...numeros) { return numeros.length; }

//EJERCICIO 8

function combineTwoArrays(item1, item2) {
    item1 = [...item1, ...item2];
    return item1;
}

combineTwoArrays([5, 7, 9], [1, 8, 9, 6, 5]);

//EJERCICIO 9 
//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

function onlyUniques(...item) {
    item = [...new Set(item)];
    return item;
}

console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo")); //["gato", "pollo", "cerdo"]
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]


//EJERCICIO 10 
//Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos 
//y los combine todos en un solo array.


function combineAllArrays(...arr) {
    let unir = arr[0];
    for (i = 0; i < arr.length; i++) {
        unir = unir.concat(arr[i]);
    }
    return unir;
}



//console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
//console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// EJERCICIO 11
//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado 
//y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...arg) {
    return
}