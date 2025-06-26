// Fungsi hitung luas
function hitungluas() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const hasil = document.getElementById("hasilluas");

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    hasil.innerText = "Masukkan nilai alas dan tinggi yang valid!";
    return;
  }

  const luas = 0.5 * alas * tinggi;
  document.getElementById("hasilluas").innerText = `Luas Segitiga = ${luas}`;
}
// Fungsi Untuk Reset Luas
function resetluas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasilluas").innerText = "";
  document.getElementById("error-alas").innerText = "";
  document.getElementById("error-tinggi").innerText = "";
}

// Fungsi hitung Keliling
function hitungkeliling() {
  const sisi1 = parseFloat(document.getElementById("sisi1").value);
  const sisi2 = parseFloat(document.getElementById("sisi2").value);
  const sisi3 = parseFloat(document.getElementById("sisi3").value);
  const hasil = document.getElementById("hasilkeliling");

  if (
    isNaN(sisi1) ||
    isNaN(sisi2) ||
    isNaN(sisi3) ||
    sisi1 <= 0 ||
    sisi2 <= 0 ||
    sisi3 <= 0
  ) {
    hasil.innerText = "Masukkan ketiga sisi segitiga yang valid!";
    return;
  }

  const keliling = sisi1 + sisi2 + sisi3;
  document.getElementById(
    "hasilkeliling"
  ).innerText = `Keliling Segitiga = ${keliling}`;
}

// Fungsi Untuk Reset Keliling
function resetkeliling() {
  document.getElementById("sisi1").value = "";
  document.getElementById("sisi2").value = "";
  document.getElementById("sisi3").value = "";
  document.getElementById("hasilkeliling").innerText = "";
  document.getElementById("error-sisi1").innerText = "";
  document.getElementById("error-sisi2").innerText = "";
  document.getElementById("error-sisi3").innerText = "";
}

function tampilkan(mode) {
  const luasCard = document.getElementById("luas-card");
  const kelilingCard = document.getElementById("kelilingcard");
  const btnLuas = document.querySelector(".btn-luas");
  const btnKeliling = document.querySelector(".btn-keliling");

  if (mode === "Luas") {
    luasCard.style.display = "block";
    kelilingCard.style.display = "none";
    btnLuas.classList.add("active-btn");
    btnKeliling.classList.remove("active-btn");
  } else if (mode === "Keliling") {
    luasCard.style.display = "none";
    kelilingCard.style.display = "block";
    btnLuas.classList.remove("active-btn");
    btnKeliling.classList.add("active-btn");
  }

  resetLuas();
  resetKeliling();
}

document.addEventListener("DOMContentLoaded", (event) => {
  tampilkan("Luas");
});
