const MyRef = () => {
    let cnt1 = 1;

    const showCnt = () => {
        console.log('cnt1 =', cnt1);
    }

    const showCnt1 = () => {
        showCnt();
    }
    return (
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <div>컴포넌트 변수 : {cnt1}</div>
                    </div>
                </header>
                <div className="grid">
                    <button onClick={() => showCnt1()}>컴포넌트 변수</button>
                </div>
            </article>
        </main>
    );
}


export default MyRef;