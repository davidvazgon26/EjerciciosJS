

const d = document;

export function shortCuts(e){
    console.log("el tipo: " , e.type);
    console.log("Tecla pausada: ",e.key);
    console.log("Codigo de tecla: ",e.keyCode);
    console.log("Ctrl: ", e.ctrlKey);
    console.log("Alt: ",e.altKey);
    console.log("Shift: ",e.shiftKey);
    console.log(e);

    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el shortcut alt + a")
    }
    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmacion con el shortcut alt + c")
    }
    if (e.key === "p" && e.altKey) {
        prompt ("Haz lanzado un aviso con el shortcut alt + p")
    }
    
}