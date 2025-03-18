const contador = document.querySelector('.contador')

/* const dataAlvo = new Date("may, 04, 2025 00:00:00").getTime(); */

const dataAlvo = new Date("mar, 17, 2025 23:16:35").getTime();


const body = document.querySelector('body')

console.log(dataAlvo);

const canvas = () => {

  const divHappy = document.createElement('div')
  divHappy.classList.add("happy");
  contador.appendChild(divHappy)

  const newCanvas = document.createElement('canvas')
  newCanvas.id = 'c';

  divHappy.appendChild(newCanvas)
}

const contagem = () => {

  const dataAtual = new Date().getTime();
  const tempoRestante = dataAlvo - dataAtual;


  if(tempoRestante <= 0) {


    canvas()


    clearInterval(intervalo);

    location.reload()


  } else {

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



}

contagem()

const intervalo = setInterval(() => {

  contagem()
  
}, 1000);
