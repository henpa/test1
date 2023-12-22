import { component$ } from "@builder.io/qwik";
import { server$, type DocumentHead } from "@builder.io/qwik-city";

const servertest = server$((text: string) => {
  console.log(text);
  return "hello from server";
});

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <button
        onClick$={async () => {
          const greeting = await servertest("hello from client");
          console.log(greeting);
        }}
      >
        greet
      </button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
