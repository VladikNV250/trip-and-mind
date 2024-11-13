import Application from "@/modules/Application/Application";
import Hero from "@/modules/Hero/Hero";
import Review from "@/modules/Review/Review";
import Tours from "@/modules/Tours/Tours";

export default function Home() {
  return (
    <main>
        <Hero />
        <Tours />
        <Application />
        <Review />
    </main>
  )
}
