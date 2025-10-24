// Greeting user by name
window.onload = function() {
    let name = prompt("Masukkan nama Anda:");
    if (name) {
        document.getElementById("userName").innerText = name;
    }
};



// banner slider
let currentBanner = 0;
const banners = document.querySelectorAll('.banner-container img');
const totalBanners = banners.length;

function changeBanner() {
    banners[currentBanner].classList.remove('active');
    currentBanner = (currentBanner + 1) % totalBanners;
    banners[currentBanner].classList.add('active');
}

setInterval(changeBanner, 5000); // ganti tiap 5 detik

// Form validation & display data
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("messageText").value.trim();

    if (!name || !birthdate || !gender || !message) {
        alert("Semua field harus diisi!");
        return;
    }

    const currentTime = new Date().toString();

    const outputBox = document.getElementById("outputBox");
    outputBox.innerHTML = `
        <p><strong>Current time:</strong> ${currentTime}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
});
