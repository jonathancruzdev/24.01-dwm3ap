class Persona {
    // Atributos
    name = '';
    email = '';
    edad = 0;
    skills = [];
    constructor(name, email, edad, skills){
        this.name = name;
        this.email = email;
        this.edad = edad;
        this.skills = skills
    }

    saludar(){
        console.log(`Hola soy ${this.name}`);
    }
}

const p1 = new Persona('Lucas', 'lucas@mail.com', 26, ['PHP']);
const p2 = new Persona('Mariela', 'mariela@mail.com', 36, []);

p1.saludar();
p2.saludar();