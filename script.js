function verificarResposta() {
	const respostaCorreta = "Brasília";
	const alternativas = document.getElementsByName("alternativa");
	let respostaSelecionada;

	for (let i = 0; i < alternativas.length; i++) {
		if (alternativas[i].checked) {
			respostaSelecionada = alternativas[i].value;
			break;
		}
	}

	if (!respostaSelecionada) {
		alert("Por favor, selecione uma alternativa.");
		return;
	}

	if (respostaSelecionada === respostaCorreta) {
		document.getElementById("resultado").innerHTML = "Parabéns, você acertou!";
	} else {
		document.getElementById("resultado").innerHTML = "Que pena, você errou. A resposta correta é Brasília.";
	}
}
