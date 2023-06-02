import Component from "./component";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2>Hello World!</h2>

      <Component />
    </main>
  );
}
