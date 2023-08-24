# Softex – Atividade 08

### Desenvolva um programa que deve ler um arquivo csv intitulado “notas_alunos.csv”. O arquivo deve ter a seguinte estrutura:
aluno: Nome do aluno;
nota_1: Primeira nota;
nota_2: Segunda nota;
faltas: Número de faltas;

O programa lerá esse arquivo e criará duas colunas. A primeira coluna será “media”, que terá a média das duas notas do aluno. A segunda será “situacao”, com os valores: APROVADO ou REPROVADO.

O aluno que tiver mais de 5 faltas ou possuir média menor que sete, será reprovado. O programa deverá salvar esse novo dataframe com o nome “alunos_situacao.csv”.

Por fim, o programa deverá mostrar na tela:
- o maior número de faltas;
- a média geral das notas dos alunos;
- e a maior média.

Veja em anexo um exemplo do arquivo “notas_alunos.csv”.

```
<python> 
import pandas as pd
import numpy as np

df = pd.read_csv("notas_alunos.csv")
#Calculo da média 
df["Media"] = (df["Nota_1"] + df["Nota_2"])/2
#status
df['Situação'] = np.where((df['Media'] >= 7) & (df['Faltas'] < 5), 'Aprovado', 'Reprovado')
print(df.head())

numeroFaltas = df['Faltas'].max()
print("Maior número faltas: " +str(numeroFaltas))
mediaGeral = df['Media'].median()
print("Média geral das notas: " +str(mediaGeral))
maiorMedia = df['Media'].max()
print("Maior média: " + str(maiorMedia))

df.to_csv('alunos_situacao.csv')
</python> 
```
