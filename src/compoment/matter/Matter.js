import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import styles from "./css/matter.module.css";

const MatterComponent = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const renderRef = useRef(null);
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
        render: {
          fillStyle: '#00bfff' // 상자 색상
        },
        restitution: 0.9
    });

    const box4 = Matter.Bodies.circle(window.innerWidth - 100, 500, 15, {
      render: {
        fillStyle: '#00bfff' // 상자 색상
      },
      restitution: 0.9
    });
    ground = Matter.Bodies.rectangle(window.innerWidth * 2, window.innerHeight, window.innerWidth * 4, 1, { isStatic: true });
    leftWall = Matter.Bodies.rectangle(0, window.innerHeight * 2, 1, window.innerHeight * 4, { isStatic: true });
    rightWall = Matter.Bodies.rectangle(window.innerWidth, window.innerHeight * 2, 1, window.innerHeight * 4, { isStatic: true });
    //x, y, width, height

    Matter.World.add(engine.world, [box, box2, box3, box4, ground, leftWall, rightWall]);

    Matter.Engine.run(engine);
    Matter.Render.run(render);  
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

  return <div className={styles.matter_container} ref={sceneRef}></div>;
};

export default MatterComponent;
