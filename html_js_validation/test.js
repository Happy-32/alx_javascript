function hasSpecialCharacter(str) {
    return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
  }
  
  const string = "Hello, World!";
  const containsSpecialCharacter = hasSpecialCharacter(string);
  console.log(containsSpecialCharacter); // Output: false
  