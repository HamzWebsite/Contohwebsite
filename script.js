// Navigasi antara halaman
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Sembunyikan semua halaman
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Tampilkan halaman yang dipilih
        const pageId = this.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
        
        // Update navigasi aktif
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Tombol ubah warna background
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#f4f4f4', '#e6f7ff', '#ffe6e6', '#f0fff0', '#f5f5dc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Tombol sapa pengguna
document.getElementById('greetBtn').addEventListener('click', function() {
    const name = prompt('Siapa nama Anda?', 'Pengunjung');
    if (name) {
        alert(`Halo, ${name}! Selamat datang di website kami.`);
    }
});

// Penghitung pengunjung
let visitCount = 0;
document.getElementById('visitCount').textContent = visitCount;

document.getElementById('incrementBtn').addEventListener('click', function() {
    visitCount++;
    document.getElementById('visitCount').textContent = visitCount;
});

// Form kontak
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulasi pengiriman data
    setTimeout(() => {
        document.getElementById('formResponse').innerHTML = `
            <p style="color: green; margin-top: 1rem;">
                Terima kasih, ${name}! Pesan Anda telah terkirim. Kami akan menghubungi Anda melalui ${email}.
            </p>
        `;
        
        // Reset form
        this.reset();
    }, 1000);
});

// Inisialisasi: tampilkan halaman beranda saat pertama kali dimuat
document.querySelector('.nav-link[data-page="home"]').classList.add('active');