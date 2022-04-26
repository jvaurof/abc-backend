// a) Deve-se quebrar a string ao meio e realizar a troca de posição;
// b) Deve-se inverter cada uma das strings (ex: “fabc” → “”cbaf”);
// c) Deve-se realizar a troca novamente de posição;
// d) Deve-se realizar a hash na string inteira no formato base64;

// reverte a criptografia
export const decrypt = (passEncrypt) => {

	// tranformando base 64 para string
	const base64ToString = atob(passEncrypt)

	// Deve-se realizar a troca novamente de posição
	const reverterchangePosition = changePosition(base64ToString)

	// Deve-se inverter cada uma das strings (ex: “fabc” → “”cbaf”)
	const revertString = reverterchangePosition.split("").reverse().join("")

	// Deve-se inverter cada uma das strings (ex: “fabc” → “”cbaf”)
	const newRevertString =  changePosition(revertString)

	return newRevertString
}

const changePosition = (string) => {
	const length = string.length

	return  string.substring(length / 2, length) +  string.substring(0, length / 2)
} 
