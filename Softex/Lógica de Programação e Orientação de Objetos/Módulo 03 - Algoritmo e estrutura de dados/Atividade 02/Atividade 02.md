# Softex – Atividade 01

### Faça um algoritmo de ordenação utilizando o método insertion sort.
Crie um método que execute as seguintes operações:

- Tamanho do vetor: 30;
- Utilize números ímpares;
- Opere em ordem crescente.

```
<python> 
import random
def geradorLista(nElementos):   
    listaRandomica = random.sample(range(1,100),nElementos)    
    return listaRandomica

def insertionSort(lista):
    n = len(lista)
    i = 0
    for i in range(i, n):
        chave = lista[i]
        j = i - 1
        while j >= 0 and lista[j] > chave:
            lista[j + 1] = lista [j]
            j = j - 1
            lista[j + 1] = chave

x = geradorLista(30) 
print("Vetor original: " ,x)
insertionSort(x)
print("Vetor ordenado: " ,x)
</python>

python3 script.py 
Vetor original:  [74, 47, 60, 79, 38, 73, 29, 45, 13, 69, 30, 49, 57, 35, 75, 85, 61, 50, 8, 40, 21, 96, 62, 37, 5, 4, 94, 93, 1, 20]
Vetor ordenado:  [1, 4, 5, 8, 13, 20, 21, 29, 30, 35, 37, 38, 40, 45, 47, 49, 50, 57, 60, 61, 62, 69, 73, 74, 75, 79, 85, 93, 94, 96]
```
