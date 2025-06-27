class Animal {
    emitirSom() {
      throw new Error('O método emitirSom() precisa ser implementado!');
    }
  }
  
  class Cachorro extends Animal {
    emitirSom() {
      console.log('O cachorro late: Au Au!');
    }
  }
  
  class Gato extends Animal {
    emitirSom() {
      console.log('O gato mia: Miau!');
    }
  }
  
  class Pato extends Animal {
    emitirSom() {
      console.log('O pato grasna: Quá Quá!');
    }
  }
  
  function fazerEmitirSom(animal) {
    animal.emitirSom();
  }
  
  let cachorro = new Cachorro();
  let gato = new Gato();
  let pato = new Pato();
  
  fazerEmitirSom(cachorro);
  fazerEmitirSom(gato);
  fazerEmitirSom(pato);
  