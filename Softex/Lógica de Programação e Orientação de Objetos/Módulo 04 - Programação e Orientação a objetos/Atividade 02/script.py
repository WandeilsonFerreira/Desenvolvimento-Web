class Conta:
    def __init__(self, numero, titular, saldo, limite):
        self.numero = numero
        self.titular = titular
        self.saldo = saldo 
        self.limite = limite

    def deposita(self, valor):
        self.saldo += valor

    def saca(self, valor):
        self.salfo -= valor 

    def extrato(self):
        print("numero: {}\nsaldo: {}".format(self.numero, self.saldo))

usuario1 = Conta('123-4', 'Maria', 250.0, 1000.0)
usuario2 = Conta('235-7','José', 500.0, 1000.0)
usuario3 = Conta('287-1','João', 200.0, 1000.0)

usuario1.extrato()
usuario2.extrato()
usuario3.extrato()
