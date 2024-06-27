import styles from "./css/project_card.module.css";
import Card from "../../assets/images/card1.png";
import { Modal } from "antd";
import { useState } from "react";

const ProjectCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={styles.project_card_container} onClick={showModal}>
                <img src={Card} alt="사진"/>
                <div className={styles.title}>글루따띠온</div>
                <div className={styles.description}>MSA 구조와 BoilerPlate 적용을 위해 만들어본 '글루따띠온' 쇼핑몰 입니다.</div>

                <div className={styles.tags}>
                    <div>팀</div>
                    <div>반응형</div>
                    <div>사이드</div>
                </div>
            </div>
            
            {
                isModalOpen ? (
                    <>
                    <div className={styles.project_detail_background}></div>
                    <div className={styles.project_detail_modal}>
                        <div className={styles.project_detail_header}>
                            <div className={styles.project_tags}>
                                <div>팀</div>
                                <div>반응형</div>
                                <div>사이드</div>
                            </div>
    
                            <div className={styles.project_title}>글루따띠온</div>
                            <div className={styles.project_date}>
                                <div>2024.06 - 2024.07</div>
                                <div>2인 (백엔드1명, 프론트 1명)</div>
                            </div>
    
                            <div className={styles.close_btn} onClick={handleCancel}>
                                닫기
                            </div>
                        </div>
                    </div>
                    </>
                ) : (
                    <></>
                )
            }    
        </>
    )
}

export default ProjectCard;