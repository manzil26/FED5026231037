//untuk icon 
document.addEventListener("DOMContentLoaded", function () {
    var copyButton = document.getElementById("copyButton");
    var icon = document.getElementById("icon");

    copyButton.addEventListener("click", function () {
        var link = "http://127.0.0.1:5500/linktree.html"; // Sesuaikan dengan link asli

        // Menyalin link ke clipboard
        navigator.clipboard.writeText(link).then(function () {
            // Ubah ikon saat diklik
            icon.src = "https://st4.depositphotos.com/3894705/21127/i/450/depositphotos_211273164-stock-photo-tick-symbol-flat-icon-circle.jpg"; // Ikon checklist
            setTimeout(function () {
                icon.src = "https://static.vecteezy.com/system/resources/thumbnails/002/387/755/small/link-icon-free-vector.jpg"; // Kembali ke ikon awal
            }, 1500);
        }).catch(function (err) {
            console.error("Failed to copy text: ", err);
        });
    });
});
