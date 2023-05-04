const TaccidentNav2 = ({c2, sel1, sel2, setSel2}) => {
    const c2Arr = c2.filter((item) => item[0] === sel1);
    //console.log('c2Arr', c2Arr)

    const btTag = c2Arr.map((item)=>
        <li key={item}>
            <button onClick = {() => setSel2(item)}>{item[1]}</button>
        </li>
    );

    return (
        <nav>
            <ul>
                <h1>사고유형 중분류</h1>
            </ul>
            <ul>
                {btTag} 
            </ul>
        </nav>
    );
}

export default TaccidentNav2 ;