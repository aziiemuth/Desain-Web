document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Tambahkan logika untuk login di sini
    alert('Login berhasil!');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Tambahkan logika untuk registrasi di sini
    alert('Pendaftaran berhasil!');
});

document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Tambahkan logika untuk reset password di sini
    alert('Instruksi reset kata sandi telah dikirim ke email Anda!');
});
