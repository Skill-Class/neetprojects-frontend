import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import HomeLeft from "./HomeLeft";
import "../components/css/Projects.css";
function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/Skill-Class/repos", {})
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="projects">
      <Navbar />
      <h4>Total Projects {projects.length}</h4>
      {projects.map((data, i) => {
        return (
          <div key={i}>
            <HomeLeft title={data.name} desc={data.description} />
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
