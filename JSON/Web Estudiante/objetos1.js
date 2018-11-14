
let personaAndres = new Persona(null, "Andrés", 37, "casado");

personaAndres.setColorPelo("Moreno");

let jPersonaAndres = personaAndres.toJSONObject();

console.log(jPersonaAndres);

let person2 = new Persona(jPersonaAndres);

console.log(person2.getInfo());
