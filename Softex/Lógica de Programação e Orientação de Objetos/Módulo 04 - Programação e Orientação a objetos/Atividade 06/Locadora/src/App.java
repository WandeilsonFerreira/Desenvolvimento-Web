import java.io.*;
import Contas.Conta;

public class App {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Conta minhaConta = new Conta();
        minhaConta.titular = "Wandeilson";
        minhaConta.saldo = 1000.0;
        minhaConta.saca(200);
        minhaConta.deposita(870);

        // Criando o arquivo conta e salvando as informaçõs
        ObjectOutputStream objectOutput = new ObjectOutputStream(new FileOutputStream("conta.bytej"));
        objectOutput.writeObject(minhaConta);
        objectOutput.close();

        // Abrindo o arquivo conta e lendo as informaçõs
        ObjectInputStream objectInput = new ObjectInputStream(new FileInputStream("conta.bytej"));
        Conta conta = (Conta) objectInput.readObject();
        System.out.println("Nome do titular: " + conta.titular);
        System.out.println("Saldo do titular: " + conta.saldo);
        objectInput.close();
    }
}
