/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oT8VxYiMW56
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function MealListingSkeleton() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img
          src="/placeholder.svg"
          alt="Meal Image"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary-foreground">
            Pad Thai
          </h3>
          <p className="text-sm text-muted-foreground">Thai · Thailand</p>
          <p className="text-sm text-muted-foreground mb-4">
            Stir-fried rice noodles with shrimp, peanuts, and a sweet and sour
            sauce.
          </p>
          <Button size="sm" className="w-full">
            View Details
          </Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img
          src="/placeholder.svg"
          alt="Meal Image"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary-foreground">
            Ramen
          </h3>
          <p className="text-sm text-muted-foreground">Japanese · Japan</p>
          <p className="text-sm text-muted-foreground mb-4">
            Savory broth with chewy noodles, tender pork, and a soft-boiled egg.
          </p>
          <Button size="sm" className="w-full">
            View Details
          </Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img
          src="/placeholder.svg"
          alt="Meal Image"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary-foreground">
            Tacos al Pastor
          </h3>
          <p className="text-sm text-muted-foreground">Mexican · Mexico</p>
          <p className="text-sm text-muted-foreground mb-4">
            Marinated pork, pineapple, onions, and cilantro in a soft corn
            tortilla.
          </p>
          <Button size="sm" className="w-full">
            View Details
          </Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img
          src="/placeholder.svg"
          alt="Meal Image"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary-foreground">
            Sushi
          </h3>
          <p className="text-sm text-muted-foreground">Japanese · Japan</p>
          <p className="text-sm text-muted-foreground mb-4">
            Bite-sized rice rolls with fresh raw fish, vegetables, and seaweed.
          </p>
          <Button size="sm" className="w-full">
            View Details
          </Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img
          src="/placeholder.svg"
          alt="Meal Image"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary-foreground">Pho</h3>
          <p className="text-sm text-muted-foreground">Vietnamese · Vietnam</p>
          <p className="text-sm text-muted-foreground mb-4">
            Aromatic beef broth with rice noodles, thinly sliced beef, and fresh
            herbs.
          </p>
          <Button size="sm" className="w-full">
            View Details
          </Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img
          src="/placeholder.svg"
          alt="Meal Image"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary-foreground">
            Biryani
          </h3>
          <p className="text-sm text-muted-foreground">Indian · India</p>
          <p className="text-sm text-muted-foreground mb-4">
            Fragrant rice dish with spices, vegetables, and your choice of meat.
          </p>
          <Button size="sm" className="w-full">
            View Details
          </Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img
          src="/placeholder.svg"
          alt="Meal Image"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary-foreground">
            Paella
          </h3>
          <p className="text-sm text-muted-foreground">Spanish · Spain</p>
          <p className="text-sm text-muted-foreground mb-4">
            Saffron-infused rice dish with seafood, chicken, and vegetables.
          </p>
          <Button size="sm" className="w-full">
            View Details
          </Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <img
          src="/placeholder.svg"
          alt="Meal Image"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary-foreground">
            Lasagna
          </h3>
          <p className="text-sm text-muted-foreground">Italian · Italy</p>
          <p className="text-sm text-muted-foreground mb-4">
            Layers of pasta, ground beef, ricotta, and melted cheese.
          </p>
          <Button size="sm" className="w-full">
            View Details
          </Button>
        </div>
      </div>
    </section>
  );
}
