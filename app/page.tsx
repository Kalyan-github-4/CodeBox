import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
    <Header />
    <Hero />
    <h1 className="font-game text-2xl">Build with 💗 By NextJS</h1>
    <Button variant="destructive">Click me!!</Button>
    </div>
  );
}
