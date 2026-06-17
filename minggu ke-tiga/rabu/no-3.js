const password = "BelajarJS2026";

for (let karakter of password){
    if (karakter >= "A" && karakter <= "Z")
        hurufBesar =true;

    if (karakter >= "a" && karakter <= "z")
        hurufKecil =true;

    if (karakter >= "0" && karakter <= "9")
        angka =true;

    }
console.log(hurufBesar);
console.log(hurufKecil);
console.log(angka);

if (password.length >= 8 && hurufBesar && hurufKecil && angka) {
    console.log("Password valid");

} else {
    console.log("Password tidak valid");
}
