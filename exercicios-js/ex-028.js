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

// Conta o número de categorias e o número de livro de cada

function categoryCounter() {
  let booksEachCategory = []

  booksByCategory.forEach((item) => {
    bookCounter = 0

    item.books.forEach((book) => {
      bookCounter++
    })

    booksEachCategory.push(bookCounter)
    itemCounter++
  })

  return `Há ${itemCounter} categorias, elas possuem respectivamente ${booksEachCategory.join(", ")} livros cada.`

}

itemCounter = 0

//  Conta o número de autores

function authorCounter() {
  let authors = []

  booksByCategory.forEach(item => {

    item.books.forEach(book => {
      if (authors.indexOf(book.author) === -1){
        authors.push(book.author)
      }
    });
  })

  return `No total há ${authors.length} Autores diferentes, contando todas as categorias`
}

// Mostra os livros de um autor

function booksFinder(name) {
  let booksFound = []

  booksByCategory.forEach(item => {
    item.books.forEach(book => {
      if (book.author == name) {

        booksFound.push(book.title)
      }
    })
  })

  return `Foram encontrados ${booksFound.length} livros desse autor: ${booksFound.join(", ")}`
}

console.log(categoryCounter())

console.log(authorCounter())

console.log(booksFinder("Augusto Cury"))