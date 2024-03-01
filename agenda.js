var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoEvento = document.getElementById('novoEvento');
var formNovoEvento = document.getElementById('formNovoEvento');
var inputNomeEvento = document.getElementById('NovoEvento');
var inputDataEvento = document.getElementById('dataEvento');

   function MostrarNovoEvento() {
    novoEvento.classList.remove('d-none');
 }

function ocultarNovoEvento() {
    novoEvento.classList.add('d-none');
}

function nomeEventoValido(nomeEvento, dataEvento ) {
   var validacao0k = true;
   if (nomeEvento.trim(). length === 0) {
      inputNomeEvento.classList.add('is-invalid');
      validacao0k = false;
   } else {
      inputDataEvento.classList.remove('is-invalid');
   }
   var timestampEvento =  Date.parse(dataEvento);
   var timestampAtual =  new Date().getTime();
   if (isNaN(timestampEvento) || timestampEvento < timestampAtual){
   inputDataEvento.classList.add('is-invalid');
   validacao0k = false;
   } else {
      inputDataEvento.classList.remove('is-invalid');
   }
   return validacao0k;
}

function SalvarNovoEvento(event) {
   event.preventDefault();
   var nomeEvento = inputNomeEvento.value;
   var  dataEvento = new Date (inputDataEvento.value);
   if  (nomeEventoValido(nomeEvento, dataEvento)) {
      console.log('evento é válido!');
   } else {
      console.log('Evento é inálido!');
   }
   
   
}

buttonNovoEvento.addEventListener('click', MostrarNovoEvento);
buttonCancelar.addEventListener('click', ocultarNovoEvento);
formNovoEvento.addEventListener('submit', SalvarNovoEvento);