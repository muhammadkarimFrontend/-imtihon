// 👁️ Parolni ko‘rsatish/yashirish
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', () => {
	const type = passwordField.type === 'password' ? 'text' : 'password';
	passwordField.type = type;
	togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// ✅ Formani yuborishda tekshirish
document.getElementById('signupForm').addEventListener('submit', function (e) {
	e.preventDefault(); // sahifani yangilashni oldini oladi

	const username = document.getElementById('username').value.trim();
	const email = document.getElementById('email').value.trim();
	const password = passwordField.value.trim();

	if (!username || !email || !password) {
		alert('Iltimos, barcha maydonlarni to‘ldiring.');
		return;
	}

	// Hamma ma’lumot to‘g‘ri to‘ldirilgan
	alert('Ro‘yxatdan muvaffaqiyatli o‘tdingiz!');

	// Bu yerda siz backend serverga ma’lumot yuborishingiz mumkin
});
