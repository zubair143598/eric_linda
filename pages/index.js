import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Photos from "@/components/Photos";
import ReligieuxWeeding from "@/components/ReligieuxWeeding";
import Rsvp from "@/components/Rsvp";
import Toulous from "@/components/Toulous";
import TraditionalWedding from "@/components/TraditionalWedding";

export default function Home() {
  return (
    <>
      <div className="Main ">
        <Navbar />
        <Hero />
      </div>
      <TraditionalWedding />
      <ReligieuxWeeding/>
      <Rsvp />
      <Photos/>
      {/* <Toulous /> */}
    </>
  );
}
