import Header from "../components/Header.tsx";
import { cn } from "../lib/utils.ts";
import type { HTMLAttributes } from "react";

function Form({ className }: Pick<HTMLAttributes<HTMLElement>, "className">) {
  return (
    <form className={cn("form", className)}></form>
  );
}

export default function Root() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="section-1">
          <div className="section-1__container container">
            <h1 className="section-1__title">
              Вся жизнь -
              <br />
              <span className="font-bold">путешествие!</span>
            </h1>
            <Form className="section-1__form" />
          </div>
        </section>
      </main>
    </>
  );
}
