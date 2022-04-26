// realiza a criptografia
export const encrypt = (pass) => {

	// Deve-se quebrar a string ao meio e realizar a troca de posição
	const trocaDePosicaoString = changePosition(pass)

	// Deve-se inverter cada uma das strings (ex: “fabc” → “”cbaf”);
	const stringInvertida = trocaDePosicaoString.split("").reverse().join("")
	
	// Deve-se realizar a troca novamente de posição
	const newChangePosition =  changePosition(stringInvertida)

	// Deve-se realizar a hash na string inteira no formato base64
	const stringToBase64 = btoa(newChangePosition)

  return stringToBase64
}

const changePosition = (string) => {
	const length = string.length

	return  string.substring(length / 2, length) +  string.substring(0, length / 2)
}