let texto = document.getElementById('area_texto');
let historyPH = document.getElementById('card_history_placeholder');
let historico = document.getElementById('card_history_text');
let BotaoCopiar = document.getElementById('copiar');

function ajustarTamanho(){
    texto.style.height = "auto";
    texto.style.height = texto.scrollHeight + "px";
}

//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function criptografar(){
    if (texto.value != ''){
        historyPH.style.display = 'none';
        BotaoCopiar.style.display = 'block';
        historico.style.cssText = 'display: flex';
    }
    texto = texto.value;
    texto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    historico.innerHTML = '' + texto;
}

function descriptografar(){
    if (texto.value != ''){
        historyPH.style.display = 'none';
        BotaoCopiar.style.display = 'block';
        historico.style.cssText = 'display: block';
    }
    texto = texto.value;
    texto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    historico.innerHTML = '' + texto;
}

function copiar(){
    let textoPronto = document.getElementById('card_history_text');
    let texto = textoPronto.textContent;

    let tempInput = document.createElement("input");
    tempInput.value = texto;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert('Texto copiado para a área de transferência');
}