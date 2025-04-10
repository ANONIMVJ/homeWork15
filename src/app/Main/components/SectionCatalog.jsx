import React from "react"
import styles from './SectionCatalog.module.css';

function SectionCatalog() {
    return (
        <div className={styles.sectionCatalog}>
            <div className={styles.topSide}>
                <h2 className={styles.catalogTitle}>Каталог</h2>
                <button className={styles.button}>Весь каталог <img src="/arrowIcon.svg" alt="Arrow Icon" /></button>
            </div>
            <div className={styles.contentSide}>
                <div>example</div>
                <div>example</div>
                <div>example</div>
                <div>example</div>
                <div>example</div>
                <div>example</div>
            </div>
        </div>
    )
}

export default SectionCatalog
