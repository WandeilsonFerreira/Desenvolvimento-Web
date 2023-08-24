import cmath 
import math 

class nComplexos:
    def __init__(self):
     self.a = 0
     self.b = 0
     self.c = 0
    
    def soma(self):
      return (self.a)+(self.b)+(self.c)
    
    def subt(self):
      return (self.a)-(self.b)-(self.c)

    def mult(self):
      return (self.a)*(self.b)*(self.c)
    
    def divi(self):
      return (self.a)/(self.b)/(self.c)

#Primeira entrada
n1 = nComplexos()
n1.a = 5-2j
n1.b = -3+2j
n1.c = 8+5j
print("A parte real de " + str(n1.a) + "é: " + str(n1.a.real) + " e a imaginaria: " + str(n1.a.imag))
print("A parte real de " + str(n1.b) + "é: " + str(n1.b.real) + " e a imaginaria: " + str(n1.b.imag))
print("A parte real de " + str(n1.c) + "é: " + str(n1.c.real) + " e a imaginaria: " + str(n1.c.imag))
print("Resultado das operações basicas da primeira entrada: \nAdição: " + str(n1.soma()) + "\nSubtração: " + str(n1.subt()) + "\nMultiplicação: " + str(n1.mult()) + "\nDivisão: " + str(n1.divi()))
 


