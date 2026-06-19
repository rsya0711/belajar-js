const akun = {
    nama: "Fikri",
    email: "fikri@email.com"
};

const profil = {
    umur: 20,
    kota: "Bandung"
};

const fikri = {
...akun,
...profil,
};

console.log (fikri);