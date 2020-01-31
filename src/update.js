import format from 'date-fns/format';

//var span = document.querySelector('#time-now');
var span = document.querySelector('#hello');

export default function update() {
	span.textContent = "Hello World";
}
