class Usuario {
    #senha; 
  
    constructor(senha) {
      this.setSenha(senha);
    }

    getSenha() {
      return this.#senha;
    }

    setSenha(senha) {
      if (senha.length > 6) {
        this.#senha = senha;
      } else {
        console.log('A senha deve ter mais de 6 caracteres!');
      }
    }
  }
  let usuario = new Usuario("minhaSenha123");
  console.log(usuario.getSenha());
  
  usuario.setSenha("123");
  console.log(usuario.getSenha());  