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

    const box = Matter.Bodies.circle(400, 200, 15, {
        render: {
          fillStyle: '#00bfff' // 상자 색상
        },
        restitution: 0.9,
        
    });
    const box2 = Matter.Bodies.circle(390, 500, 15, {
        render: {
          fillStyle: '#00bfff' // 상자 색상
        },
        restitution: 0.9
    });

    const box3 = Matter.Bodies.circle(window.innerWidth - 100, 200, 15, {
      
        restitution: 0.9,
    });

    const box4 = Matter.Bodies.circle(window.innerWidth - 100, 500, 15, {
      render: {
        fillStyle: '#00bfff' // 상자 색상
      },
      restitution: 0.9
    });
    ground = Matter.Bodies.rectangle(window.innerWidth * 2, window.innerHeight, window.innerWidth * 4, 10, { isStatic: true });
    leftWall = Matter.Bodies.rectangle(0, window.innerHeight * 2, 1, window.innerHeight * 4, { isStatic: true });
    rightWall = Matter.Bodies.rectangle(window.innerWidth, window.innerHeight * 2, 1, window.innerHeight * 4, { isStatic: true });
    //x, y, width, height

    Matter.World.add(engine.world, [box, box2, box3, box4, ground, leftWall, rightWall]);

    // 업데이트 이벤트 리스너 추가
    Matter.Events.on(engine, 'afterUpdate', () => {
      if ((box.position.x < -100 || box.position.x > window.innerWidth) || (box.position.y < -100 || box.position.y > window.innerHeight)) {
        Matter.Body.setPosition(box, { x: window.innerWidth / 2, y: 0 });
      }
    });

    // 업데이트 이벤트 리스너 추가
    Matter.Events.on(engine, 'afterUpdate', () => {
      if ((box2.position.x < -100 || box2.position.x > window.innerWidth) || (box2.position.y < -100 || box2.position.y > window.innerHeight)) {
        Matter.Body.setPosition(box2, { x: window.innerWidth / 2, y: 0 });
      }
    });

    // 업데이트 이벤트 리스너 추가
    Matter.Events.on(engine, 'afterUpdate', () => {
      if ((box3.position.x < -100 || box3.position.x > window.innerWidth) || (box3.position.y < -100 || box3.position.y > window.innerHeight)) {
        Matter.Body.setPosition(box3, { x: window.innerWidth / 2, y: 0 });
      }
    });

    // 업데이트 이벤트 리스너 추가
    Matter.Events.on(engine, 'afterUpdate', () => {
      if ((box4.position.x < -100 || box4.position.x > window.innerWidth) || (box4.position.y < -100 || box4.position.y > window.innerHeight)) {
        Matter.Body.setPosition(box4, { x: window.innerWidth / 2, y: 0 });
      }
    });

    /**
     * 마우스 관련 이벤트 추가
     */
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
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

  return <div className={styles.matter_container} ref={sceneRef} onClick={(e) => {canvasClick(e)}}></div>;
};

export default MatterComponent;
