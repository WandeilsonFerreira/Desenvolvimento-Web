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
