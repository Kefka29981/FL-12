const email = prompt('Enter you`r email');
const maxLength = 5;
const maxPassLength = 6;

let pass;
let oldpass;
let newpass;
let newcheck;

if (email === '' || email === null) {
  alert('Canceled.');
} else if (email.length < maxLength) {
  alert('I don`t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
  pass = prompt('Enter you`r password');
  if (pass === '' || pass === null) {
    alert('Canceled.');
  } else if (
    email === 'user@gmail.com' && pass === 'UserPass' ||
    email === 'admin@gmail.com' && pass === 'AdminPass'
  ) {
    if (confirm('Do you want to change your password?')) {
      oldpass = prompt('Enter old password.');
      if (oldpass === '' || oldpass === null) {
        alert('Canceled.');
      } else if (
        email === 'user@gmail.com' && oldpass === 'UserPass' ||
        email === 'admin@gmail.com' && oldpass === 'AdminPass'
      ) {
        newpass = prompt('Enter new password.');
        if (newpass === '' || newpass === null) {
          alert('Canceled.');
        } else if (newpass.length < maxPassLength) {
          alert('It’s too short password. Sorry.');
        } else {
          newcheck = prompt('Enter new password again.');
          if (newcheck !== newpass) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password.');
          }
        }
      }
    } else {
      alert('You have failed the change.');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don`t know you');
}
