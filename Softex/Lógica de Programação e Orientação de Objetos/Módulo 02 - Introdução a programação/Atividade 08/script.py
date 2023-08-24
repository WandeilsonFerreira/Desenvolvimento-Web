import pandas as pd
import numpy as np

df = pd.read_csv("notas_alunos.csv")
#Calculo da média 
df["Media"] = (df["Nota_1"] + df["Nota_2"])/2
#status
df['Situação'] = np.where((df['Media'] >= 7) & (df['Faltas'] < 5), 'Aprovado', 'Reprovado')
print(df.head())
print('\n')

alunos = df['alunos']
print(alunos)

numeroFaltas = df['Faltas'].max()
print("Maior número faltas: " +str(numeroFaltas))
mediaGeral = df['Media'].median()
print("Média geral das notas: " +str(mediaGeral))
maiorMedia = df['Media'].max()
print("Maior média: " + str(maiorMedia))
 
df.to_csv('alunos_situacao.csv')

