import { useState } from "react" ;
import style from './Box.module.css' ;

const BoxRows = ({mv}) => {    
    // const mvlist = [...probs.mv] ;
    //console.log("boxrows",mv)

    // 상세정보
    const [detail, setDetail] = useState('');

    //클릭된 자료 확인
    const showMv = (line) => {
        let tempTag =   <tr>
                        <td className={style.tempsp}>[{line.movieCd}]</td>
                        <td className={style.tempsp}>{line.movieNm}</td>
                        <td className={style.tempsp} colSpan={2}>개봉일 : {line.openDt}</td> 
                        </tr>
        setDetail(tempTag);
    }

    let trTags = [] ;    
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten) ;
        let icon ;
        let intent = parseInt(row.rankInten) ;
        if (intent === 0) icon = '⏺️' ;
        else if (intent < 0) icon = '⬇️' ;
        else icon = '⬆️' ;

        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={()=>showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{intent === 0? '':icon}{intent === 0? '': Math.abs(intent)}</td>
            </tr>
        );
    }    

    //console.log(trTags);
    return (
        <>
            <tbody>
                {trTags}
            </tbody>
            <tfoot> 
                {detail} 
            </tfoot>
        </>
    );
}

export default BoxRows ;