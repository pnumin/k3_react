import logo from '../logo.svg';
import './Hello.css';

const Hello = () => {
    let name = '김경민' ;
    let git = 'https://github.com/pnumin' ;

    return (
        <main className='container'>
            <article data-theme="dark">
                <div>
                    <img src={logo} className='App-logo' alt='logo' />
                </div>
                <footer>
                    <hgroup>
                        <h1>{name}</h1>
                        <h2><a href={git}>{git}</a></h2>
                    </hgroup>
                </footer>
            </article>
        </main>
    );
}

export default Hello;