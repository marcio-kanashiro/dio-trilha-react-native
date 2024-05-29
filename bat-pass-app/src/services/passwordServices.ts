export default function generatePassword(){
  let password: string = '';
  let characters: string = 'ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz1234567890@#$?!';

  for(let index = 0; index < 8; index++){
    password += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return password;
}