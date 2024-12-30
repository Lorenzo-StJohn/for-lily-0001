let imgSrc = document.getElementById('img-src');
let textSrc = document.getElementById('text-src');
let result = document.getElementById('result');
let button = document.getElementById('button');
let str, temp, res, text, p;

const generate = () => {
	str = imgSrc.value;
	text = textSrc.value;
	for (let i = 5; i < str.length; i += 1) {
		if (str[i - 5] === 's' && str[i - 4] === 'r' && str[i - 3] === 'c' && str[i - 2] === '=' && str[i - 1] === '"') {
			temp = "";
			while (str[i] != '"') {
				temp += str[i];
				i += 1;
			}
			res = `<div class="gift"><img src="${temp}" width="55" alt="${text}"  title="${text}"></div>\n`;
			p = document.createElement('p');
			p.textContent = res;
			result.appendChild(p);
		}
	}	
	navigator.clipboard.writeText(result.textContent)
	.then(() => console.log("Done!"))
	.catch(err => console.error(err))
}



button.addEventListener('click', generate);
