export interface Quote {
  author: string
  quote: string
}

export const quotes: Quote[] = [
  {
    author: 'Pablo Picasso',
    quote: 'Computers are useless. They can only give you answers.',
  },
  {
    author: 'Donald Knuth',
    quote: 'An algorithm must be seen to be believed.',
  },
  {
    author: 'Alan Turing',
    quote:
      'We can only see a short distance ahead, but we can see plenty there that needs to be done.',
  },
  {
    author: 'Alan Kay',
    quote: 'Simple things should be simple; complex things should be possible.',
  },
  {
    author: 'Grace Hopper',
    quote:
      "The most damaging phrase in the language is 'We've always done it this way.'",
  },
  { author: 'Linus Torvalds', quote: 'Talk is cheap. Show me the code.' },
  {
    author: 'Martin Fowler',
    quote:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  },
  {
    author: 'Robert C. Martin',
    quote: 'The only way to go fast is to go well.',
  },
  {
    author: 'Dennis Ritchie',
    quote:
      'The only way to learn a new programming language is by writing programs in it.',
  },
  {
    author: 'James Gosling',
    quote: 'Java is to JavaScript what car is to carpet.',
  },
]

export function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return quotes[randomIndex]
}
