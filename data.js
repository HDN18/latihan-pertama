const nama = "Hanif DN";
let usia = 21  ;

let biodata = document.getElementById ('biodata')
console.log (biodata);

function generateBiodata() {
    let generasi;

    if (usia >= 10 && usia <=  20) {
        // INI ADALAH KONDISI PERTAMA
        generasi = "anda remaja";
    }

    else if (usia > 5  && usia < 10) { 
        generasi = "anda anak-anak";
    }

    else if (usia >= 1 && usia <= 5) { 
        generasi = "anda bayi";
    }

    else if (usia > 20) { 
        generasi = "anda dewasa";
    }

    else {
        // INI ADALAH KONDISI TIDAK TERPENUHI
        generasi = "tidak terdaftar"
    }
    return biodata.innerHTML = generasi;
}

console.log (nama);
console.log (usia);

generateBiodata();