// const CntDisp = (probs) => {
//     const n = probs.n ;
const CntDisp = ({n}) => {    
    return (
        <article>
            <h1>입력값 : {n}, 입력값 2배 :  {n * 2} </h1>
        </article>
    );

}

export default CntDisp ;