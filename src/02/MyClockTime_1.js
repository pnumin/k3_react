const MyClockTime = () => {
    let t = new Date().toLocaleTimeString() ; 
    setInterval(()=>console.log(new Date().toLocaleTimeString()), 1000) ;
    return (
        <footer>
            <h1>{t}</h1>
        </footer>
    );
}

export default MyClockTime;
