import React, { useEffect, useRef, useState } from 'react';
import Matter, { Common, Composites, Vertices } from 'matter-js';
import styles from "./css/matter.module.css";
import T from "../../assets/images/T.png";
import E from "../../assets/images/E.png";
import D from "../../assets/images/D.png";
import Y from "../../assets/images/Y.png";
import decomp from 'poly-decomp';

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
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [score, setScore] = useState(0);

  const cnt = 0;

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
    console.log(decomp);
    Common.setDecomp(decomp);
    renderRef.current = render;

    let balls = [];

    let imgAlpha = [T, E, D, Y];

    
    var arrow = Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50'),
      chevron = Vertices.fromPath('100 0 75 50 100 100 25 100 0 50 25 0'),
      star = Vertices.fromPath('50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38'),
      horseShoe = Vertices.fromPath('35 7 19 17 14 38 14 58 25 79 45 85 65 84 65 66 46 67 34 59 30 44 33 29 45 23 66 23 66 7 53 7');
      const tShapeVertices = Vertices.fromPath('0 50 50 50 50 40 30 40 30 0 20 0 20 40 0 40 0 50');
      const eShapeVertices = Vertices.fromPath('0 50 40 50 40 40 10 40 10 30 40 30 40 20 10 20 10 10 40 10 40 0 0 0 0 50');
      const yShapeVertices = Vertices.fromPath('0 50 13 50 25 38 37 50 50 50 30 30 30 0 20 0 20 30 0 50');
      //const dShapeVertices = Vertices.fromPath('0 50 13 50 25 38 37 50 50 50 30 30 30 0 20 0 20 30 0 50');

      //const starShapeVertices = Vertices.fromPath('50 15 61 35 82 35 66 50 72 71 50 60 28 71 34 50 18 35 39 35 50 15');
      //const heartShapeVertices = Vertices.fromPath('50 30 58 20 68 20 78 30 78 40 68 50 50 70 32 50 22 40 22 30 32 20 42 20 50 30');
      //const diamondShapeVertices = Vertices.fromPath('50 10 70 30 50 50 30 30 50 10');
      //const arrowShapeVertices = Vertices.fromPath('20 0 80 0 80 20 100 20 50 70 0 20 20 20 20 0');
      //const lightningBoltShapeVertices = Vertices.fromPath('30 0 50 30 40 30 60 60 40 40 50 40 30 70 50 40 40 40 60 10 40 20 50 10 30 0');
      //const dropletShapeVertices = Vertices.fromPath('50 0 70 20 60 60 40 60 30 20 50 0');
      //const blobShapeVertices = Vertices.fromPath('40 20 50 10 60 20 70 40 60 60 40 60 30 40 40 20');

      var stack = Composites.stack(50, -window.innerHeight * 5, 10, 15, window.innerWidth / 10, window.innerWidth / 10, function(x, y) {
        var color = Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']);
        const shape = Common.choose([ tShapeVertices, eShapeVertices, yShapeVertices]);
        return Matter.Bodies.fromVertices(x, y, shape,{
            render: {
                fillStyle: color,
                strokeStyle: color,
                lineWidth: 1,
               
            }
        }, true);
      });
      // 개별 바디(body)의 크기 변경
    stack.bodies.forEach(body => {
      // 예시로 바디의 스케일(scale)을 두 배로 변경
      Matter.Body.setAngle(body, randomNumber(100));
      Matter.Body.scale(body, 3, 3);
    });

    Matter.Composite.add(engine.world, [stack])
    

    for(let i = 0; i < cnt; i ++) {
      const s = 110;
      const scale = s / 512;
      let ball = Matter.Bodies.circle(randomNumber(window.innerWidth), randomNumber(-window.innerHeight * 3), 50, {
        render: {
          fillStyle: getRandomHexColor(), // 상자 색상
          sprite: {
            texture: imgAlpha[i % 4], // 공 이미지를 삽입,
            xScale: scale,
            yScale: scale,
            
          },
        },
        
        restitution: 0.9,
        density: 50
      });

      ball.delay = 0;
      balls.push(ball);
    }

    let score_number = 0;
    ground = Matter.Bodies.rectangle(window.innerWidth * 2, window.innerHeight, window.innerWidth * 4, 10, { isStatic: true, render: {fillStyle: "#FFF"} });
    leftWall = Matter.Bodies.rectangle(0, window.innerHeight * 2, 10, window.innerHeight * 4, { isStatic: true, render: {fillStyle: "#FFF"} });
    rightWall = Matter.Bodies.rectangle(window.innerWidth, window.innerHeight * 2, 10, window.innerHeight * 4, { isStatic: true, render: {fillStyle: "#FFF"} });
    topWall = Matter.Bodies.rectangle(window.innerWidth * 2, 0, window.innerWidth * 4, 10, { isStatic: true, render: {fillStyle: "#FFF"} });

    //let goalLeftWall = Matter.Bodies.rectangle(100, 100, 5, 50, {isStatic: true});
    //let goalRightWall = Matter.Bodies.rectangle(200, 100, 5, 50, {isStatic: true});
    //let gobalBottomWall = Matter.Bodies.rectangle(150, 125, 105, 5, {isStatic: true});

    //x, y, width, height

    Matter.World.add(engine.world, [...balls, ground, leftWall, rightWall]);
    //Matter.World.add(engine.world, [goalLeftWall, goalRightWall, gobalBottomWall]);

    // 업데이트 이벤트 리스너 추가
    Matter.Events.on(engine, 'afterUpdate', () => {
      for(let i = 0; i < cnt; i ++) {
        if ((balls[i].position.x < -100 || balls[i].position.x > window.innerWidth) || balls[i].position.y > window.innerHeight) {
          Matter.Body.setPosition(balls[i], { x: window.innerWidth / 2, y: 0 });
          Matter.Body.setVelocity(balls[i], { x: 0, y: 0})
        }

        if(balls[i].position.y >= 95 && balls[i].position.y <= 100) {
          /*
          balls[i].delay += 1;
          if(balls[i].delay >= 150) {
             //특정 이상 지났을 때
             Matter.Body.setPosition(balls[i], { x: window.innerWidth / 2, y: 0 })
             score_number += 1;
             setScore(score_number);
          }
             */
        } else {
          balls[i].delay = 0;
        }
      }


    });
    /**
     * 마우스 관련 이벤트 추가
     */
    if(!isMobile) {
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
    }

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
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      }); // 세로로 100px 스크롤 다운
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
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
    {/*<div className={styles.score}>점수 : {score}</div>*/}
    {/*<img src='/images/ball.png' alt='공' className={styles.ball}></img>*/}
  </div>;
};

export default MatterComponent;
