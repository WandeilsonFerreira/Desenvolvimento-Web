# Softex – Atividade 01

### Construa um algoritmo de ordenação, utilizando o método bubble sort estudado. (Lembre-se que se trata de uma série de instruções que devem ser seguidas passo a passo).

Para isso, você deve criar um método em que o tamanho do vetor seja dez e deve estar em ordem crescente.

O vetor deverá:

- comparar seus elementos dois a dois adjacentes;
- se os elementos não estiverem em ordem, então ordenar;
- senão, avançar para o próximo par;
- repetir a operação até que nenhuma troca possa ser feita no vetor inteiro.

```
<python>
import random
def geradorLista(nElementos):
    # listaRandomica = []
    listaRandomica = random.sample(range(1,100),nElementos)
    return listaRandomica

def bubbleSort(lista):
    for passnum in range(len(lista)-1,0,-1):
        for i in range(passnum):
            if lista[i]>lista[i+1]:
                temp = lista[i]
                lista[i] = lista[i+1]
                lista[i+1] = temp

x = geradorLista(10)
print("Vetor original: " ,x)
bubbleSort(x)
print("Vetor ordenado: " ,x)

</python>
```
