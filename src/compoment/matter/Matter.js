import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import styles from "./css/matter.module.css";

const MatterComponent = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const renderRef = useRef(null);
  let [globalEngine, setGlobalEngine] = useState(null);
  let engine = null;
  let render = null;
  let ground = null;
  let leftWall = null;
  let rightWall = null;
  let topWall = null;
  const [score, setScore] = useState(0);

  const cnt = 10;

  function getRandomHexColor() {
    // 0부터 255 사이의 무작위 정수를 생성하여 16진수로 변환합니다.
    const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    
    // HEX 색상 코드를 반환합니다.
    return `#${r}${g}${b}`;
}

  const randomNumber = (max) => {
    const randomInt = Math.floor(Math.random() * max);
    return randomInt;
  }


  const createWorld = () => {
    engine = Matter.Engine.create();
    render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent"
      },
    });
    renderRef.current = render;

    let balls = [];

    for(let i = 0; i < cnt; i ++) {
      let ball = Matter.Bodies.circle(randomNumber(window.innerWidth), randomNumber(window.innerHeight - 200), 25, {
        render: {
          fillStyle: getRandomHexColor() // 상자 색상
        },
        restitution: 0.9,
        density: 50
      });

      ball.delay = 0;
      balls.push(ball);
    }

    let score_number = 0;
    ground = Matter.Bodies.rectangle(window.innerWidth * 2, window.innerHeight, window.innerWidth * 4, 10, { isStatic: true });
    leftWall = Matter.Bodies.rectangle(0, window.innerHeight * 2, 10, window.innerHeight * 4, { isStatic: true, render: {fillStyle: "#FFF"} });
    rightWall = Matter.Bodies.rectangle(window.innerWidth, window.innerHeight * 2, 10, window.innerHeight * 4, { isStatic: true, render: {fillStyle: "#FFF"} });
    topWall = Matter.Bodies.rectangle(window.innerWidth * 2, 0, window.innerWidth * 4, 10, { isStatic: true, render: {fillStyle: "#FFF"} });

    let goalLeftWall = Matter.Bodies.rectangle(100, 100, 5, 50, {isStatic: true});
    let goalRightWall = Matter.Bodies.rectangle(200, 100, 5, 50, {isStatic: true});
    let gobalBottomWall = Matter.Bodies.rectangle(150, 125, 105, 5, {isStatic: true});

    //x, y, width, height

    Matter.World.add(engine.world, [...balls, ground, leftWall, rightWall, topWall]);
    Matter.World.add(engine.world, [goalLeftWall, goalRightWall, gobalBottomWall]);

    // 업데이트 이벤트 리스너 추가
    Matter.Events.on(engine, 'afterUpdate', () => {
      for(let i = 0; i < cnt; i ++) {
        if ((balls[i].position.x < -100 || balls[i].position.x > window.innerWidth) || (balls[i].position.y < -100 || balls[i].position.y > window.innerHeight)) {
          Matter.Body.setPosition(balls[i], { x: window.innerWidth / 2, y: 0 });
          Matter.Body.setVelocity(balls[i], { x: 0, y: 0})
        }

        if(balls[i].position.y >= 95 && balls[i].position.y <= 100) {
          balls[i].delay += 1;
          if(balls[i].delay >= 150) {
             //특정 이상 지났을 때
             Matter.Body.setPosition(balls[i], { x: window.innerWidth / 2, y: 0 })
             score_number += 1;
             setScore(score_number);
          }
        } else {
          balls[i].delay = 0;
        }
      }


    });
    /**
     * 마우스 관련 이벤트 추가
     */
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        //stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Matter.World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    setGlobalEngine(engine)
    Matter.Engine.run(engine);
    Matter.Render.run(render);  
  }

  const canvasClick = (e) => {
    return;
    if(!globalEngine?.world) return;
    console.log(e.clientX, e.clientY, globalEngine.world);
    let circle = Matter.Bodies.circle(e.clientX, e.clientY, 15, {
      restitution: 0.9
    });
    Matter.Body.setVelocity(circle, { x: 5, y: -5 }); // x 방향으로 5, y 방향으로 -5의 초기 속도

    Matter.World.add(globalEngine.world, circle);
  }

  const handleScroll = (e) => {
    if(e.deltaY > 0) {
      window.scrollBy({
        top: 30,
      }); // 세로로 100px 스크롤 다운
    } else {
      window.scrollBy({
        top: -30,
      }); // 세로로 100px 스크롤 업
    }
  
  }

  function handleResize() {
    // set canvas size to new values
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;
  
    // reposition ground
    Matter.Body.setPosition(
      ground,
      Matter.Vector.create(
        window.innerWidth / 2,
        window.innerHeight
      )
    );

    Matter.Body.setPosition(
      rightWall,
      Matter.Vector.create(
        window.innerWidth,
        window.innerHeight / 2
      )
    );
  
  }
  useEffect(() => {
    createWorld();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return <div className={styles.matter_container} ref={sceneRef} onClick={(e) => {canvasClick(e)}} onWheel={(e) => {handleScroll(e)}}>
    <div className={styles.score}>점수 : {score}</div>
    <img src='/images/ball.png' alt='공' className={styles.ball}></img>
  </div>;
};

export default MatterComponent;
