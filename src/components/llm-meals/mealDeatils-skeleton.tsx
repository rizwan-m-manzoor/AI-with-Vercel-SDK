/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SoBL7rUliGH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function MealDetailsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="/placeholder.svg"
            alt="Meal Image"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-primary-foreground">
            Pad Thai
          </h1>
          <p className="text-sm text-muted-foreground">Thai · Thailand</p>
          <p className="text-lg text-muted-foreground mt-4">
            Stir-fried rice noodles with shrimp, peanuts, and a sweet and sour
            sauce.
          </p>
          <div className="prose prose-lg text-muted-foreground mt-6">
            <h2>Ingredients</h2>
            <ul>
              <li>8 oz rice noodles</li>
              <li>1 lb shrimp, peeled and deveined</li>
              <li>2 tbsp vegetable oil</li>
              <li>3 cloves garlic, minced</li>
              <li>1 cup bean sprouts</li>
              <li>1/2 cup chopped roasted peanuts</li>
              <li>2 eggs, beaten</li>
              <li>2 tbsp fish sauce</li>
              <li>2 tbsp brown sugar</li>
              <li>1 tbsp lime juice</li>
              <li>1/4 tsp red pepper flakes (optional)</li>
            </ul>
            <h2>Instructions</h2>
            <ol>
              <li>
                Soak the rice noodles in hot water for 15-20 minutes until
                softened.
              </li>
              <li>
                Heat the vegetable oil in a large wok or skillet over high heat.
              </li>
              <li>
                Add the garlic and stir-fry for 30 seconds until fragrant.
              </li>
              <li>
                Add the shrimp and stir-fry for 2-3 minutes until they start to
                turn pink.
              </li>
              <li>
                Add the drained noodles, bean sprouts, peanuts, and eggs. Toss
                everything together.
              </li>
              <li>
                Add the fish sauce, brown sugar, and lime juice. Stir-fry for
                2-3 minutes until the noodles are tender and everything is well
                combined.
              </li>
              <li>Sprinkle with red pepper flakes if desired.</li>
              <li>
                Serve immediately, garnished with additional peanuts and lime
                wedges.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
