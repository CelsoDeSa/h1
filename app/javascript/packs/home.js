// const cursor = document.getElementById('cursor');
const words = ['Ferramentas', 'Ideias', 'Artigos'];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    document.getElementById('cursor').classList.toggle('blink');
    
	var loopTyping = function() {
		if (word.length > 0) {
            document.getElementById('selling-points').innerHTML += word.shift();
		} else {
            document.getElementById('cursor').classList.toggle('blink');
			setTimeout(deletingEffect, 3000);
			return false;
        };
		timer = setTimeout(loopTyping, 200);
    };
    
	loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    document.getElementById('cursor').classList.toggle('blink');
    
	var loopDeleting = function() {
		if (word.length > 0) {
            word.pop();
            document.getElementById('selling-points').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
            };
            document.getElementById('cursor').classList.toggle('blink');
			setTimeout(typingEffect, 1000);
			return false;
        };
        
		timer = setTimeout(loopDeleting, 200);
    };
    
	loopDeleting();
};

window.addEventListener('load', typingEffect);