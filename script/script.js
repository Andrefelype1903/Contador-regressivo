const contador = document.querySelector('.contador')

const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const div3 = document.querySelector('.div3')
const div6 = document.querySelector('.div6')
const div11 = document.querySelector('.div11')
const div8 = document.querySelector('.div8')
const div1Bback = document.getElementById('div1-back')

let vez = 0;

const dataAlvo = new Date("may, 04, 2025 00:00:00").getTime();

// const dataAlvo = 2

const animationImage = (y,img,img2,img3) => {

  setTimeout(() => {

    div1.style.transform = y

  },2000)

  setTimeout(() => {
    div3.style.backgroundImage = img3
  },3000)

  setTimeout(() => {

    div6.style.backgroundImage = img
    div8.style.transform = y

  },4000)

  setTimeout(() => {
    div2.style.transform = y
  },5000)

  setTimeout(() => {
    div11.style.backgroundImage = img2
  },5500)

  setTimeout(() => {
    div1Bback.style.backgroundImage = "url(./img/21.jpg)"
  },9000)

}

const clearAnimation = () => {
  div1.style.transform = ""
  div6.style.transform = ""
  div1Bback.style.transform = ""
}

animationImage("rotateY(180deg)", "url(./img/5.jpg)", "url(./img/18.jpg)", "url(./img/22.jpg)")
clearAnimation()


setInterval(() => {
  if(vez === 0) {
    animationImage("rotateY(360deg)", "url(./img/17.jpg)", "url(./img/19.jpg)", "url(./img/2.jpg)" )
    vez++
  } else if(vez === 1) {
    animationImage("rotateY(180deg)", "url(./img/5.jpg)", "url(./img/18.jpg)", "url(./img/22.jpg)")
    vez--
  }
},5000)
 


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
