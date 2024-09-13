import Experience from "./experience/page";
import  HeroBackground  from "./hero/page";
import SkillSection from "./HomeSection/Skill";

export default function Home() {
  return (
    <>
      <HeroBackground />
      <SkillSection />
      <Experience />
    </>
  );
}
