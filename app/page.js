"use client"
import HeroSection from "./Components/Home/HeroSection";
import RaceCalendarSection from "./Components/Home/RaceCalendar";

export default function Home() {
  return (
    <div className="homePageWrapper">
      <HeroSection />
      <RaceCalendarSection />

      <br/>
      <br/>
    </div>
  );
}
