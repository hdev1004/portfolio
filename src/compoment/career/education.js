import styles from "./css/education.module.css";

const Education = () => {
    return (
        <div className={styles.education_container}>
            <div className={styles.education_card_group}>

                <div className={styles.education_card}>
                    <div className={styles.education_date}>
                        2022.07 ~ 2022.08
                    </div>
                    <div className={styles.education_company}>
                        명지전문대학교
                    </div>

                    <div className={styles.education_dev}>
                        @ 메타버스 플랫폼 운용을 위한 전문인력 양성과정
                    </div>
                        
                    <div>
                        <ul>
                            <li>Unity를 활용한 AR Foundation 개발</li>
                            <li>팀빌딩을 통한 Game Gym 활동 </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.education_card}>
                    <div className={styles.education_date}>
                        2020.11 - 2020.12
                    </div>
                    <div className={styles.education_company}>
                        명지전문대학교 어학연수
                    </div>

                    <div className={styles.education_dev}>
                        @ 중국 - 허페이
                    </div>
                        
                    <div>
                        <ul>
                            <li>기초 중국어 회화 학습</li>
                            <li>외국인과의 팀 프로젝트를 통한 커뮤니케이션 증진</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.education_card}>
                    <div className={styles.education_date}>
                        2019.07 - 2019.08
                    </div>
                    <div className={styles.education_company}>
                        명지전문대학교 어학연수
                    </div>

                    <div className={styles.education_dev}>
                        @ 말레이시아
                    </div>
                        
                    <div>
                        <ul>
                            <li>기초 영어회화 학습</li>
                            <li>외국인과의 팀 프로젝트를 통한 커뮤니케이션 증진</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.education_card}>
                    <div className={styles.education_date}>
                        2019.03 - 2023.03
                    </div>
                    <div className={styles.education_company}>
                        명지전문대학교
                    </div>

                    <div className={styles.education_dev}>
                        @ 인터넷보안공학과
                    </div>
                        
                    <div>
                        <ul>
                            <li>시스템 보안, 네트워크 보안 학습</li>
                            <li>JAVA 앱 개발 및 웹 개발 학습</li>
                            <li>실무 현장실습</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Education;