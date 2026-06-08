// 1. operator aritmatika
console.log (10 + 5 * 2)
console.log ( (10 + 5) * 2)
console.log (20 / 2 + 3)
console.log (20 / (2 + 3))
console.log (10 % 3)


// 2. operator perbandingan
let a = 15;
let b = 20;
let c = 15;

// dia false,karena nilai a tidak sama dengan nilai b
console.log (a == b)

// dia true, karena nilai a sama dengan nilai c 
console.log (a == c)

// dia true, karena a tidak sama nilai dengan b 
console.log (a != b)

// dia false, karena nilai a tidak lebih besar dari nilai b 
console.log (a > b)

// dia true, karena nilai a sama dengan nilai c ( < ini jadi tidak terpakai karena a sama dengan c )
console.log (a <= c)


// 3. operator logika
let umur = 18;
let memilikiTiket = true;

console.log (umur >= 17 && memilikiTiket)

// 4. operator logika 
let admin = false;
let moderator = true;

console.log (admin || moderator)

// 5. operator logika
let listrikMati = false;
let internetPutus = true;

console.log (!listrikMati && internetPutus)

// 6. operator logika
console.log (true && true) // true (karena kedua nya true)

console.log (true && false) // false (karena salah satu nya false)

console.log (false || true) // true (karena salah satu nya true)

console.log (false || false) // false (karena kedua nya false)

console.log (!true) // false (karena dia menggunakan NOT, yang menjadi kebalikan dari true)

console.log (!false) // true (karena dia menggunakan NOT, yang menjadi kebalikan dari false)

console.log (!true && false) // false (karena !true menjadi false, dan false tetap false)

// 7. detektif logika
let x = 8;
let y = 12;
let z = 15;

console.log (x < y + x && z > y) // true (karena 8 < 12 + 8 dan 15 > 12)

console.log (x > y || z < y) // false (karena 8 > 12 salah dan 15 < 12 salah) 

// 8. tantangan kombinasi 
let nilai = 85;
let kehadiran = 90;
let tugas = 70;

console.log ( nilai >= 80 && kehadiran >= 80 && tugas >= 70) // true (karena semua ekspresi nya lebih besar atau sama dengan nilai yang ditentukan)

console.log (nilai < 80 || kehadiran < 80 || tugas < 70) // false (karena semua ekspresi nya tidak kurang dari nilai yang ditentukan)

console.log ( !(nilai < 80|| kehadiran < 85 || tugas < 65 )) // true (karena kebalikan dari false adalah true, hal itu disebabkan !)

// 9. reverse engineering 
a = 15;
b = 25;
c = 10;

console.log ( a < b && c < a) // true ( karena a lebih kecil dari b dan c lebih kecil dari a)

console.log ( a > b || c > a) // false ( karena a tidak lebih besar dari b dan c tidak lebih besar dari a)

// 10. 
let d =  9;
let e = 20;

console.log ((d * 2 > 10) && (e % 2 == 0)) // true ( karena d * 2 lebih besar dari 10 dan e % 2 sama dengan 0)

let f = 10;
let g = 10;

console.log ((f * 2 > 10) && (g % 2 == 0)) // true ( karena f * 2 lebih besar dari 10 dan g % 2 sama dengan 0)

let h = 20;
let i = 10;

console.log ((h * 2 > 10) && (i % 2 == 0)) // true ( karena h * 2 lebih besar dari 10 dan i % 2 sama dengan 0)