def calcular_IMC(altura, peso):
    return  peso / (altura * altura)
    

altura = float(input("digite a sua altura em metros: "))
peso = float(input("digite seu peso em kilos: "))

imc = calcular_IMC(altura, peso)
print(f"seu IMC é de {imc}!")