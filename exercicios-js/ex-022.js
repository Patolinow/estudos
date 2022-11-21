//link de acesso: https://sandbox.letscode.com.br/exercicio/85b97dd5-9154-4b93-b1a8-9c0cfb9d1fbe

export const solution = (posts) => {
    let allin = posts.join("").toLowerCase()
    let hashtags = []
    let splited = []
    let trash = []
    let joined = []
    let c = 0, i
    let k = -1
    let firstSort = []
    let final = []
    let finalOrganizado = []


    // separa a hashtag em pedaços diferentes
    for (i = 0; i < allin.length; i++) {
        hashtags = allin.split("#")
        hashtags.splice()
    }

    // retira a primeria array pq n é uma hashtag
    hashtags.splice(0, 1)

    // separa tds os elementos e coloca a "#" q foi perdida no split inicial
    while (c < hashtags.length) {
        splited[c] = ("#" + hashtags[c]).split("")
        c++
    }

    //limpa td oq n faz parte da hashtag mas sobrou
    splited.forEach((charsets, index, arr) => {
        for (c = 0; c < charsets.length; c++) {
            if (arr[index][c] === " " || arr[index][c] === "\n") {
                trash[c] = charsets.splice(c, 1000)
            }
        }
        //junta td de volta
        joined.push(arr[index].join(""));
    })

    // organiza pra reutilizar o joined
    firstSort = joined.sort()
    joined = []

    // contar qts de cada hashtag tem na array e coloca na nova array, ja organizada
    for (i = 0; i < firstSort.length; i++) {
        let counter = 0
        for (c = 0; c < firstSort.length; c++) {
            if (firstSort[i] === firstSort[c]) {
                counter += 1
            }
        }
        if (i % 1 === 0) {
            k++
            joined[k] = []
        }
        joined[k].push(firstSort[i])
        joined[k].push(counter)
    }

    trash = []

    //remover hashtags repetidas
    joined.forEach((pair, index, arr) => {
        if (!trash.includes(firstSort[index])) {
            trash.push(firstSort[index])
            final.push(pair)
        }
    })

    //ordenação final
    finalOrganizado = final.sort((a, b) => {
        return b[1] - a[1]
    })

    return finalOrganizado
}