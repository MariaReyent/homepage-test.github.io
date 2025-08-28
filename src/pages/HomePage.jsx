import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { JobCard } from "../components/JobCard";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <JobCard />
      <Footer />
    </>
  );
}
