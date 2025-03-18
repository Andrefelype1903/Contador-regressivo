
const dataAlvo = new Date("may, 04, 2025 00:00:00").getTime();

const body = document.querySelector('body')

console.log(dataAlvo);

const contagem = () => {

  const dataAtual = new Date().getTime();
  const tempoRestante = dataAlvo - dataAtual;

  if(tempoRestante < 0) {


    // body.style.backgroundImage = 'url(./img/andre.jpeg)'


    clearInterval(intervalo);

    return
  }

  const dias = Math.floor(tempoRestante / (1000 * 60  *  60  * 24)).toString().padStart(2, '0')

  const horas = Math.floor((tempoRestante % (1000 * 60  * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')

  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');

  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000).toString().padStart(2, '0')

  console.log(dias + '/' + horas + '/' + minutos + '/' + segundos)
  

  document.querySelector('#dias').innerHTML = dias
  document.querySelector('#horas').innerHTML = horas
  document.querySelector('#minutos').innerHTML = minutos
  document.querySelector('#segundos').innerHTML = segundos
  document.querySelector('#dias').innerHTML = dias


}

contagem()

const intervalo = setInterval(() => {

  contagem()
  
}, 1000);
