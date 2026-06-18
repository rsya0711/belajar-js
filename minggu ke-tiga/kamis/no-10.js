function buatVoting() {

    let suaraKandidatA = 0;
    let suaraKandidatB = 0;

    function vote(kandidat) {

        if (kandidat === "A") {
            suaraKandidatA++;
            console.log("Vote untuk Kandidat A");

        } else if (kandidat === "B") {
            suaraKandidatB++;
            console.log("Vote untuk Kandidat B");

        } else {
            console.log("Kandidat tidak tersedia");
        }
    }
    function hasil() {
        console.log("HASIL VOTING");
        console.log("Kandidat A :", suaraKandidatA, "suara");
        console.log("Kandidat B :", suaraKandidatB, "suara");
    }
    return {
        vote,
        hasil
    };
}

const voting = buatVoting();

voting.vote("A");
voting.vote("A");
voting.vote("B");
voting.vote("B");
voting.vote("A");

voting.hasil();