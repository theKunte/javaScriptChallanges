function passwordValidator(password){
    let oneLowerCaseLetter = /(?=.+[a-z])/;
    let oneUpperCaseLetter = /(?=.+[A-Z])/;
    let oneDigit = /(?=.+[0-9])/;
    let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
    let minimumEightCharacters = /(?=.{8,})/;
    let isValid =
    oneLowerCaseLetter.test(password) &&
    oneUpperCaseLetter.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharacter.test(password) &&
    minimumEightCharacters.test(password);

    return isValid ? "Your password is valid" : "Your passowrd is invalid"

}

console.log(passwordValidator("abc")); // invalid
console.log(passwordValidator("9Ab!4567")); // valid