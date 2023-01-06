function calcular() {	
	let weight = document.getElementById('input_weight').value;
	let height = document.getElementById('input_height').value;

	let meterHeight = height / 100;
	let result = weight / (meterHeight * meterHeight);	

	document.getElementById('result').innerText = Math.trunc(result);
}
