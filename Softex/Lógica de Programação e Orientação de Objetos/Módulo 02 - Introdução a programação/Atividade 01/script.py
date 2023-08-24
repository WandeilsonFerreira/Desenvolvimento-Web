import os
nomeAluno = input('Digite o nome do aluno: ')
notaUm = float(input('Digite a primeira nota: '))
notaDois = float(input('Digite a segunda nota: '))
quantidadeFaltas = int(input('Digite o numero de faltas: '))
calcMedia = (notaUm + notaDois) / 2
media = 'Reprovado' if (calcMedia < 7) else 'Aprovado'
#media = (calcMedia < 7) if "Reprovado" else "Aprovado"
faltas = 'Reprovado' if quantidadeFaltas > 3 else 'Aprovado'
#faltas = quantidadeFaltas > 3 if 'Reprovado' else 'Aprovado'
#status = ((media == 'Aprovado') & (faltas == 'Aprovado')) if 'Aprovado' else 'Reprovado'
status = 'Aprovado' if ((media == 'Aprovado') & (faltas == 'Aprovado')) else 'Reprovado'
os.system('clear')
print("O aluno " + nomeAluno + " está " + status )