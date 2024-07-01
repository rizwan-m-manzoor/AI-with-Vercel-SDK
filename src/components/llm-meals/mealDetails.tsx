interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strSource: string;
}

interface Ingredient {
  ingredient: string;
  measure: string;
}

interface Props {
  meal: Meal | null;
}

const getIngredients = (meal: Meal): Ingredient[] => {
  const ingredients: Ingredient[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof Meal] as string;
    const measure = meal[`strMeasure${i}` as keyof Meal] as string;
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure });
    }
  }
  return ingredients;
};

const MealDetails: React.FC<Props> = ({ meal }) => {
  if (!meal) {
    return <div>No meal details available</div>;
  }
  const ingredients = getIngredients(meal);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-primary-foreground">
            {meal.strMeal}
          </h1>
          <p className="text-sm text-muted-foreground">
            {meal.strCategory} · {meal.strArea}
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            {meal.strInstructions}
          </p>
          <div className="prose prose-lg text-muted-foreground mt-6">
            <h2 className="text-2xl font-bold">Ingredients</h2>
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>
                  {item.measure} {item.ingredient}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold">Instructions</h2>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
