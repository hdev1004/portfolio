import styles from "./css/main.module.css";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import { create, all } from 'mathjs';

const Main = () => {
    function solveQuadraticEquation(points) {
        const [[x1, y1], [x2, y2], [x3, y3]] = points;
    
        // 행렬 A
        const A = [
            [x1 * x1, x1, 1],
            [x2 * x2, x2, 1],
            [x3 * x3, x3, 1]
        ];
    
        // 행렬 B
        const B = [y1, y2, y3];
    
        // 행렬의 역행렬 계산
        function inverseMatrix(matrix) {
            const det = matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[2][1] * matrix[1][2])
                      - matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[2][0] * matrix[1][2])
                      + matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[2][0] * matrix[1][1]);
    
            if (det === 0) {
                throw new Error("The matrix is not invertible.");
            }
    
            const invDet = 1 / det;
    
            const invMatrix = [
                [
                    (matrix[1][1] * matrix[2][2] - matrix[2][1] * matrix[1][2]) * invDet,
                    (matrix[0][2] * matrix[2][1] - matrix[0][1] * matrix[2][2]) * invDet,
                    (matrix[0][1] * matrix[1][2] - matrix[0][2] * matrix[1][1]) * invDet
                ],
                [
                    (matrix[1][2] * matrix[2][0] - matrix[1][0] * matrix[2][2]) * invDet,
                    (matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0]) * invDet,
                    (matrix[1][0] * matrix[0][2] - matrix[0][0] * matrix[1][2]) * invDet
                ],
                [
                    (matrix[1][0] * matrix[2][1] - matrix[2][0] * matrix[1][1]) * invDet,
                    (matrix[2][0] * matrix[0][1] - matrix[0][0] * matrix[2][1]) * invDet,
                    (matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1]) * invDet
                ]
            ];
    
            return invMatrix;
        }
    
        // 행렬 곱셈
        function multiplyMatrixVector(matrix, vector) {
            return matrix.map(row => row.reduce((sum, value, index) => sum + value * vector[index], 0));
        }
    
        // 역행렬을 구하고 이를 B에 곱하여 a, b, c를 구합니다
        const invA = inverseMatrix(A);
        const [a, b, c] = multiplyMatrixVector(invA, B);
    
        // y = ax^2 + bx + c 함수 반환
        return function(x) {
            return a * x * x + b * x + c;
        };
    }
    
    // 사용 예시
    let points = [[0, 0], [window.innerWidth / 4 , window.innerHeight / 2], [window.innerWidth / 2, 0]];
    let quadraticFunction = solveQuadraticEquation(points);
    const [nowTime, setNowTime] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isStep2, setIsStep2] = useState(false);
    const [isStep3, setIsStep3] = useState(false);
    const [isStep4, setIsStep4] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [moveY, setMoveY] = useState(0);

    useEffect(() => {
        let number = 0;
        const interval = setInterval(() => {
            number += window.innerWidth * 0.001;
            setNowTime(number);
            setX(number);
            setY(quadraticFunction(number));


            if(number !== 0 && quadraticFunction(number) < 0) {
                clearInterval(interval);
                setY(0);
                setIsStep2(true);
            }
        }, 1);
     
        return () => {
            clearInterval(interval);
        }
    }, [])

    useEffect(() => {
        let number = window.innerWidth / 2;
        console.log("here")
        if(!isStep2 ) return;
        let points = [  [window.innerWidth / 2, 0], 
                        [window.innerWidth / 2 + window.innerWidth / 4 , window.innerHeight / 3], 
                        [window.innerWidth / 2 + window.innerWidth / 4 + window.innerWidth / 8, 0]
                    ];
        let quadraticFunction = solveQuadraticEquation(points);
        const interval = setInterval(() => {
            number += window.innerWidth * 0.001;
            setNowTime(number);
            setX(number);
            setY(quadraticFunction(number));


            if(number !== 0 && quadraticFunction(number) < 0) {
                clearInterval(interval);
                setY(0);
                setIsStep3(true);
            }
        }, 1);

        return () => {
            clearInterval(interval);
        }

    }, [isStep2])

    useEffect(() => {
        if(!isStep3) return;
        setMoveY(window.innerHeight / 2 + window.innerHeight / 4);

        setTimeout( () => {
            setIsStep4(true);
        }, 800)

        setTimeout(() => {
            setIsEnd(true)
        }, 1800)
    }, [isStep3])

    return (
        <div className={styles.main_container}>
            
            {
                isEnd ? (
                    <div className={styles.main_cover}>
                        커버
                    </div>
                ) : (
                    <div className={styles.main_ball_container}>
                        <span style={{color: "white"}}>{x}, {y}</span>
                        <motion.div
                        animate={isStep4 ? {
                            width: `5000px`,
                            height: `5000px`,
                            left: `-2500px`,
                            bottom: `-2500px`,
                            borderRadius: `100%`
                        } : isStep3 ? {bottom: `${moveY}px`, width: `200px`, height: `200px`} : {}}
                        style={{left: `${x - 100}px`,  bottom: `${y}px` }}
                        transition={{
                            duration: 1
                        }}
                        className={styles.main_ball}
                        />
                    </div>
                )
            }
           
           <div className={ styles.main_career}>
                나의 경력
           </div>

        </div>
    )
}

export default Main;