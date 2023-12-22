import { component$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { Database } from "bun:sqlite";

const servertest = server$((text: string) => {
  console.log(text);
  const db = new Database(":memory:");
  const query = db.query("create table foo;");
  query.run;

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
