import { useEffect, useRef, useState } from "react";
import styles from "./css/career.module.css";
import Projects from "./projects";
import Education from "./education";
import { useInView } from "react-intersection-observer";
import {motion} from "framer-motion"

const Career = () => {
    const career_target =useRef(null);
    const project_target = useRef(null);
    const education_target = useRef(null);
    const [currentTarget, setCurrentTarget] = useState('career');
    const [ref, inView] = useInView({
        triggerOnce: false, // 요소가 한 번만 애니메이션되도록 설정
        threshold: 0.1 // 요소의 10%가 보일 때 트리거
    });

    const [ref2, inView2] = useInView({
        triggerOnce: false, // 요소가 한 번만 애니메이션되도록 설정
        threshold: 0.1 // 요소의 10%가 보일 때 트리거
    });

    const [ref3, inView3] = useInView({
        triggerOnce: false, // 요소가 한 번만 애니메이션되도록 설정
        threshold: 0.1 // 요소의 10%가 보일 때 트리거
    });

    const [ref4, inView4] = useInView({
        triggerOnce: false, // 요소가 한 번만 애니메이션되도록 설정
        threshold: 0.1 // 요소의 10%가 보일 때 트리거
    });

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };


    const moveScroll = (type) => {
        let scrollY = window.scrollY;
        if(type === 'career') {
            window.scrollTo({
                top: scrollY + career_target.current.getBoundingClientRect().top + 20,
                behavior: "smooth"
            })
        } else if(type === 'project') {
            window.scrollTo({
                top: scrollY + project_target.current.getBoundingClientRect().top + 0,
                behavior: "smooth"
            })
        } else {
            window.scrollTo({
                top: scrollY + education_target.current.getBoundingClientRect().top + 20,
                behavior: "smooth"
            })
        }
    }
    const handleScroll = (e) => {
        let scrollY = window.scrollY;

        const project = project_target.current.getBoundingClientRect();
        const education = education_target.current.getBoundingClientRect();
        
        if(education.top < 200) {
            setCurrentTarget('education');
            return;
        } 
        if(project.top < 200) {
            setCurrentTarget('project');
            return;
        }
        setCurrentTarget('career');
    
    }
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <div className={styles.career_container}>
            <motion.div 
                  ref={ref4}
                  initial="hidden"
                  animate={inView4 ? "visible" : "hidden"}
                  variants={variants}
                  transition={{ duration: 0.5 }}
                className={styles.career_menu}>
                <div className={currentTarget === 'career' ? styles.menu_active : styles.menu_inActive} onClick={() => {moveScroll("career")}}>Career</div>
                <div className={currentTarget === 'project' ? styles.menu_active : styles.menu_inActive} onClick={() => {moveScroll("project")}}>Project</div>
                <div className={currentTarget === 'education' ? styles.menu_active : styles.menu_inActive} onClick={() => {moveScroll("education")}}>Education</div>
            </motion.div>

            <div 
                
                ref={career_target}
                id="career" className={styles.career}>
                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                    className={styles.career_card}>
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
                </motion.div>

                <motion.div  ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                    className={styles.career_card}>
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
                </motion.div>
                
            </div>

            
            <div id="project" className={styles.project} ref={project_target}>
                <motion.div ref={ref2}
                    initial="hidden"
                    animate={inView2 ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.5 }}>
                <Projects/>

                </motion.div >
            </div>

            
            <div id="education" className={styles.education} ref={education_target}>
                <motion.div ref={ref3}
                    initial="hidden"
                    animate={inView3 ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.5 }}>
                <Education/>
                </motion.div>
            </div>
        </div>
    )
}

export default Career;