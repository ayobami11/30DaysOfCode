let quotes = document.getElementById('quotes');
let author = document.querySelector('.author');

setInterval(displayQuote, 30000);

function displayQuote()  {
    let randomQuotes = Math.floor(Math.random() * 10);
    
    switch (randomQuotes) {
    case 0:
        quotes.innerHTML = '&#8220 The only way to learn a programming language is by writing programs in it. &#8221';
        author.innerHTML = '- Dennis Ritchi';
    break;

    case 1: 
    quotes.innerHTML = '&#8220 We think we are creating the system for our own purposes. We believe we are making it in our own image... But the computer is not really like us. It is a projection of a very slim part of ourselves: that portion devoted to logic, order, rule and charity. &#8221';
    author.innerHTML = '- Ellen Ullman, <cite>Close to the Machine: Technophilia and its Discontents</cite>';
    break;

    case 2:
        quotes.innerHTML = '&#8220 Learning to write programs streches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains. &#8221';
        author.innerHTML = '- Bill Gates, Co-founder, Microsoft';
        break;

    case 3:
        quotes.innerHTML = "&#8220 It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free. &#8221";
        author.innerHTML = '- Steve McConnell';
        break;

    case 4:
        quotes.innerHTML = '&#8220 Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to build bigger and better idiots. So far, the universe is winning. &#8221';
        author.innerHTML = '- Rick Cook';
        break;

    case 5:
        quotes.innerHTML = '&#8220 Programs must be written for people to read, and only incidentally for machines to understand. &#8221';
        author.innerHTML = '- Harold Abelson, <cite>Structure and Interpretation of Computer Programs<cite>';
        break;

    case 6:
        quotes.innerHTML = '&#8220 First, solve the problem. Then, write the code. &#8221';
        author.innerHTML = '- John Johson';
        break;

    case 7:
        quotes.innerHTML = '&#8220 The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability. &#8221';
        author.innerHTML = '- Randall E. Stross';
        break;

    case 8:
        quotes.innerHTML = '&#8220 Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. &#8221';
        author.innerHTML = '- Brian W. Kernighan';
        break;
        
    case 9:
        quotes.innerHTML = '&#8220 Any fool can write code that a computer can understand. Good programmers write code that humans can understand. &#8221';
        author.innerHTML = '- Martin Fowler';
        break;

    default:
        quotes.innerHTML = '&#8220 Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. &#8221';
        author.innerHTML = '- Linus Torvalds';
        break;
    }
}