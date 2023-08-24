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
