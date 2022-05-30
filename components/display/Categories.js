import Badge from "./Badge";
import styles from "../../styles/components/display/Categories.module.css"

export default function Categories({categories=[]}){

    function onCategoryClick(categoryText){
    }

    return (
        <div className={styles.container}>
            {categories.map((category) => {
                let text = `${category.text}${category.number ? ` (${category.number})`: ""}`
                return <Badge text={text} onClick={() => {onCategoryClick(category.text);}}/>
            })}
        </div>
    )
}