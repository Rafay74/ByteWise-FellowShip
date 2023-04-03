// Variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.qoute')
let person = document.querySelector('.person')
console.log(btn);
console.log(quote);
console.log(person);

const quotes = [
    {
        quote: `You are the shuckiest shuck faced shuck in the world!`,
        person: `James Dashner, The Maze Runner`
    },

    {
        quote: `Insane means fewer cameras!`,
        person: `Ally Carter, Only the Good Spy Young`
    },

    {
        quote: `I'm about as intimidating as a butterfly.`,
        person: `Dan Howell`
    },

    {
        quote: `Some quotations," said Zellaby, "are greatly improved by lack of context.`,
        person: `John Wyndham, The Midwich Cuckoos`
    },

    {
        quote: `All of my best friends are dead people. Someday I've got to figure out how that happened.`,
        person: `Claudia Gray, Afterlife`
    },
]

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
