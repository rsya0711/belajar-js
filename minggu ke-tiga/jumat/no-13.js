const party = [
    {
        nama: "Ari",
        role: "Tank",
        hp: 3000
    },
    {
        nama: "Bima",
        role: "Mage",
        hp: 1500
    },
    {
        nama: "Citra",
        role: "Support",
        hp: 1800
    }
];

function buatPartyBaru(sterss, ...anggota){

    const partyBaru = [...anggota];
    console.log("Nama Party :", sterss);

    for (const {nama, role, hp} of partyBaru){
        console.log("nama:",nama,"role:",role," HP:",hp
        );
    }
}
buatPartyBaru("sterss", party[0], party[1], party [2]);