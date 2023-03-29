console.log('1: ' + quartos);

console.log('2: ' + casa());

var quartos = 2;

console.log('3: ' + casa());

function casa() {
	var banheiros = 2,
			cozinha = 1,
			totalAmbientes = quartos + banheiros + cozinha;
	return totalAmbientes;
}

console.log('4: ' + casa());

console.log('5: ' + quartos);