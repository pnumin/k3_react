import styles from './Gallery.module.css' ;
const GalleryArticle = ({ item }) => {
    let tags = item.galSearchKeyword.split(',') ;
    tags = tags.map((i) => <div>{i}</div>) 

    return (
        <article>
            <header>
                <span>{item.galTitle}</span>
                <span>{item.galPhotographyLocation}</span>
            </header>
            <div>
                <img src={item.galWebImageUrl} />
            </div>
            <footer>
                {tags}
            </footer>
        </article>
    );
}

export default GalleryArticle;