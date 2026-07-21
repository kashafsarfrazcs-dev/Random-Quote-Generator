import { FaQuoteLeft, FaCopy } from "react-icons/fa";


function QuoteCard({quote, author}){


function copyQuote(){

    const text = `"${quote}" — ${author}`;

    navigator.clipboard.writeText(text);

    alert("Quote copied!");

}


return(

<div className="quote-card">


    <FaQuoteLeft className="quote-icon"/>


    <p className="quote-text">
        {quote}
    </p>


    <h3 className="author">
        — {author}
    </h3>



    <button 
    className="copy-btn"
    onClick={copyQuote}
    >

    <FaCopy/>
    Copy Quote

    </button>



</div>

)


}


export default QuoteCard;