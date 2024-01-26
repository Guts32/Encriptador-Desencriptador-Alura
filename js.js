//funcion para procesar el texto y seleccionar si se va a encriptar o descencriptar
function processText(operation) {

    //creando variable y agregando el valor del texto
    const inputText = document.getElementById('inputText').value;
    let outputText = '';

    // Verificar si hay letras mayúsculas o acentos en el texto
    if (hasUpperCaseOrAccent(inputText)) {
        alert('El texto no debe contener letras mayúsculas o acentos.');
        return;
    }

    //validacion para elegir si se eligio encriptar o no el mensaje
    if (operation === 'encrypt') {
        //llamando la funcion para encriptar y guardando el resultado recibido en la variable
        outputText = encryptText(inputText);
    } else if (operation === 'dencrypt') {
        //llamando la funcion para desencrptar y guardando el resultado recibido en la variable
        outputText = decryptText(inputText);
    }

    //agregando el valor del mensaje procesado al label
    document.getElementById('outputText').textContent = outputText;

    //ocultando imagen con el texto de no mensajes
    document.getElementById('no-mensaje').style.visibility = 'hidden';

    //mostrando el mensaje procesado
    document.getElementById('mensaje-mostrar').style.visibility = 'visible';
    
}

//funcion para encriptar
function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}
//funcion para descencriptar
function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

//funciona para copiar texto
function copyToClipboard() {
    const outputText = document.getElementById('outputText').textContent;

    // Crear un área de transferencia
    const clipboard = navigator.clipboard;

    // Intentar copiar al portapapeles
    clipboard.writeText(outputText)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('No se pudo copiar al portapapeles: ', err);
        });
}


function hasUpperCaseOrAccent(text) {
    // Verificar si hay letras mayúsculas
    if (/[A-Z]/.test(text)) {
        return true;
    }

    // Verificar si hay letras con acentos
    if (/[áéíóúü]/.test(text)) {
        return true;
    }

    return false;
}