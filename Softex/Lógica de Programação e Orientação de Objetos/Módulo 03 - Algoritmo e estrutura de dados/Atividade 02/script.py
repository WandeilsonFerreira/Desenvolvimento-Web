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
