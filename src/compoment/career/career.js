import { useState } from "react";
import styles from "./css/career.module.css";

const Career = () => {

    return (
        <div className={styles.career_container}>
            <div className={styles.career_menu}>
                <div>Career</div>
                <div>Project</div>
                <div>Education</div>
            </div>

            <div id="career" className={styles.career}>

                
                <div className={styles.career_card}>
                    <div className={styles.career_date}>
                        2024.03 - 2024.06
                    </div>
                    <div className={styles.career_company}>
                        (주)티피엘엔디
                    </div>

                    <div className={styles.career_dev}>
                        @ 웹 개발
                    </div>
                        
                    <div>
                        <ul>
                            <li>React, PHP, Nodejs를 활요한 웹 개발 작업</li>
                            <li>UX/UI를 고려한 반응형 웹 개발</li>
                            <li>Slack 협업툴을 이용해 고객사와의 지속적인 커뮤니케이션</li>
                            <li>3개 이상의 기업 사이트 개발</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.career_card}>
                    <div className={styles.career_date}>
                        2023.03 - 2024.03
                    </div>
                    <div className={styles.career_company}>
                        (주)아이엔 소프트
                    </div>

                    <div className={styles.career_dev}>
                        @ 서비스 개발
                    </div>
                        
                    <div>
                        <ul>
                            <li>
                                우리은행 비정형 자산화 구축 프로젝트
                                <ul>
                                    <li>사내 솔루션 패키징 처리</li>
                                    <li>Ngnix, LuaScript 기반의 GateWay 개발 및 APM 서비스 개발</li>
                                    <li>Postgres HA 구성</li>    
                                </ul>
                            </li>

                            <li>
                                법무부 외국인 데이터 분석 프로젝트
                                <ul>
                                    <li>데이터 분석, 정재 및 디비 적재</li>
                                </ul>
                            </li>
                            
                            <li>
                                B2B 플랫폼 바이코리아 고도화
                                <ul>
                                    <li>전자정부 프레임워크 기반의 SM 업무</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>

            
            <div id="project" className={styles.project}>
                <div className={styles.project_card}>
                    
                </div>
            </div>

            
            <div id="education" className={styles.education}>

            </div>
        </div>
    )
}

export default Career;