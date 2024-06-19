import { useEffect, useRef, useState } from "react";
import styles from "./css/main_cover.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MatterComponent from "../matter/Matter";

const MainCover = () => {
    const [isStep1, setIsStep1] = useState(false);
    

    useEffect(() => {
        setTimeout(() => {
            step1();
        }, 2100)
    }, []);

    const step1 = () => {
        setIsStep1(true);
    }

    const [ref, inView] = useInView({
        triggerOnce: false, // 요소가 한 번만 애니메이션되도록 설정
        threshold: 0.1 // 요소의 10%가 보일 때 트리거
    });

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 1;
            return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
            };
        }
    };

    return (
        <div className={styles.main_cover}>
            <img src="/images/marble.jpg" className={styles.main_cover_image} alt="배경"
                style={
                    isStep1 ? {
                        width: "calc(100% + 200px)",
                        height: "calc(100vh + 200px)",
                        marginLeft: "-100px",
                        marginTop: "-100px",
                        opacity: 0.3
                    } : {
                        opacity: 0
                    }
                }
            />

            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5 }}
                >
                <div className={styles.main_text_container}>
                    <div className={styles.main_text_background} style={
                        isStep1 ? {
                            color: "#D2D2D2AA",
                            marginTop: "0px"
                        } : {
                            marginTop: "-50px"
                        }
                    }>Web Developer</div>
                    <p className={styles.main_title}>웹 개발자 <b>김진원</b> 입니다.</p>

                    <div className={styles.main_sub_title} style={{textAlign:"center"}}>
                        포기하지 않고 공부하며 성장하자는 <b>마인드</b>로, <br/>
                        꾸준히 발전해 나아가는 <b>개발자</b> 입니다.
                    </div>

                </div>


                <div style={
                    isStep1 ? {
                    opacity: 1
                } : {opacity: 0}} className={styles.icon}>
                    <div className={styles.icon_wrapper}>
                        <div className={styles.hand_icon}>
                        <div className={styles.hand}>
                            <div className={styles.circle}></div>
                        </div>
                        </div>
                    </div>
                </div>

               
            </motion.div>

            <MatterComponent/>

        </div>
    )
}

export default MainCover;