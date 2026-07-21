const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = "https://api.api-ninjas.com/v2/randomquotes";


export async function getRandomQuote(){

    try{

        const response = await fetch(API_URL,{
            method:"GET",
            headers:{
                "X-Api-Key": API_KEY
            }
        });


        if(!response.ok){
            throw new Error("Unable to fetch quote");
        }


        const data = await response.json();


        return data[0];


    }catch(error){

        console.log(error);
        throw error;

    }

}