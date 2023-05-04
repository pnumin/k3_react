import data from './dataFrcst.json' ;
import style from './Frcst.module.css' ;
//state변수 1단계
import { useState } from 'react';

const Frcst = () => {
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"] ;
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"] ;
    // dtKey.map((item) => console.log('dt' , data[item]))
    // cnKey.map((item) => console.log('cnt' ,data[item]))
    
    //오브젝트 만들기
    let dtcn = {} ;
    dtKey.map((item, idx) => 
                dtcn[data[item]] = data[cnKey[idx]] 
            );
    //상세정보 
    //let bodyTag ;
    //state변수 2단계 : 변수선언
    const [bodyTag, setBodyTag] = useState('') ;
    const [selDt, setselDt] = useState() ; 

    const detail = (k) => {
        let dtcnItem = dtcn[k].split(',') ;
        setselDt(k) ;
        dtcnItem = dtcnItem.map((item) => item.split(':'));
        console.log(dtcnItem)    
        dtcnItem = dtcnItem.map((item) =>
                <div key={item[0]}>
                    <span className={style.sp1}>{item[0]}</span>
                    {/* {item[1].trim() === '낮음'? <span className={style.sp21}>{item[1]}</span> 
                      : item[1].trim() === '보통' ? <span className={style.sp22}>{item[1]}</span>
                      :<span className={style.sp23}>{item[1]}</span>}
                     */}
                    <span className={item[1].trim() === '낮음'? style.sp21
                                        : item[1].trim() === '보통' ? style.sp22 
                                        : style.sp23}>
                        {item[1]}
                    </span> 
                </div>
        )
        
        //state변수 3단계 : 값 변경
        setBodyTag(dtcnItem);
    }

    let dtTag = [] ;
    dtTag = Object.keys(dtcn).map((item,idx) => 
                <div className={selDt === item ? style.dt1 : style.dt} 
                    key={'dt'+idx} 
                    onClick={() => detail(item)}>
                        {item}
                </div>
    );

    return (
        <main className='container'>
            <article>
                <header>
                    <h1>초미세먼지 주간예보</h1>
                    <div className='grid'>
                        {dtTag}
                    </div>
                </header>
                <div className='grid'>
                    {bodyTag}
                </div> 
            </article>
        </main>
    );
}

export default Frcst ;