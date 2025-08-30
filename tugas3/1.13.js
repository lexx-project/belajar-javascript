function validatePassword(password) {
  for (let i = 0; i < password.length; i++) {
    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /d/.test(password)
    ) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(validatePassword("Password123"));
