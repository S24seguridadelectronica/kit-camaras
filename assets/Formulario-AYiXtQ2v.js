import{r as a,j as e}from"./index-Bfx0ppQl.js";const N=({titulo:r,descripcion:s,precio:t})=>{const[l,n]=a.useState(""),[c,i]=a.useState(""),[d,u]=a.useState(""),[m,h]=a.useState(""),p=()=>{console.log("Formulario cerrado")},x=()=>{console.log("Compra confirmada")},j=()=>{console.log("Abrir WhatsApp")},f=()=>{console.log("Hacer llamada")};return e.jsx("div",{className:"formulario-overlay",children:e.jsxs("div",{className:"formulario-content",children:[e.jsx("button",{className:"cerrar-formulario",onClick:p,children:"×"}),e.jsxs("div",{className:"titulo-con-icono",children:[e.jsx("h2",{children:r})," ",e.jsx("p",{children:s})," ",e.jsxs("p",{children:["Precio: ",t]})," "]}),e.jsx("input",{type:"text",placeholder:"Nombre",value:l,onChange:o=>n(o.target.value),className:"formulario-input"}),e.jsx("input",{type:"text",placeholder:"Teléfono",value:c,onChange:o=>i(o.target.value),className:"formulario-input"}),e.jsx("input",{type:"text",placeholder:"Dirección",value:d,onChange:o=>u(o.target.value),className:"formulario-input"}),e.jsx("input",{type:"text",placeholder:"Ciudad y Barrio",value:m,onChange:o=>h(o.target.value),className:"formulario-input"}),e.jsx("button",{className:"confirmar",onClick:x,children:"Confirmar Compra"}),e.jsx("button",{className:"whatsapp-button",onClick:j,children:"WhatsApp"}),e.jsx("button",{className:"llamar-button",onClick:f,children:"Llamar"}),e.jsx("div",{className:"horarios-entrega",children:e.jsx("p",{children:"Horarios de entrega: Lunes a Viernes de 9:00 AM a 6:00 PM"})}),e.jsxs("footer",{className:"formulario-footer",children:[e.jsx("p",{children:"© 2025 S24seguridad-electronica - Todos los derechos reservados."}),e.jsx("p",{children:"Contacto: s24hseguridad@gmail.com | Teléfono: +57 3046615865"})]})]})})};export{N as default};
