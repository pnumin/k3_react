import { useLocation } from "react-router-dom";
import qs from 'query-string' ;

const RoutePage2 = () => {
    const loc = useLocation().search ;
    //?item=%F0%9F%8D%8E&item2=%F0%9F%A5%95
    console.log('loc' , loc)

    const item = qs.parse(loc).item;
    const item2 = qs.parse(loc).item2;
    console.log('item', item)

    let loc2 = loc.replace('?', '') ;
    loc2 = loc2.split('&')
    loc2 = loc2.map((i) => i.split('='))
    console.log(loc2)

    return(
        <article>
            <header><h1>RoutePage2</h1></header>
            <h1>{item}</h1>
            <h1>{item2}</h1>
        </article>
    );
}

export default RoutePage2;