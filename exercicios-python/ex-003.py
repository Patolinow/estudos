def calcula_total_do_produto(valor, quantidade, moeda="real", desconto=0.0, acrescimo=0.0):
    if (desconto and acrescimo):
        print("Não pode haver acréscimo e desconto ao mesmo tempo!")
        return 0

    match moeda:
        case "real":
            valor_da_moeda = 1

        case "dolar":
            valor_da_moeda = 5

        case "euro":
            valor_da_moeda = 5.7

        case _:
            print("moeda não cadastrada!")
            return 0

    valor_total_bruto = valor * quantidade * valor_da_moeda

    if (desconto):
        valor_total = valor_total_bruto - (valor_total_bruto / 100 * desconto)
        print(f"o valor total deste produto com desconto é: R${valor_total}")
        return valor_total

    elif (acrescimo):
        valor_total = valor_total_bruto + (valor_total_bruto / 100 * acrescimo)
        print(f"o valor total deste produto com acrescimo é: R${valor_total}")
        return valor_total

    print(f"o valor total deste produto é: R${valor_total_bruto}")
    return valor_total_bruto


calcula_total_do_produto(100,5,"real",10)