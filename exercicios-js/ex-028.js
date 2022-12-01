/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/
let bookCounter = 0
let itemCounter = 0
let booksEachCategory = []
let authors = []

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

function categoryCounter() {

  booksByCategory.forEach((item) => {
    bookCounter = 0

    item.books.forEach((book) => {
      bookCounter++
    })

    booksEachCategory.push(bookCounter)
    itemCounter++
  })

  return `Há ${itemCounter} categorias, elas possuem respectivamente ${booksEachCategory} livros cada.`

}

itemCounter = 0

function authorCounter() {
  booksByCategory.forEach(item => {

    item.books.forEach(book => {
      authors.push(book.author)
    });
  })

  authors.sort((a, b) => a > b ? 1 : -1)
  for (let i = 0; i < authors.length; i++) {
    if (authors[i] == authors[i + 1]) {
      authors.splice(i + 1, 1)
    }
  }

  return `No total há ${authors.length} Autores diferentes, contando todas as categorias`
}

console.log(categoryCounter())

console.log(authorCounter())