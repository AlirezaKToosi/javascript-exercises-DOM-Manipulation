//Del 2
document.querySelector('.logo-text').style.color = '#384241';

document.querySelector('header').style.justifyContent = 'left';

document.querySelector('header').style.borderBottom = '1px solid lightgray';

document.getElementById('recipe-name').innerText='Frozen Cheescake';

document.querySelector('.time-container span:first-child').classList.add('material-icons');

document.querySelector('.time').innerText = '60+ min';

document.querySelector('.image-container img').src='assets/frozen-cheesecake-slice.jpg';

document.querySelector('.ingredients-container').style.backgroundColor='#f9f9f9';

const ingredientsListBottom = document.querySelector('.ingredients-list-bottom');
ingredientsListBottom.innerHTML = '<li>15st digistivetex</li><li>Lite smör</li>';

document.querySelector('.ingredients-list-paste li:nth-child(3)').innerText = '3tsk vaniljsocker';

const newElement=document.createElement('li')
newElement.innerText='400g naturell philadelphiaost';
document.querySelector('.ingredients-list-paste').appendChild(newElement);

document.querySelector('.instructions').classList.remove('shadow');

const instructionsList = document.querySelector('.instructions-list');
instructionsList.children[1].innerText = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
instructionsList.children[9].innerText = 'Ställ in i frysen över natten.';




