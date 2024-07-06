import { useInView } from "react-intersection-observer";
import styles from "./css/end.module.css";
import {motion} from "framer-motion"

const End = () => {

    const [ref, inView] = useInView({
        triggerOnce: false, // 요소가 한 번만 애니메이션되도록 설정
        threshold: 0.1 // 요소의 10%가 보일 때 트리거
    });

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className={styles.end_container} >
            <img className={styles.end_marble} src="/images/marble.jpg" alt="이미지"/>
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5 }}>

                <div className={styles.end_thankyou_title}>Thank You !!</div>
                <div className={styles.end_thankyou}>감사합니다</div>

                <div  className={styles.end_description}>보다 더 나은 개발자가 될 수 있도록 더욱 노력하겠습니다.</div>
            </motion.div>
        </div>
    )
}

export default End;