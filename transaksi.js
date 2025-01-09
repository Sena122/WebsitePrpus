// Tangkap elemen form dan tabel
const form = document.getElementById("transaksiForm");
const tabelTransaksi = document.getElementById("tabelTransaksi");

// Tangani submit form
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil data dari form
    const namaTransaksi = document.getElementById("namaTransaksi").value;
    const jumlah = document.getElementById("jumlah").value;
    const kategori = document.getElementById("kategori").value;

    // Validasi sederhana
    if (!namaTransaksi || !jumlah || !kategori) {
        alert("Semua field harus diisi!");
        return;
    }

    // Tambahkan data ke tabel
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${namaTransaksi}</td>
        <td>${jumlah}</td>
        <td>${kategori}</td>
    `;
    tabelTransaksi.appendChild(row);

    // Reset form
    form.reset();
});