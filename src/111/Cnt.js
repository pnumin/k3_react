import { BrowserRouter, Route, Routes } from "react-router-dom";

import CntInput from "../111/CntInput";
import CntDisp from "../111/CntDisp";
const Cnt = () => {
    
    return (
        <BrowserRouter>
            <main className="container">
            <Routes>
                <Route path="/" element={<CntInput />} />
                <Route path="/disp" element={<CntDisp />} />
            </Routes>
            
            </main>
        </BrowserRouter>    
    );
}

export default Cnt ;