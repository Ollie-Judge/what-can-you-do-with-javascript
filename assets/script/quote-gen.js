let newQuote = document.getElementById('newQuote');
let quoteBox = document.getElementById('quoteBox');

const quotes = ['“Be yourself; everyone else is already taken.”― Oscar Wilde', '“Be the change that you wish to see in the world.”― Mahatma Gandhi', '“Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi', '“Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring.” ― Marilyn Monroe', 'The journey of a thousand miles begins with one step. - Lao Tzu', 'Its not what happens to you, but how you react to it that matters. - Epictetus', 'Never interrupt your enemy when he is making a mistake. - Napoleon Bonaparte', 'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail. - Muriel Strode', 'Adopt the pace of nature: her secret is patience. - Ralph Waldo Emerson', 'Everything that irritates us about others can lead us to an understanding of ourselves. - Carl Jung', 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. - Marie Curie'];

newQuote.addEventListener('click', function() {
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    quoteBox.innerHTML = randomQuotes;
})