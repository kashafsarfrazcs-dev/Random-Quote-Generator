import { FaSync } from "react-icons/fa";


function Button({onClick}){


return(

<button 
className="new-btn"
onClick={onClick}
>

<FaSync/>

New Quote

</button>

)

}


export default Button;