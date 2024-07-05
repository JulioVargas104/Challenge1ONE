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
    actualizarEstadoBoton();
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
    actualizarEstadoBoton();

}

function copiarResultado() {
    let outputText = document.getElementById("outputText").value;
    navigator.clipboard.writeText(outputText).then(function () {
        alert("El texto ha sido correctamente copiado al portapapeles.");
    });
}

function actualizarEstadoBoton() {
    if (outputText.value.trim() !== "") {
        coppyButton.removeAttribute("disabled");
    }
}