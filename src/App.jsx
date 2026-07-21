import { useEffect, useState } from "react";
import "./App.css";

import { getRandomQuote } from "./api/quoteApi";

import QuoteCard from "./components/QuoteCard";
import Button from "./components/Button";


function App(){


const [quote,setQuote] = useState(null);

const [loading,setLoading] = useState(false);

const [error,setError] = useState("");



async function fetchQuote(){

try{

setLoading(true);
setError("");

const data = await getRandomQuote();

setQuote(data);


}

catch(error){

setError("Unable to load quote");

}

finally{

setLoading(false);

}

}



useEffect(()=>{

fetchQuote();

},[]);



return(

<div className="app">


<div className="container">


<h1>
💬 Random Quote Generator
</h1>



{
loading && 
<p className="loading">
Loading...
</p>
}



{
error &&
<p className="error">
{error}
</p>
}



{
quote &&

<QuoteCard

quote={quote.quote}

author={quote.author}

/>

}



<Button 
onClick={fetchQuote}
/>



</div>


</div>

)

}



export default App;