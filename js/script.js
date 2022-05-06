

function start() { // Inicio da função start()
	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

	//Principais variáveis do jogo
	const jogo = {}
	const TECLA = {
		Q: 81,
		S: 83,
		SPACE: 32
	}
	
	jogo.pressionou = [];
	const velocidade=5;
	let posicaoY = parseInt(Math.random() * 334);	
		
	//Game Loop
	jogo.timer = setInterval(loop,30);

	function loop() {
		movefundo();
		movejogador();
		moveinimigo1();
		moveinimigo2();
		moveamigo();
	} // Fim da função loop()

	//Função que movimenta o fundo do jogo
	function movefundo() {
		esquerda = parseInt($("#fundoGame").css("background-position"));
		$("#fundoGame").css("background-position",esquerda-1);
	} // fim da função movefundo()
	
	//Verifica se o usuário pressionou alguma tecla	
	$(document).keydown(function(e){
		jogo.pressionou[e.which] = true;
		movejogador();
	});
	
	$(document).keyup(function(e){
	   jogo.pressionou[e.which] = false;
	});

	function movejogador() {
		if (jogo.pressionou[TECLA.Q]) {
			var topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top",topo-10);
			if (topo<=10) {	
				$("#jogador").css("top",topo+10);
			}
		}
		
		if (jogo.pressionou[TECLA.S]) {
			var topo = parseInt($("#jogador").css("top"));
			$("#jogador").css("top",topo+10);
			
			if (topo>=434) {	
				$("#jogador").css("top",topo-10);
			}
		}
		
		if (jogo.pressionou[TECLA.SPACE]) {
			//Chama função Disparo	
		}
	} // fim da função movejogador()

	function moveinimigo1() {
		posicaoX = parseInt($("#inimigo1").css("left"));
		$("#inimigo1").css("left",posicaoX-velocidade);
		$("#inimigo1").css("top",posicaoY);
			
		if (posicaoX<=0) {
			posicaoY = parseInt(Math.random() * 334);
			$("#inimigo1").css("left",694);
			$("#inimigo1").css("top",posicaoY);
		}
	} //Fim da função moveinimigo1()

	function moveinimigo2() {
        posicaoX = parseInt($("#inimigo2").css("left"));
		$("#inimigo2").css("left",posicaoX-3);
				
		if (posicaoX<=0) {
			$("#inimigo2").css("left",775);		
		}
	} // Fim da função moveinimigo2()

	function moveamigo() {		
		posicaoX = parseInt($("#amigo").css("left"));
		$("#amigo").css("left",posicaoX+1);
					
		if (posicaoX>906) {
			$("#amigo").css("left",0);
		}

	} // fim da função moveamigo()

} // Fim da função start
