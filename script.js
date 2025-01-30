// Variable untuk animasi scroll pelan
let scrollSpeed = 0.5; // Kecepatan scroll, lebih rendah lebih pelan
let scrollPosition = 0;

// Fungsi untuk scroll pelan secara terus-menerus
function smoothScroll() {
  // Menambahkan scroll pada posisi
  scrollPosition += scrollSpeed;

  // Mengatur posisi kontainer berdasarkan scrollPosition
  document.getElementById('videoContainer').style.transform = `translateY(-${scrollPosition}px)`;

  // Jika sudah melewati konten terakhir, reset ke awal
  if (scrollPosition >= document.getElementById('videoContainer').scrollHeight) {
    scrollPosition = 0;
  }

  // Memanggil animasi scroll secara berkelanjutan
  requestAnimationFrame(smoothScroll);
}

// Fungsi untuk mulai scroll saat tombol diklik
document.getElementById('openButton1').addEventListener('click', function() {
  document.getElementById('backgroundAudio').play(); // Play audio saat tombol diklik
  document.getElementById('page2').style.display = 'block'; // Tampilkan halaman 2
  document.getElementById('page1').style.display = 'none'; // Sembunyikan halaman 1

  // Menampilkan semua halaman
  document.getElementById('page3').style.display = 'block';
  document.getElementById('page4').style.display = 'block';
  document.getElementById('page5').style.display = 'block';
  document.getElementById('page6').style.display = 'block';

  // Mulai animasi scroll
  smoothScroll();
});

// Fungsi untuk mendapatkan parameter dari URL dan menampilkan nama tamu
function getGuestName() {
    // Ambil parameter 'guest' dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get("guest");

    // Jika tidak ada parameter, gunakan nama default
    const displayName = guestName ? decodeURIComponent(guestName) : "Tamu Spesial";

    // Ganti teks di elemen dengan ID 'guestText1'
    document.getElementById("guestText1").textContent = displayName;
}

// Panggil fungsi setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", getGuestName);

