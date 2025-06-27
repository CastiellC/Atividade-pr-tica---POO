class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
    }
  }

  class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
      super(nome, salario);
      this.departamento = departamento;
    }
  
    relatorioGerencial() {
      console.log(`Gerente: ${this.nome}`);
      console.log(`Departamento: ${this.departamento}`);
      console.log(`Salário: R$ ${this.salario}`);
    }
  }

  const gerente1 = new Gerente('João', 5000, 'Vendas');
  gerente1.relatorioGerencial();