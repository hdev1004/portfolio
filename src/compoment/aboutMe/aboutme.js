
import { useInView } from "react-intersection-observer";
import styles from "./css/aboutme.module.css";
import { motion } from "framer-motion";

const AboutMe = () => {
    
    const [ref, inView] = useInView({
        triggerOnce: false, // 요소가 한 번만 애니메이션되도록 설정
        threshold: 0.1 // 요소의 10%가 보일 때 트리거
    });

    const [ref2, inView2] = useInView({
        triggerOnce: false, // 요소가 한 번만 애니메이션되도록 설정
        threshold: 0.1 // 요소의 10%가 보일 때 트리거
    });


    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className={styles.career_container}>
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5 }}
                className={styles.carrer_title}>💁‍♂️ About Me</motion.div>
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5 }}
                className={styles.carrer_interview}>
                <div className={styles.interview_card}>
                    <div className={styles.card_title}>Q. 개발자를 하게 된 이유가 있다면?</div>
                    <div className={styles.card_contents}>
                        부모님은 미용사 이셨고, 회원 관리 프로그램이 많이 노후화 되어 있었습니다..<br/>
                        회원관리 시스템을 변경해야 할일이 생겼는데 고등학생 당시 학원에서 배웠던 내용(JSP, DB)을 토대로 만들어 보았습니다. <br/>
                        하나하나 씩 만들어지는 과정을 보면서, 뿌듯함을 느꼈고 개발이 재밌었습니다. <br/>
                        그때부터 개발자가 되고 싶다는 꿈을 가지게 됐습니다.
                        <br/>
                        지금은 새롭게 배운 기술들을(React, Node Express) 가지고 부모님의 회원관리 프로그램을 업그레이드 해드리고 있습니다.
                    </div>
                </div>

                <div className={styles.interview_card}>
                    <div className={styles.card_title}>
                        Q. 일에 있어서 가장 중요하게 생각하는 것이 있다면?
                    </div>
                    <div className={styles.card_contents}>
                        가장 중요하게 여기는것은 <b>커뮤니케이션</b>과 <b>끈기</b> 라고 생각합니다. <br/>
                        그동안 협업을 해보면서 아무리 좋은 실력을 가지고 있어도, 소통이 안되면 무용지물 이란것을 느꼈습니다. <br/>
                        또한 오류가 발생했음에도 꾸준히 해결해내갈 수 있는 끈기가 있어야 한다고 생각합니다. 
                    </div>
                </div>

                <div className={styles.interview_card}>
                    <div className={styles.card_title}>
                        Q. 자기 개발을 위해 어떤것들을 해왔는지?
                    </div>
                    <div className={styles.card_contents}>
                        그동안 자기개발을 위해 오프라인 스터디를 직접 운영하며, 온라인 강의 들은 내용을 직접 정리하여 블로그에 글을 작성하고 있습니다. <br/>
                        개발자와 보안 종사자가 많이 모여있는 카카오톡 오픈채팅(엄기사방-약 1400명) 부방장 활동을 하고 있으며 <br/> 
                        새로운 기술들이 있다면 거부감 없이 꾸준히 배워나가고 있습니다. <br/>
                    </div>
                </div>

                <div className={styles.interview_card}>
                    <div className={styles.card_title}>
                        Q. 취미 활동이 있다면? 
                    </div>
                    <div className={styles.card_contents}>
                        아직 초보이지만 마술과 기타를 연습하고 있고, 헬스를 하며 건강한 삶을 유지하려고 하고있습니다. <br/>
                        가끔 영화관에서 영화를 보는 문화생활도 하며, 매년 연말에 콘서트에 가고 있습니다.
                    </div>
                </div>
            </motion.div>

            <br/>

            <motion.div 
                ref={ref2}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5 }}
                className={styles.carrer_title} style={{
                paddingTop: "20px"
            }}>⚒️ Skills & Tools</motion.div>
            <motion.div 
                    ref={ref2}
                    initial="hidden"
                    animate={inView2 ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.5 }}
                    className={styles.carrer_skills}>
                <div className={styles.skills_card}>
                    <div className={styles.skills_title}>
                        FrontEnd
                    </div>
                    <div className={styles.skills_contents}>
                        <div className={styles.skills_mini_card}>
                            <img src="/images/html.png" alt="html"/>
                        </div>
                        <div className={styles.skills_mini_card}>
                            <img src="/images/css.png" alt="html"/>
                        </div>
                        <div className={styles.skills_mini_card}>
                            <img src="/images/js.png" alt="html"/>
                        </div>

                        <div className={styles.skills_mini_card}>
                            <img src="/images/react.png" alt="html"/>
                        </div>
                    </div>
                </div>

                <div className={styles.skills_card}>
                    <div className={styles.skills_title}>
                        Backend
                    </div>
                    <div className={styles.skills_contents}>
                        <div className={styles.skills_mini_card}>
                            <img src="/images/java.png" alt="html"/>
                        </div>
                        <div className={styles.skills_mini_card}>
                            <img src="/images/스프링.png" alt="html"/>
                        </div>
                        <div className={styles.skills_mini_card}>
                            <img src="/images/nodejs.png" alt="html"/>
                        </div>
                    </div>
                </div>

                <div className={styles.skills_card}>
                    <div className={styles.skills_title}>
                    Cooperation
                    </div>
                    <div className={styles.skills_contents}>
                        <div className={styles.skills_mini_card}>
                            <img src="/images/github.png" alt="html"/>
                        </div>
                        <div className={styles.skills_mini_card}>
                            <img src="/images/notion.png" alt="html"/>
                        </div>
                        <div className={styles.skills_mini_card}>
                            <img src="/images/slack.png" alt="html"/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutMe;