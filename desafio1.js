class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    // Retorna el nombre completo del usuario

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    //Recibe el nombre de la mascota y lo agrega al array

    addMascota(nombre) {
        this.mascotas.push(nombre);
    }

    // Retorna la cantidad de mascotas que tiene el usuario

    countMascotas(){
        return this.mascotas.length;
    }

    // Recibe un string 'nombre' y un string 'autor' al array de libros

    addBook(nombre, autor){
        this.libros.push({nombre, autor})
    }

    // Retorna el array solo con los nombres de libros del usuario

    getBookNames(){
        let bookNames = [];
        this.libros.forEach(libro => {
            bookNames.push(libro.nombre);
        }) 
        return bookNames;
    }
}

// Usuario nuevo
let usuario = new Usuario('Lautaro', 'Ponzo', [], [])

// Agrego nombre de las mascotas

usuario.addMascota('Perro')
usuario.addMascota('Tortuga')

// Agrego nombre de los libros 

usuario.addBook('El señor de los anillos', 'J.R.R. Tolkien')
usuario.addBook('ficciones', 'J.R.R. Tolkien')

// muestro por consola 
console.log('El usuario es: ', usuario);
console.log('Cantidad de mascotas: ', usuario.countMascotas());
console.log('Nombre de libros: ', usuario.getBookNames());