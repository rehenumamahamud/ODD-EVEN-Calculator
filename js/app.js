let num = Number(prompt("Enter a number"));

if(num % 2 == 0){
    document.querySelector('h1').innerText = 'Even ➕';
}else if(num % 2 == 1){
    document.querySelector('h1').innerText = 'Odd ➖';
}