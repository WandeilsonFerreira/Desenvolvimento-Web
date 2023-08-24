# Softex: Softex: Módulo 04 - Atividade 04

### Crie dois pacotes baseados nas atribuições de uma empresa e inclua classes neles. Lembre-se de trabalhar com os padrões Java.

Instalação do jdk - ubuntu: https://www.edivaldobrito.com.br/como-instalar-o-oracle-java-jdk-18-no-ubuntu-22-04-e-20-04/
Pacote de extensões java vscode: Extension Pack for Java
Tutorial de como utilizar no vscode (Windows e linux): https://www.alura.com.br/artigos/desenvolvendo-aplicacoes-java-vs-code

```
Empresa => Clientes =>  cliente.java
package Clientes;

public class Cliente {
  public int inscricao;
  public String nome;
  public String cpf;
}

Empresa => Funcionarios =>  funcionario.java
package Funcionarios;

public class Funcionario {
  public int matricula;
  public String nome;
  public String cpf;
  public String funcao;
}

App.java

import Clientes.Cliente;
import Funcionarios.Funcionario;

public class App {
    public static void main(String[] args) throws Exception {
        Cliente cliente01 = new Cliente();
        cliente01.inscricao = 123;
        cliente01.nome = "Manoel";
        cliente01.cpf = "025.569.888-98";

        Funcionario funcionario01 = new Funcionario();

        funcionario01.matricula = 123;
        funcionario01.nome = "Carlos";
        funcionario01.cpf = "256.368.665-87";
        funcionario01.funcao = "Motorista";

    }
}
```
