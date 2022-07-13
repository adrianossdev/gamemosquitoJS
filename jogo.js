var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel === 'normal'){
	criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
	criaMosquitoTempo = 1000
}else if(nivel === 'muitodificil'){
	criaMosquitoTempo = 750
}

function ajustarDimensaoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(altura, largura)
}

ajustarDimensaoJogo()

var cronometro = setInterval(function(){

	tempo -= 1

	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	}else
	document.getElementById('cronometro').innerHTML = tempo


}, 1000)

function posicaoRandomica(){

	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if(vidas>3){
			window.location.href = 'fim.html'
		}else
		document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
		vidas ++
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX 
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	var mosquito1 = document.createElement('img')
	mosquito1.src = 'img/mosca.png'
	mosquito1.style.left = posicaoX + 'px'
	mosquito1.style.top = posicaoY + 'px'
	mosquito1.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito1.style.position = 'absolute'
	mosquito1.id = 'mosquito'
	mosquito1.onclick = function(){
		this.remove()
	}
	document.body.appendChild(mosquito1)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3 )

	switch (classe) {

		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'

	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2 )

	switch (classe) {

		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
		

	}
}