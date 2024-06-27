import styles from "./css/projects.module.css";
import ProjectCard from "./project_card";
import ProjectDetail from "./project_detail";

const Projects = () => {

    return (
        <div className={styles.project_container}>
            <div className={styles.project_cards}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
            <ProjectDetail></ProjectDetail>
        </div>
    )
}

export default Projects;