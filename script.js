var swiper = new Swiper(".slidecontent", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  function redirectToContactPage() {
    // Redirect to contact.html
    window.location.href = 'contact.html';
}
function redirectToLoginPage() {
  // Redirect to login.html
  window.location.href = './login/login.html';
}