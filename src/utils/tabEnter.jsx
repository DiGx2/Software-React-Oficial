//La Funcion reemplaza el focus por defecto de TAB a ENTER en un formulario y envia el formulario cuando se encuentra en el ultimo imput (debera poner esta funcion en todos los inputs de su form con onKeyDoew en React)//

  export const tabEnter= (e)=>{
    if(e.key === "Enter"){
      e.preventDefault();
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      if (index < form.elements.length - 1) {
        form.elements[index + 1].focus();
        } else {
        form.submit();
      }  
    }
  };