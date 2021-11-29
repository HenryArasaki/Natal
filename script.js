const diasTexto = document.querySelector("#dias")
const horasTexto = document.querySelector("#horas")
const minutosTexto = document.querySelector("#minutos")
const segundosTexto = document.querySelector("#segundos")

const dataNatal = new Date(2021,11,25)
const natal = Date.parse(dataNatal)


const interval = setInterval(atualizarRelogio, 1000);
function atualizarRelogio(){
    const agora = Date.now()
    const diferenca = Math.floor((natal-agora)/1000) //em segundos
    
    const dias = diferenca/(60 * 60 * 24)
    diasTexto.innerHTML = Math.floor(dias) + "<br>" +"Dias"
    
    const restoDias = diferenca%(60 * 60 * 24)
    const horas = restoDias/(60*60)
    horasTexto.innerHTML = Math.floor(horas) +"<br>" +"h"
    
    const restoHoras = restoDias%(60*60)
    const minutos = restoHoras/(60)
    minutosTexto.innerHTML = Math.floor(minutos) + "<br>" +"min"
    
    const restoMinutos = restoHoras%60
    const segundos = restoMinutos
    segundosTexto.innerHTML = Math.floor(segundos) + "<br>" +"s"    
}
