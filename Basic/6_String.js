const name = "ganesh"
const repoCount = 100

// console.log(name + repoCount + value);

console.log('Hello My Name is ${name} My ${repoCount} is This')

const gameName = new String('Ganesh Patnkar');
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

const newString = gameName.substring(1,5)
console.log(newString);

const url = "https://www.google%2com"
console.log(url.replace('%2', '.'));

console.log(url.includes('google'));
