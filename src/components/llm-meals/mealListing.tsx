"use client";

import { useEffect, useState } from "react";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oT8VxYiMW56
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../ui/button";
import MealDetails from "./mealDetails";

interface Meal {
  id: number;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
}

interface MealListingProps {
  meals: Meal[];
}

interface MealDetail {
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

export default function MealListing({ meals }: MealListingProps) {
  const [selectedMealId, setSelectedMealId] = useState<number | null>(null);
  const [mealDetails, setMealDetails] = useState<MealDetail | null>(null);

  useEffect(() => {
    const fetchMealDetails = async (id: number) => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          setMealDetails(data.meals[0]);
        }
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    if (selectedMealId) {
      fetchMealDetails(selectedMealId);
    }
  }, [selectedMealId]);

  const handleClick = (id: number) => {
    setSelectedMealId(id);
  };
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
        {meals?.map((item) => (
          <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <img
              src={item.strMealThumb}
              alt="Meal Image"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-primary-foreground">
                {item.strMeal}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.strCategory}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {item.strArea}
              </p>
              <Button
                size="sm"
                className="w-full"
                onClick={() => handleClick(item.id)}
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </section>
      <div>{selectedMealId && <MealDetails meal={mealDetails} />} </div>
    </>
  );
}
