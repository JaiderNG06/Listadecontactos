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

console.log("Lista Original:");
console.log(listaDeContactos);

// Función para agregar un nuevo contacto a la lista
function agregarContactoNuevo(contacto) {
  // Normalizar el formato del teléfono (eliminar espacios y guiones)
  contacto.telefono = contacto.telefono.replace(/\s|-/g, '');
  listaDeContactos.push(contacto);
}

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

// Función para actualizar un contacto
function actualizarContacto(id, nuevoDatos) {
  const contactoIndex = listaDeContactos.findIndex(contacto => contacto.id === id);
  if (contactoIndex !== -1) {
    // Actualizar solo las propiedades proporcionadas en nuevoDatos
    listaDeContactos[contactoIndex] = { ...listaDeContactos[contactoIndex], ...nuevoDatos };
    console.log(`Contacto de ID ${id} actualizado.`);
  } else {
    console.log(`No se encontró un contacto con ID ${id}.`);
  }
}

// Agregar un nuevo contacto
agregarContactoNuevo(contactoNuevo);
console.log("Lista Actualizada después de agregar un nuevo contacto:");
console.log(listaDeContactos);

// Eliminar un contacto
eliminarContacto(2);
console.log("Lista Actualizada después de eliminar un contacto:");
console.log(listaDeContactos);

// Actualizar un contacto
actualizarContacto(4, { telefono: "3014050177", ubicaciones: { ciudad: "Bogotá", direccion: "Santa Isabel" } });
console.log("Lista Actualizada después de actualizar datos del contacto 4:");
console.log(listaDeContactos);




