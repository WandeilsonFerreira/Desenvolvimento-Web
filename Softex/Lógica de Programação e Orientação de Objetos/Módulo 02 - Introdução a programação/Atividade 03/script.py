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