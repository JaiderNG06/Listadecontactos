let listaDeContactos = [
  {
    id: 1,
    nombres: "Ana",
    apellidos: "del Castillo",
    telefono: "321-456-7890",
    ubicaciones: {
      ciudad: "Valledupar",
      direccion: "Barrio la caga"
    }
  },
  {
    id: 2,
    nombres: "Tyrone",
    apellidos: "Gonzales",
    telefono: "320-654-3210",
    ubicaciones: {
      ciudad: "Caracas",
      direccion: "la candelaria"
    }
  },
  {
    id: 3,
    nombres: "Cristiano",
    apellidos: "Dos santos aveiro",
    telefono: "300-123-3333",
    ubicaciones: {
      ciudad: "Funchal ",
      direccion: "Madeira"
    }
  }
];

const contactoNuevo = {
  id: 4,
  nombres: "Jaider",
  apellidos: "Navarro",
  telefono: "301-521-0177",
  ubicaciones: {
    ciudad: "Cartagena",
    direccion: "Olaya Herrera"
  }
};

console.log(listaDeContactos);

// Función para agregar un nuevo contacto a la lista
function agregarContactoNuevo(contacto) {
  listaDeContactos.push(contacto);
}

agregarContactoNuevo(contactoNuevo);
console.log("Lista Actualizada después de agregar un nuevo contacto:");
console.log(listaDeContactos);

// Función para eliminar un contacto 
function eliminarContacto(id) {
  const indice = listaDeContactos.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    listaDeContactos.splice(indice, 1);
    console.log(`Contacto de ID ${id} eliminado.`);
  } else {
    console.log(`No se encontró un contacto con ID ${id}.`);
  }
}

eliminarContacto(2); 
console.log("Lista Actualizada después de eliminar un contacto:");
console.log(listaDeContactos);

