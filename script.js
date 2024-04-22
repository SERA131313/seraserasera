// Script untuk validasi formulir kontak
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan perilaku default submit formulir
    
    // Ambil nilai input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Validasi input
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Harap isi semua kolom!');
      return;
    }
  
    // Kirim formulir (di sini Anda dapat menambahkan logika untuk mengirim formulir menggunakan AJAX)
    alert('Formulir telah dikirim:\nNama: ' + name + '\nEmail: ' + email + '\nPesan: ' + message);
  });
  
  // Function to filter portfolio items based on selected category
function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
      const tags = item.getAttribute('data-tags');
      if (category === 'all' || tags.includes(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  // Event listener for filter buttons
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-filter');
      filterPortfolio(category);
    });
  });
  