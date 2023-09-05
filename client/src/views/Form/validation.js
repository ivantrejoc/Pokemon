

const validation = (input) =>{
let errors = {};

if(input.name ===""){
    errors.name = "Ingresa el nombre de tu Pokemon"
}
if(! /^[^\d\s]+$/.test(input.name)){
    errors.name = "El nombre de tu Pokemon solo puede tener letras"
}
if(input.name.length > 20){
    errors.name = "El nombre de tu Pokemon es muy largo"
}

if(input.sprites ===""){
    errors.sprites = "Ingresa la url de la imagen de tu Pokemon"
}
if(! /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(input.sprites)){
    errors.sprites = "Ingresa una URL válida"
}

if(input.life ===""){
    errors.life = "Ingresa un número"
}
if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.life)){
    errors.life = "Ingresa un valor entre 0 y 100"
}

if(input.attack ===""){
    errors.attack = "Ingresa un número"
}
if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.attack)){
    errors.attack = "Ingresa un valor entre 0 y 100"
}

if(input.defense === ""){
    errors.defense = "Ingresa un número"
}
if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.defense)){
    errors.defense = "Ingresa un valor entre 0 y 100"
}

if(input.speed === ""){
    errors.speed = "Ingresa un valor entre 0 y 100"
}
if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.speed)){
    errors.speed = "Ingresa un valor entre 0 y 100"
}

if(input.height ===""){
    errors.height = "Ingresa un número"
}
if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.height)){
    errors.height = "Ingresa un valor entre 0 y 100"
}

if(input.weight === ""){
    errors.weight = "Ingresa un número"
}
if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.weight)){
    errors.weight = "Ingresa un valor entre 0 y 100"
}
return errors;

}   


export default(validation)