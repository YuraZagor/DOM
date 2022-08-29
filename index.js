import { data } from './data.js'   


function open(x=0) {
	return document.getElementsByClassName('content--p').textContent = data[x].content
}

// let mainText = data[0].content
// let mainText = open(0)

const div = document.createElement('div');
div.classList.add('wrapper');
const body = document.querySelector('body')
body.appendChild(div)

const main = document.createElement('main')
main.classList.add('content')
div.appendChild(main)

const contentP = document.createElement('div');
contentP.classList.add('content--p')
contentP.textContent = open()
main.appendChild(contentP)

const ul = document.createElement('ul')
ul.classList.add('sidenav--ul')
main.insertAdjacentElement('beforebegin', ul)

ul.innerHTML = data.map( (item) =>  `
	<li class="sidenav--li" onclick = 'open(${item.number - 1})'>
		 <img src=${item.img} alt=${item.text} class="li--img" >
	</li>
	` ).join(' ')


