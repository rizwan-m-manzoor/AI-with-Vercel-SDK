"use server";

import MealDetailsSkeleton from "@ai-rsc/components/llm-crypto/mealDeatils-skeleton";
import MealDetails from "@ai-rsc/components/llm-crypto/mealDetails";
import MealListing from "@ai-rsc/components/llm-crypto/mealListing";
import MealListingSkeleton from "@ai-rsc/components/llm-crypto/mealListing-skeleton";
import { BotCard, BotMessage } from "@ai-rsc/components/llm-crypto/message";
import { env } from "@ai-rsc/env.mjs";
import { createOpenAI } from "@ai-sdk/openai";
import type { CoreMessage, ToolInvocation } from "ai";
import { createAI, getMutableAIState, streamUI } from "ai/rsc";
import { Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import { z } from "zod";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: env.GROQ_API_KEY,
});

/* 
  !-- The first implication of user interfaces being generative is that they are not deterministic in nature.
  !-- This is because they depend on the generation output by the model. Since these generations are probabilistic 
  !-- in nature, it is possible for every user query to result in a different user interface being generated.

  !-- Users expect their experience using your application to be predictable, so non-deterministic user interfaces
  !-- can sound like a bad idea at first. However, one way language models can be set up to limit their generations
  !-- to a particular set of outputs is to use their ability to call functions, now called tool calling.

  !-- When language models are provided with a set of function definitions, and instructed that it can choose to 
  !-- execute any of them based on user query, it does either one of the following two things:

  !-- 1. Execute a function that is most relevant to the user query.
  !-- 2. Not execute any function if the user query is out of bounds the set of functions available to them.

  !-- As you can see in the content variable below, we set the initial message so that the LLM understand what to do.
  !-- We define a few tool names which allows the LLM to decide whether or not to call the function. Then, we ensure
  !-- that the LLM understands that if the function is out of bounds of the set of functions available to them, they
  !-- should respond that they are a demo and cannot do that. Besides that, the LLM can chat with users as normal.
*/

const content = `\
You are a meal guide bot and you can help users get meal ideas and recipies. Don't tell users about your function calls, only tell him you can get meal listing for him or get random meal for him.

If the user wants the meals list, call \`get_meals_list\` to show the meals list.
If the user wants the random meal, call \`get_random_meal\` to show the random meal.
If the user wants to do anything else, it is an impossible task, so you should respond that you are a meal guide bot and cannot do that.

Besides getting meal ideas, you can also chat with users.
`;

export async function sendMessage(message: string): Promise<{
  id: number;
  role: "user" | "assistant";
  display: ReactNode;
}> {
  const history = getMutableAIState<typeof AI>();

  history.update([
    ...history.get(),
    {
      role: "user",
      content: message,
    },
  ]);

  const reply = await streamUI({
    model: groq("llama3-8b-8192"),
    messages: [
      {
        role: "system",
        content,
        toolInvocations: [],
      },
      ...history.get(),
    ] as CoreMessage[],
    initial: (
      <BotMessage className="items-center flex shrink-0 select-none justify-center">
        <Loader2 className="h-5 w-5 animate-spin stroke-zinc-900" />
      </BotMessage>
    ),
    text: ({ content, done }) => {
      if (done)
        history.done([...history.get(), { role: "assistant", content }]);

      return <BotMessage>{content}</BotMessage>;
    },
    tools: {
      get_meals_list: {
        description:
          "Get the list of all meals. Use this to show the list of meals to user.",
        parameters: z.object({
          f: z
            .string()
            .describe("The first letter of the meals to search for. e.g. 'a'."),
        }),
        generate: async function* ({ f }: { f: string }) {
          yield (
            <BotCard>
              <MealListingSkeleton />
            </BotCard>
          );

          const url = new URL(
            "https://www.themealdb.com/api/json/v1/1/search.php"
          );

          // set the query params which are required
          url.searchParams.append("f", "a");

          const response = await fetch(url, {
            headers: {
              // set the headers
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            return <BotMessage>Meals not found!</BotMessage>;
          }

          const res = await response.json();

          const meals = res.meals;

          await sleep(1000);

          history.done([
            ...history.get(),
            {
              role: "assistant",
              name: "get_meals_list",
              content: `[List of Meals]`,
            },
          ]);

          console.log(meals, "here at testing");

          return (
            <BotCard>
              <MealListing
                meals={meals.map((item: any) => ({
                  id: item.idMeal,
                  strMeal: item.strMeal,
                  strCategory: item.strCategory,
                  strArea: item.strArea,
                  strMealThumb: item.strMealThumb,
                }))}
              />
            </BotCard>
          );
        },
      },
      get_random_meal: {
        description:
          "Get the list of random meal. Use this to show the random meal details.",
        parameters: z.object({
          f: z
            .string()
            .describe("The first letter of the meals to search for. e.g. 'a'."),
        }),
        generate: async function* ({ f }: { f: string }) {
          yield (
            <BotCard>
              <MealDetailsSkeleton />
            </BotCard>
          );

          const url = new URL(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );

          const response = await fetch(url, {
            headers: {
              // set the headers
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            return <BotMessage>Meal not found!</BotMessage>;
          }

          const res = await response.json();

          const meal = res.meals;

          await sleep(1000);

          console.log(meal, "here at meal");

          history.done([
            ...history.get(),
            {
              role: "assistant",
              name: "get_random_meal",
              content: `[Random Meal]`,
            },
          ]);

          return (
            <BotCard>
              <MealDetails meal={meal[0]} />
            </BotCard>
          );
        },
      },
    },
    temperature: 0,
  });

  return {
    id: Date.now(),
    role: "assistant" as const,
    display: reply.value,
  };
}
// Define the AI state and UI state types
export type AIState = Array<{
  id?: number;
  name?: "get_meals_list" | "get_random_meal";
  role: "user" | "assistant" | "system";
  content: string;
}>;

export type UIState = Array<{
  id: number;
  role: "user" | "assistant";
  display: ReactNode;
  toolInvocations?: ToolInvocation[];
}>;

// Create the AI provider with the initial states and allowed actions
export const AI = createAI({
  initialAIState: [] as AIState,
  initialUIState: [] as UIState,
  actions: {
    sendMessage,
  },
});
