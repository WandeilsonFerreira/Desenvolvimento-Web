from cmath import nan
import os
import datetime
import math
# x = datetime.datetime.now()
#print(x.year - 2000)
 
nomeCompleto = input("Digite seu  nome completo: ")
anoNascimento = float(input("Digite sua data de nascimento entre 1922 e 2021: "))
x = datetime.datetime.now()
#while(anoNascimento != " " | anoNascimento > 1922 | anoNascimento < 2021 ):
try:
  if (anoNascimento == " "): raise Exception("Vazio")
  elif (anoNascimento == "nan"): raise Exception("O ano informado não é um número")
except Exception as err:
  print(err)
 