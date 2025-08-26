const botao = document.getElementById("botao");
const numI = document.getElementById("txtn");
const caixa = document.getElementById("tabuada");
botao.addEventListener('click', calcular);

function calcular() {
    if (numI.value.length == 0) {
        alert("[ERRO] Insira um número.")
    } else {
        caixa.innerHTML = "";
        const num = Number(numI.value);
        for (let c = 1; c < 11; c++) {
            let opcao = document.createElement("option");
            let mult = num * c;
            opcao.textContent = (`${num} x ${c} = ${mult}`);
            opcao.value = `v${c}`;
            caixa.appendChild(opcao);
        }
    }
}