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
