import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import FcstTable from "./FcstTable";

const VilageFcst = () => {
    console.log("useParames", useParams())
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [datas, setDatas] = useState() ;
    useEffect(()=>{
        const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=8qw7g%2FC%2BMGd2iRqEvb%2FEx0Sg3ZwAAsnS%2FQ7rRaU3l4UUYfNWgyAbYpNw541yy9pueEvoCcNwmCww8ss32BBWEA%3D%3D&numOfRows=900&pageNo=1&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}&dataType=json`
        
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setDatas(data.response.body.items))
        .catch((err) => console.log(err))
    }, []);

    return(
        <article>
            <header>VilageFcst</header>
            {datas && <FcstTable datas={datas} gubun="단기예보 "/>}
        </article>
    );
}

export default VilageFcst ;