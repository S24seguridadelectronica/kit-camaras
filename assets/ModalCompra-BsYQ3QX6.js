import{r as v,j as a}from"./index-Bfx0ppQl.js";const C=({onClose:l,onConfirm:s,nombre:t,setNombre:o,telefono:n,setTelefono:r,direccion:c,setDireccion:i,ciudadYBarrio:d,setCiudadYBarrio:m,abrirWhatsApp:p,hacerLlamada:u,horariosEntrega:x,tituloModal:h,descripcionModal:j})=>(v.useEffect(()=>(document.body.classList.add("modal-open"),()=>{document.body.classList.remove("modal-open")}),[]),a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal-content",children:[a.jsx("button",{className:"cerrar-modal",onClick:l,children:"×"}),a.jsxs("div",{className:"titulo-con-icono",children:[a.jsx("h2",{children:h}),a.jsx("p",{children:j})," "]}),a.jsx("input",{type:"text",placeholder:"Nombre",value:t,onChange:e=>o(e.target.value),className:"modal-input"}),a.jsx("input",{type:"text",placeholder:"Teléfono",value:n,onChange:e=>r(e.target.value),className:"modal-input"}),a.jsx("input",{type:"text",placeholder:"Dirección",value:c,onChange:e=>i(e.target.value),className:"modal-input"}),a.jsx("input",{type:"text",placeholder:"Ciudad y Barrio",value:d,onChange:e=>m(e.target.value),className:"modal-input"}),a.jsx("div",{className:"modal-botones",children:a.jsx("button",{className:"confirmar",onClick:s,children:"Confirmar Compra"})}),a.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"10px"},children:[a.jsx("button",{className:"whatsapp-button",onClick:p,children:"WhatsApp"}),a.jsx("button",{className:"llamar-button",onClick:u,children:"Llamar"})]}),a.jsx("div",{className:"horarios-entrega",children:a.jsx("p",{children:x})})]})}));export{C as default};
