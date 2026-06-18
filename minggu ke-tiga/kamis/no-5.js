jalan();

function jalan() {
    console.log("Program A jalan");
}
// karena function deklarasi langsung dihoist semua

jalan();

const jalan = function() {
    console.log("Program B jalan");
}
//tidak bisa muncul nilai nya, karena harus dibikin dulu nilai nya

