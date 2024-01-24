function processText(operation) {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = '';

    if (operation === 'encrypt') {
        outputText = encryptText(inputText);
    } else if (operation === 'dencrypt') {
        outputText = decryptText(inputText);
    }

    document.getElementById('outputText').textContent = outputText;
    document.getElementById('no-mensaje').style.visibility = 'hidden';
    document.getElementById('mensaje-mostrar').style.visibility = 'visible';
    
}


function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}