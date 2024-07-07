import styles from "./css/projects.module.css";
import ProjectCard from "./project_card";
import ProjectDetail from "./project_detail";

const Projects = () => {
    let cardInfo = [{
        title: '글루따띠온',
        subTitle: 'MSA 구조와 BoilerPlate 적용을 위해 만들어본 `글루따띠온` 쇼핑몰 입니다',
        tags: ['팀', '반응형', '사이드'],
        date: '2024.06 - 2024.07',
        team: '2인 (백엔드1명, 프론트 1명)',
        fileName: '글루따띠온.md',
        thumbnail: '글루따띠온.png',
        blog: null,
        github: "https://github.com/hdev1004/vue-boilerplate-admin",
        link: "http://210.114.19.32:8085/"
    }, {
        title: '포트폴리오',
        subTitle: '개발자 취업을 위한 포트폴리오 입니다',
        tags: ['개인', '반응형', '사이드'],
        date: '2024.06 - 2024.07',
        team: '1인 (프론트 1명)',
        fileName: '포트폴리오.md',
        thumbnail: '포트폴리오.png',
        blog: null,
        github: "https://github.com/hdev1004/portfolio",
        link: "https://teddy0210.web.app"
    }]

    return (
        <div className={styles.project_container}>
            <div className={styles.project_cards}>
                {
                    cardInfo.map((info) => (
                        <ProjectCard info={info}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;