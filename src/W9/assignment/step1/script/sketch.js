const oWidth = 800;
const oHeight = 600;

const {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Common,
  Vertices,
} = Matter;

Common.setDecomp(decomp);

// create engine
const engine = Engine.create(),
  world = engine.world;

// create runner
const runner = Runner.create();
Runner.run(runner, engine);

let mouse;
let ropeA;
let rope;

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

  const arrow1 = (vertices = [
    { x: 28, y: 0 },
    { x: 37, y: 17 },
    { x: 56, y: 20 },
    { x: 43, y: 34 },
    { x: 46, y: 53 },
    { x: 28, y: 45 },
    { x: 10, y: 53 },
    { x: 13, y: 34 },
    { x: 0, y: 20 },
    { x: 19, y: 16 },
  ]);
  const arrow2 = (vertices = [
    { x: 24, y: -15 },
    { x: 0, y: 10 },
    { x: 24, y: 38 },
    { x: 24, y: 24 },
    { x: 55, y: 24 },
    { x: 55, y: -1 },
    { x: 24, y: -1 },
  ]);
  const arrow3 = (vertices = [
    { x: 12, y: 0 },
    { x: 26, y: 0 },
    { x: 26, y: 12 },
    { x: 38, y: 12 },
    { x: 38, y: 26 },
    { x: 26, y: 26 },
    { x: 26, y: 38 },
    { x: 12, y: 38 },
    { x: 12, y: 26 },
    { x: 0, y: 26 },
    { x: 0, y: 12 },
    { x: 12, y: 12 },
  ]);

  let group = Matter.Body.nextGroup(true);

  ropeA = Matter.Composites.stack(100, 50, 7, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x, y, arrow1, {
      collisionFilter: { group: group },
    });
  });

  Matter.Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 10,
    render: { type: 'line' },
  });

  Matter.Composite.add(
    ropeA,
    Matter.Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Matter.Body.nextGroup(true);

  ropeB = Matter.Composites.stack(350, 50, 8, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x, y, arrow2, {
      collisionFilter: { group: group },
    });
  });

  Matter.Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Matter.Composite.add(
    ropeB,
    Matter.Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Matter.Body.nextGroup(true);

  ropeC = Matter.Composites.stack(600, 50, 15, 1, 10, 10, function (x, y) {
    return Matter.Bodies.fromVertices(x - 20, y, arrow3, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Matter.Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
  Matter.Composite.add(
    ropeC,
    Matter.Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  Matter.Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Matter.Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  // add mouse control
  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mouseConstraint);

  background('#3F3A4A');
  Runner.run(runner, engine);

  console.log('ropeA', ropeA);
  console.log('ropeB', ropeB);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;

  background('#ffffff');
  colorMode(HSL);
  ropeA.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      noStroke(0, 0, 0);
      fill(65, 100, 50);
      endShape(CLOSE);
    });
  });

  ropeB.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      noStroke(0, 0, 0);
      fill(180, 100, 50);
      endShape(CLOSE);
    });
  });

  ropeC.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      noStroke(0, 0, 0);
      fill(300, 100, 50);
      endShape(CLOSE);
    });
  });
}
