import styles from "./css/project_card.module.css";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';

const ProjectCard = ({info}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [markdown, setMarkdown] = useState('');

    const showModal = () => {
        setIsModalOpen(true);
        document.body.style.overflowY = "hidden";
        document.querySelector("html").style.overflowY = "hidden";
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        document.body.style.overflowY = "auto";
        document.querySelector("html").style.overflowY = "auto";
    };


    useEffect(() => {
        fetch(`/posting/${info.fileName}`)
        .then((response) => response.text())
        .then((text) =>  setMarkdown(text));
    }, [])
    

    return (
        <>
            <div className={styles.project_card_container} onClick={showModal}>
                <img src={`/posting/${info.thumbnail}`} alt="사진"/>
                <div className={styles.title}>{info.title}</div>
                <div className={styles.description}>{info.subTitle}</div>

                <div className={styles.tags}>
                    {
                        info.tags.map((tag) => (
                            <div>{tag}</div>
                        ))
                    }
                </div>
            </div>
            
            {
                isModalOpen ? (
                    <>
                        <div className={styles.project_detail_background}>
                            <div className={styles.project_detail_modal}>
                                <div className={styles.project_detail_header}>
                                    <div className={styles.project_tags}>
                                        {
                                            info.tags.map((tag) => (
                                                <div>{tag}</div>
                                            ))
                                        }
                                    </div>
            
                                    <div className={styles.project_title}>{info.title}</div>
                                    <div className={styles.project_date}>
                                        <div>{info.date}</div>
                                        <div>{info.team}</div>
                                    </div>

                                    <div 
                                    className={styles.editor_container}
                                    style={{
                                        width: "80%",
                                        paddingBottom: "20px"
                                    }}>
                                       <ReactMarkdown  rehypePlugins={[rehypeRaw]} components={{
                                        code(props) {
                                            const {children, className, node, ...rest} = props
                                            const match = /language-(\w+)/.exec(className || '')
                                            return match ? (
                                              <SyntaxHighlighter
                                                {...rest}
                                                PreTag="div"
                                                children={String(children).replace(/\n$/, '')}
                                                language={match[1]}
                                                style={oneLight}
                                              />
                                            ) : (
                                              <code {...rest} className={className}>
                                                {children}
                                              </code>
                                            )
                                          }
                                    
                                       }}>{markdown}</ReactMarkdown>
                                    </div>
                                    
                                    <div className={styles.close_btn}>
                                        <div className={styles.close_btn_card} onClick={handleCancel}>
                                            <img src="/images/close.png" alt="close"/>
                                        </div>

                                        {
                                            info.link ? (
                                                <a href={info.link} target="_blank">
                                                    <div className={styles.close_btn_card}>
                                                        <img src="/images/link.png" alt="link"/>    
                                                    <div>배포 링크</div>
                                                    </div>
                                                </a>
                                            ) : (
                                                <></>
                                            )
                                        }

                                        {
                                            info.github ? (
                                                <a href={info.github} target="_blank">
                                                    <div className={styles.close_btn_card}>
                                                            <img src="/images/github.png" alt="github"/>
                                                        <div>깃허브 링크</div>
                                                    </div>
                                                </a>
                                            ) : (
                                                <></>
                                            )
                                        }

                                        {
                                            info.blog ? (
                                            <a href={info.blog} target="_blank">
                                                <div className={styles.close_btn_card}>
                                                        <img src="/images/blog.png" alt="blog"/>
                                                    <div>관련 블로그</div>
                                                </div>
                                            </a>
                                            ) : (
                                                <></>
                                            )
                                        }


                                    </div>
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