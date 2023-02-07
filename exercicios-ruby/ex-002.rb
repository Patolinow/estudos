ADICIONAR_RECEITA = 1
IMPRIMIR_RECEITAS = 2
DELETAR_RECEITA = 3
SAIR = 4
receitas = []

def menu

  puts "\n     Escolha uma opção:"
  puts "[#{ADICIONAR_RECEITA}] Para Adicionar receita"
  puts "[#{IMPRIMIR_RECEITAS}] Para Imprimir receitas"
  puts "[#{DELETAR_RECEITA}] Para apagar uma receita"
  puts "[#{SAIR}] Para Sair"

end

menu()
opcao = gets.to_i

until opcao == SAIR do

  if opcao == ADICIONAR_RECEITA

    puts "\n- Digite o nome da receita que deseja adicionar:"
    nome = gets.chomp()
    puts "\n- Agora digite qual o tipo da receita:"
    tipo = gets.chomp()
    receitas << {nome: nome,tipo: tipo}
    puts "Receita #{nome} cadastrada com sucesso!"

  elsif opcao == IMPRIMIR_RECEITAS

    puts "===================== Catálogo de Receitas ====================="
    receitas.each do |receita|
      puts "#{receita[:nome]} - #{receita[:tipo]}"

    end

  elsif opcao == DELETAR_RECEITA

    puts "\n- Qual receita você deseja apagar?"
    deletar = gets.chomp()

    receitas.each do |receita|

      if receita[:nome] == deletar

        puts "\n Receita #{receita[:nome]} Apaga com sucesso!"
        receitas.delete(receita)

      end

    end
  end
  
  menu()
  opcao = gets.to_i
  
end

