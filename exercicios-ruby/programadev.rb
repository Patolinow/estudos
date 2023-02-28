resultado = []
numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

numeros.each do |n|
    if (n % 3 == 0  )
        if n % 2 != 0
            resultado << n
        end
    end 
end

puts resultado