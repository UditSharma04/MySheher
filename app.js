const toggle_Btn = document.querySelector('.toggle_btn')
const toggle_BtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggle_Btn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggle_BtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
    
}
function redirectToContactPage() {
    // Redirect to contact.html
    window.location.href = 'contact.html';
}
function redirectToLoginPage() {
  // Redirect to login.html
  window.location.href = './login/login.html';
}