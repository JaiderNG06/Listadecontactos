const contactos = [
    "Jaider navarro",
    "Antonella lara",
    "Benito martinez"
];


function agregarContacto(nombreCompleto, listaContactos) {
    listaContactos.push(nombreCompleto);
}


function borrarContacto(nombreCompleto, listaContactos) {
    const indice = listaContactos.indexOf(nombreCompleto);
    if (indice !== -1) {
        listaContactos.splice(indice, 1);
    }
}


function imprimirContactos(listaContactos) {
    listaContactos.forEach(contacto => {
        console.log(contacto);
    });
}

console.log("Lista de contactos inicial:");
imprimirContactos(contactos);

agregarContacto("Jaiderlin Navarro", contactos);
console.log("\nLista de contactos después de agregar un contacto:");
imprimirContactos(contactos);

borrarContacto("Benito martinez", contactos);
console.log("\nLista de contactos después de borrar un contacto:");
imprimirContactos(contactos);