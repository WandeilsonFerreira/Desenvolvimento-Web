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
