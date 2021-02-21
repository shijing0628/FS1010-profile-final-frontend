import React from "react";
import ImageSection from "../ImageSection/ImageSection";
import ServicesSection from "../Service/ServicesSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import Tittle from "../Tittle/Tittle";
import "./style.css";

export default function MySkills() {
  return (
    <div className="AboutPage">
      <Tittle title={"Introduction"} />
      <ImageSection />
      <Tittle title={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"Typescript"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"React Js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Node Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Graphql"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Mysql"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Java"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Web Design"} progress={"55%"} width={"55%"} />
        <SkillsSection skill={"UI/Ux Design"} progress={"76%"} width={"76%"} />
      </div>

      <Tittle title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          title={"Web design"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          title={"Game Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
    </div>
  );
}
