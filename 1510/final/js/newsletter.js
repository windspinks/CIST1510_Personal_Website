let newsletterForm = document.getElementById('newsletterForm');
let emailInput = document.getElementById('emailInput');
let phoneInput = document.getElementById('telInput');
let fieldset = document.getElementsByTagName('fieldset')[0];
let passInput = document.getElementById('passInput');
let passCheck = passInput.previousSibling.previousSibling;


newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let failed = false;
  if (emailInput.value === "" && phoneInput.value === ""){
    fieldset.classList.add("invalidInput");
    failed = true;
  }
  if (passInput.value.toLowerCase() != "metalsmith"){
    passCheck.classList.add("invalidInput");
    failed = true;
  }

  
  if (!failed){
    newsletterForm.submit();
  }
});
