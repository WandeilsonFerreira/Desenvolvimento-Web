# Softex: Softex: Módulo 04 - Atividade 07


### Crie uma situação em que ocorra uma exceção dentro de um código. Utilize try/catch para realizar a captura e tratamento dessa exceção. 
 
Conteudo de apoio: https://www.devmedia.com.br/trabalhando-com-excecoes-em-java/27601
 

```
Main: 

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExemploDivisao {

  public static int divisao(int numerador, int denominador) throws ArithmeticException {
    return numerador / denominador;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    boolean continua = true;

    do {
      try {
        System.out.print("Numerador: ");
        int numerador = sc.nextInt();

        System.out.print("Denominador: ");
        int denominador = sc.nextInt();

        int resultado = divisao(numerador, denominador);
        System.out.println("Resultado: " + resultado);

        continua = false;

      } catch (InputMismatchException erro1) {
        System.err.println("Não é permitido inserir letras, informe apenas números inteiros!");
        sc.nextLine(); // descarta a entrada errada do usuário
      } catch (ArithmeticException erro2) {
        System.err.println("O número do divisor deve ser diferente de 0!");
      } finally {
        System.out.println("Execução da sequencia Finally!");
      }
    } while (continua);
  }
} 
```
