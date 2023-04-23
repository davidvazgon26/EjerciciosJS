

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

let x = 0;
let y = 0;

export function moveBall(e, ball, stage){
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);

  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();

//   console.log(e.keyCode);
//   console.log(e.key);

  //Se puede hacer con key o keyCode el switch
  switch (e.keyCode) {
    case 37: //Izquierda
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38: //Arriba
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39: //Derecha
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40: //Abajo
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;

    default:
      break;
  }

  $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;

}