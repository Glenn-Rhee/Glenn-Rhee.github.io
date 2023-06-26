const motivasiTokoh = [
    '"Menangislah malam ini hingga tidak ada air mata yang tersisa. Tapi, bangunlah esok hari dengan senyuman dan harapan."',
    '"Bekerja dengan suasana hati yang lebih asik dan mempelajari hal baru setiap harinya."',
    '"Semakin berkurang rasa takutmu, semakin terkikis kelemahanmu, semakin tajam kelebihanmu, semakin kuat dirimu."'];

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("images")) {
        changePict(e.target);
    }
})

function changePict(img) {
    const images = document.querySelectorAll(".images");
    // const mainFigure = document.querySelector(".main-figure");
    let src = img.getAttribute("src");
    let nama = src.split("/")[1].split(".")[0];
    const motivasiText = document.querySelector(".motivasi-text");
    const motivasiTokoh = getTokohMotivasi(nama);
    images.forEach(image => {
        image.classList.remove("active-testi");
    });
    img.classList.add("active-testi");
    motivasiText.innerHTML = motivasiTokoh;
    setNamaTokoh(nama);
    // mainFigure.innerHTML = setFigure(src, nama);
}

function getTokohMotivasi(nama) {
    let motivasi;
    if (nama == "Kei Savourie") {
        motivasi = motivasiTokoh[0];
    } else if (nama == "Sunny Ye") {
        motivasi = motivasiTokoh[1];
    } else {
        motivasi = motivasiTokoh[2];
    };

    return motivasi;
}

function setNamaTokoh(nama) {
    const tokohPertama = document.querySelector(".tokoh-pertama");
    const jobPertama = document.querySelector(".job-pertama");
    const tokohKedua = document.querySelector(".tokoh-kedua");
    const jobKedua = document.querySelector(".job-kedua");
    const tokohKetiga = document.querySelector(".tokoh-ketiga");
    const jobKetiga = document.querySelector(".job-ketiga");
    
    tokohPertama.innerHTML = "";
    jobPertama.innerHTML = "";
    tokohKedua.innerHTML = "";
    jobKedua.innerHTML = "";
    tokohKetiga.innerHTML = "";
    jobKetiga.innerHTML = "";

    if (nama == "Kei Savourie") {
        tokohPertama.innerHTML = nama;
        jobPertama.innerHTML = "Designer";
    } else if (nama == "Sunny Ye") {
        tokohKedua.innerHTML = nama;
        jobKedua.innerHTML = "Designer";
    } else {
        tokohKetiga.innerHTML = nama;
        jobKetiga.innerHTML = "Designer";
    }
}


// function setFigure(src, nama) {
//     return `
//     <img
//     src="${src}"
//     class="figure-img img-fluid rounded-circle active-testi images"
//     id="img-two"
//     alt="testimonial 2"
//     />
//     <figcaption class="figure-caption text-center">
//         <h5 class="tokoh">${nama}</h5>
//         <p class="job">Designer</p>
//     </figcaption>

//     `
// }