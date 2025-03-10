import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return(
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image}  pt="65%"/>
            <div className="recipe-card-info">
            <p className="recipe-titte">{recipe.title}</p>
            <p className="recipe-desc">Simple food,  tasty recipes will show you how to cook nice food. </p>
            <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}