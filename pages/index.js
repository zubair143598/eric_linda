import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Rsvp from "@/components/Rsvp";
import Toulous from "@/components/Toulous";
import TraditionalWedding from "@/components/TraditionalWedding";

export default function Home() {
  return (
    <>
      <div className="relative w-full  overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full min-w-full min-h-full"
            src="https://www.youtube.com/embed/Mjjw19B7rMk?autoplay=1&controls=0&modestbranding=1&loop=1&mute=1&rel=0&iv_load_policy=3&playlist=Mjjw19B7rMk&playsinline=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Rsvp/>
      <Toulous/>
      <TraditionalWedding/>
    </>
  );
}
