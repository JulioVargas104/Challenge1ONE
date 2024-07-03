function Encriptar() {
    let inputText = document.getElementById("inputText").value;
    if (/[^a-z\s]/.test(inputText)) {
        alert("Ha ingresado carácteres prohibidos.");
        return;
    }
    let outputText = inputText.replace(/e/g, "enter")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/o/g, "ober")
                              .replace(/u/g, "ufat");
    document.getElementById("outputText").value = outputText;
    addToHistory(inputText, outputText);
}

function Desencriptar() {
    let inputText = document.getElementById("inputText").value;
    if (/[^a-z\s]/.test(inputText)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }
    let outputText = inputText.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");
    document.getElementById("outputText").value = outputText;
    addToHistory(inputText, outputText);
}

function copiarResultado() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("El texto ha sido correctamente copiado al portapapeles.");
}