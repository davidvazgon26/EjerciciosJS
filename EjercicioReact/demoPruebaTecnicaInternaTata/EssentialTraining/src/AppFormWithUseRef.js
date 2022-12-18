import {useRef} from "react"

function AppFormWithUseRef() {

  const txtTitle = useRef();
  const hexColor = useRef();

  // console.log(txtTitle);
  // console.log(hexColor);
  
  const submit = (e) =>{
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

   return (
    <>
      <h1>Ejemplo de useRef para formulario</h1>
      <form onSubmit={submit}>
        <input
          ref={txtTitle}
          type="text"
          placeholder="color title..."
        />
          
        <input ref={hexColor} type="color"/>
        <button>ADD</button>
      </form>
    </>
   
  );
}

// librrias para formularios
/*
formik.org
react-hook-form.com
usehooks.com


*/

export default AppFormWithUseRef;
