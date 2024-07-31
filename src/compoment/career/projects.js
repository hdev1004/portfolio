import styles from "./css/projects.module.css";
import ProjectCard from "./project_card";
import ProjectDetail from "./project_detail";

const Projects = () => {
    let cardInfo = [{
        title: '글루따띠온 쇼핑몰',
        subTitle: 'MSA 구조와 BoilerPlate 적용을 위해 만들어본 `글루따띠온` 쇼핑몰 입니다',
        tags: ['팀', '반응형', '사이드'],
        date: '2024.06 - 2024.07',
        team: '2인 (백엔드1명, 프론트 1명)',
        fileName: '글루따띠온.md',
        thumbnail: '글루따띠온.png',
        blog: null,
        github: "https://github.com/hdev1004/vue-boilerplate",
        link: ["http://210.114.19.32:8090/", "http://210.114.19.32:8085/"]
    }, {
        title: '리액트 기반의 포트폴리오 웹 사이트',
        subTitle: '개발자 취업을 위한 포트폴리오 입니다',
        tags: ['개인', '반응형', '사이드'],
        date: '2024.06 - 2024.07',
        team: '1인 (프론트 1명)',
        fileName: '포트폴리오.md',
        thumbnail: '포트폴리오.png',
        blog: null,
        github: "https://github.com/hdev1004/portfolio",
        link: ["https://teddy0210.web.app"]
    }, {
        title: '로티피 법률 사무소 구축 프로젝트',
        subTitle: '티피엘엔디의 법률 사무소 사이트 입니다.',
        tags: ['개인', '반응형'],
        date: '2024.05 - 2024.05',
        team: '1인 (프론트 1명)',
        fileName: '로티피.md',
        thumbnail: '로티피.png',
        blog: null,
        github: null,
        link: ["https://law-tp.com"]
    },{
        title: '설계장 온라인 쇼핑몰',
        subTitle: 'B2B & B2C 형태의 온라인 쇼핑몰 입니다.',
        tags: ['팀', '프로젝트'],
        date: '2024.04 - 2024.05',
        team: '4인 (앱 1명, 프론트 2명, 백엔드 1명)',
        fileName: '설계장.md',
        thumbnail: '설계장.png',
        blog: null,
        github: null,
        link: ["https://seolgyejang4seller.kr", "https://seolgyez.kr/"]
    },{
        title: '로고몬도',
        subTitle: 'B2B 형태의 온라인 도소매 사이트 입니다.',
        tags: ['팀', '프로젝트'],
        date: '2024.03 - 2024.05',
        team: '2인 (프론트 1명, 백엔드 1명)',
        fileName: '로고몬도.md',
        thumbnail: '로고몬도.png',
        blog: null,
        github: null,
        link: ["https://redtopaz-d6e79.web.app/main"]
    }, {
        title: 'C# 윈도우 프로그램 뽀모도로 타이머',
        subTitle: 'WPF 기반의 윈도우 프로그램으로 공부에 집중할 수 있도록 하는 뽀모도로 타이머',
        tags: ['개인', '윈도우', '토이'],
        date: '2024.02 - 2024.03',
        team: '1인',
        fileName: '뽀모도로.md',
        thumbnail: '뽀모도로.png',
        blog: null,
        github: "https://github.com/hdev1004/Pomodoro",
        link: ["https://github.com/hdev1004/Pomodoro/blob/master/Pomodoro/Pomodoro.zip"]
    }, {
        title: 'QStudy - 스터디 모임 사이트',
        subTitle: '스터디 모임을 간편하게 관리할 수 있는 사이트',
        tags: ['팀', '반응형', '사이드'],
        date: '2023.12 - 2024.03',
        team: '2인 (풀스택 2명)',
        fileName: 'QStudy.md',
        thumbnail: 'QStudy.png',
        blog: null,
        github: "https://github.com/ponikoii/qstudy_front",
        link: ["http://210.114.19.32:8080/login"]
    },  {
        title: '키보드 녹화 프로그램',
        subTitle: '컴퓨터를 사용하면서 필요할 수 있는 키보드 녹화 라이브러리 입니다.',
        tags: ['개인', '파이썬', '사이드'],
        date: '2024.01 - 2024.02',
        team: '1인',
        fileName: '키보드녹화.md',
        thumbnail: '키보드녹화.gif',
        blog: "https://hdev1004.tistory.com/entry/%ED%8C%8C%EC%9D%B4%EC%8D%AC%EC%9C%BC%EB%A1%9C-%ED%82%A4%EB%B3%B4%EB%93%9C-%EB%85%B9%ED%99%94-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90",
        github: "https://github.com/hdev1004/RecordAndPlay"
    }, {
        title: '자바스크립트로 만든 화살피하기 게임',
        subTitle: '죽림고수와 사과와 화살에서 영감을 받은 사이트 입니다.',
        tags: ['개인', '자바스크립트', '사이드'],
        date: '2021.11 - 2021.12',
        team: '1인',
        fileName: '화살피하기.md',
        thumbnail: '화살피하기.png',
        link: ["https://arrow77.web.app"],
        blog: "https://blog.naver.com/zlatmgpdjtiq/222590943472",
        github: "https://github.com/hdev1004/AvoidArrowGame"
    }, {
        title: '에브리띵전',
        subTitle: '편리한 학교 생활에 필요한 앱 개발 공모전',
        tags: ['팀', '모바일', '공모전'],
        date: '2021.11 - 2021.12',
        team: '1인',
        fileName: '에브리띵전.md',
        thumbnail: '에브리띵전.jpg',
        link: null,
        blog: null,
        github: "https://github.com/hdev1004/Everything_Jeon"
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