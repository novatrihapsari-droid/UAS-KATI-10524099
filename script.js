function pesan(namaProduk) {
    localStorage.setItem("jasa", namaProduk);
    window.location.href = "transaksi.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const inputJasa = document.getElementById("jasa");
    if (inputJasa) {
        inputJasa.value = localStorage.getItem("jasa") || "";
    }

    const form = document.getElementById("formTransaksi");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const data = new FormData(form);
            const invoiceData= {
                nama: data.get("nama"),
                email: data.get("email"),
                alamat: data.get("alamat"),
                jasa: data.get("jasa"),
                tanggal: data.get("tanggal")
            };
            localStorage.setItem("invoice", JSON.stringify(invoiceData));
            window.location.href = "invoice.html";
        });
    }

    const hasil = document.getElementById("hasilInvoice");
    if (hasil) {
        const data = JSON.parse(localStorage.getItem("invoice"));
        if (data) {
            hasil.innerHTML = `           <p><strong>Nama:</strong>${data.nama}</p>
            <p><strong>Email:</strong>${data.email}</p>
            <p><strong>Alamat:</strong>${data.alamat}</p>
            <p><strong>Produk:</strong>${data.jasa}</p>
            <p><strong>Tanggal:</strong>${data.tanggal}</p>
            <h3>Terimakasih telah memesan di YummyCats!</h3>
            `;
        }
    }
});