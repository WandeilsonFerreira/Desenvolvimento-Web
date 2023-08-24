import os
categoria = " "

numeroRodas = int(input('Informe a quantidade de rodas do veículo: '))

pesoBruto = int(input('Informe o peso bruto do veículo em quilogramas: '))

quantidadePessoas = int(input('Informe a quantidade de pessoas no veículo: ')) 

if(numeroRodas <= 3):
 categoria = "A"
elif ((numeroRodas == 4) & (quantidadePessoas <= 8) & (pesoBruto <= 3500)):
 categoria = "B"
elif ((numeroRodas >= 4) & (pesoBruto > 3500 & pesoBruto <6000)):
 categoria = "C"
elif ((numeroRodas >= 4) & (quantidadePessoas > 8)):
 categoria = "D"
elif ((numeroRodas >= 4) & (pesoBruto > 6000)):
 categoria = "E"
else:
 categoria = "Categoria invalida!";

os.system('clear')
print("A melhor categoria de habilitação para o veículo informado é " + categoria + "!")