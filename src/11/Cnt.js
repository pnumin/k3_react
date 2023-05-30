import { useState, useEffect } from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";
const Cnt = () => {
    const  [n, setN] = useState(1);
    
    useEffect(() => {
        console.log("n", n) ;
    } , [n]);

    return (
        <main className="container">
            <CntInput n={n} setN={setN} />
            <CntDisp n= {n}/>
        </main>
    );
}

export default Cnt ;