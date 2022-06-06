const btns = document.querySelectorAll (".nav-link");
const dropdownItems = document.querySelectorAll (".dropdown-item");

btns.forEach(btn => {
    btn.addEventListener ('click', function(){
      btns.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
});

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener ('click', function(){
      dropdownItems.forEach(dropdownItem => dropdownItem.classList.remove('active'));
      this.classList.add('active');
    });
}); 