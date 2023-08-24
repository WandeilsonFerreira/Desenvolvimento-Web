# Softex – Atividade 03

### Faça um código que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

Não é necessário, mas, caso deseje tornar o sistema mais realista para que o tempo realmente passe em segundos, você pode usar a função time.sleep() que existe na Python (acesse o link em anexo). No entanto, é preciso adicionar uma biblioteca antes de executá-la. 


```
<python>
import time
def contagemExplosao(t):
  while t:
    mins, secs = divmod(t, 60) 
    timer = '{:02d}:{:02d}'.format(mins, secs) 
    print(timer, end="\r") 
    time.sleep(1) 
    t -= 1
  print('BUM!')

t = input('Informe a quantidade de segundos para explosão: ')
contagemExplosao(int(t))
</python>
<javaScript>
let input = require('prompt-sync')()
console.log('Informe a quantidade de segundos para explosão: ');
let tempoExplosao = input(); 
console.log("iniciando contagem regressiva!"); 
let interval = setInterval(() =>{
  console.log("Restam " + tempoExplosao + " segundos para a explosão!");
  tempoExplosao--;  
  if (tempoExplosao == 0){
    console.log("BUM!")
    clearInterval(interval);
  }
}, 1000);
console.clear();
</javaScript>
```
