var tx = document.getElementById('textarea');
  tx.setAttribute('style', 'height:' + (tx.scrollHeight) + 'px;overflow-y:hidden;');
  tx.addEventListener("input", OnInput, false);

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}

function displayTip(string){
  var hinty = document.getElementById("hint");
  switch(string) {
    case "name":
        hinty.innerHTML = "Your name goes first. If you can't remember it, just write John.";
        break;
    case "password":
        hinty.innerHTML = "Next, your password. Try not to use qwerty. Remember this!";
        break;
    case "r-password":
        hinty.innerHTML = "Now repeat your password! You did not forget it right??";
        break;
    default:
        hinty.style.color = 'lightgreen';
        hinty.innerHTML = '';
      }
}

function checkPass(){
  var passHint = document.getElementById('passH');
  if(document.getElementById('ps').value != document.getElementById('rp').value){
    passHint.style.backgroundColor = 'red';
    passHint.innerHTML = 'Passwords does not match!';
  } else {
    passHint.style.backgroundColor = 'lightgreen';
    passHint.innerHTML = 'You are good to go!';
    }
  }
