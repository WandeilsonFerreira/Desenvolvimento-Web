# Softex: Softex: Módulo 04 - Atividade 06

### Crie um exemplo de como funcionam a serialização e a desserialização de um sistema qualquer. Utilize as classes, os objetos e métodos padrões da Java e insira um endereço físico fictício.
 
Conteudo de apoio para Serialização: https://www.youtube.com/watch?v=ruFhN953Rkk

```
Classe Conta: 
package Contas;
import java.io.Serial;
import java.io.Serializable;

public class Conta implements Serializable {
  public int numero;
  public String titular;
  public Double saldo;

  public Conta(){}

  public Conta(int numero, String titular, Double saldo){
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
  }
  public boolean saca(double valor) {
    if (this.saldo < valor){
       return false;
    } else{
    this.saldo = this.saldo - valor;
    return true;
    }
  }
  public void deposita(double quantidade) {
    this.saldo += quantidade;
    }
}

Main: 
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

```
