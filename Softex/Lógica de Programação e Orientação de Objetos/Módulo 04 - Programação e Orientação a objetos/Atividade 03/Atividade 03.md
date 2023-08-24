# Softex: Módulo 04 - Atividade 03

### Crie uma classe e insira nela, no mínimo, dois atributos, os quais devem ter um método acessor (get) e um método modificador (set) para cada. Defina um objeto para cada atributo e elabore um construtor para criar alguma regra.

A atividade pode ser realizada em qualquer linguagem de programação ou apenas utilizando algoritmos.

 

```
<python> 
class Conta:
  def __init__(self, titular, saldo):
    self._titular = titular
    self._saldo = saldo
  
  def get_saldo(self):
    return print(self._saldo)

  def set_saldo(self, saldo):
    self._saldo += saldo

  def get_titular(self):
    return print(self._titular)

  def set_titular(self, titular):
      self._titular = titular
  
  def set_saque(self,valor):
    if valor < 0:
      print("Saldo não pode ser negativo...")
      return False
    else: 
      self._saldo -= valor
      return True

conta1 = Conta('Wandeilson', 200.0)
conta1.get_titular()
conta1.set_saldo(300.0)
conta1.set_saque(150.0)
conta1.get_saldo()

<python> 
```
