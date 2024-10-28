//Try to create a json object variable for a book

let book = {
    title: "Dead cells",
    description: "survive the infested kingdom, or become one with it",
    author: "me",
    numPages: 3,

}

console.log(book.title);
console.log(book.description)
console.log(book.author)
console.log(book.numPages)

book.description = "Evil Monkey"
console.log(book.description)

let books = [
    {
        title: "The night of day",
        description: "a forbidden love between the times",
        author: "Austin Cloud",
        numPages: "196"
    },
    {
        title: "1000 Miles Apart",
        description: "Two lovers far apart",
        author: "me",
        numPages: "209"
    },
    {
        title: "The jujutsu king",
        description: "a fight between two sorcerers spread across 1000 years",
        author: "me",
        numPages: "300"
    },
    {
        title: "Monkey",
        description: "Monkey want bananas",
        author: "Monkey",
        numPages: "6"
    },
    {
        title: "Lol`s",
        description: "Laugh out loud",
        author: "Monkey",
        numPages: "467234"
    }
]

console.log(books)