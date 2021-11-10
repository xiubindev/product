import React, { useRef } from 'react';
import gsap from 'gsap';
import { Svg } from './styles';

interface Options {
  numPoints: number;
  centerX: number;
  centerY: number;
  minRadius: number;
  maxRadius: number;
  minDuration: number;
  maxDuration: number;
  tl?: GSAPTimeline;
  points?: { x: number; y: number }[];
}

const WaveCircle = () => {
  const circleRef = useRef<SVGPathElement>(null);
  const circle = createCircle({
    numPoints: 28,
    centerX: 420,
    centerY: 450,
    minRadius: 400,
    maxRadius: 450,
    minDuration: 1,
    maxDuration: 2,
  });

  function createCircle(options: Options) {
    const points: Options['points'] = [];
    const path = circle;
    const slice = (3.14 * 2) / options.numPoints;
    const startAngle = gsap.utils.random(0, 360);

    const tl = gsap.timeline({
      onUpdate: update,
    });
    for (let i = 0; i < options.numPoints; i++) {
      const angle = startAngle + i * slice;
      const duration = gsap.utils.random(options.minDuration, options.maxDuration);

      const point = {
        x: options.centerX + Math.cos(angle) * options.minRadius,
        y: options.centerY + Math.sin(angle) * options.minRadius,
      };
      const tween = gsap.to(point, {
        duration,
        x: options.centerX + Math.cos(angle) * options.maxRadius,
        y: options.centerY + Math.sin(angle) * options.maxRadius,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      tl.add(tween, -gsap.utils.random(0, duration));
      points.push(point);
    }

    options.tl = tl;
    options.points = points;

    function update() {
      circleRef.current?.setAttribute('d', drawLines(points) as string);
    }
    console.log(points);
    return options;
  }

  function drawLines(data: Options['points'] | undefined = []) {
    if (!data) {
      return;
    }
    if (data.length < 1) return 'M0 0';
    const tension = 1.5;

    const size = data.length;
    let path = `M${data[0].x} ${data[0].y} C`;

    for (let i = 0; i < size; i++) {
      let p0;
      let p1;
      let p2;
      let p3;

      p0 = data[(i - 1 + size) % size];
      p1 = data[i];
      p2 = data[(i + 1) % size];
      p3 = data[(i + 2) % size];

      const x1 = p1.x + ((p2.x - p0.x) / 6) * tension;
      const y1 = p1.y + ((p2.y - p0.y) / 6) * tension;

      const x2 = p2.x - ((p3.x - p1.x) / 6) * tension;
      const y2 = p2.y - ((p3.y - p1.y) / 6) * tension;

      path += ` ${x1} ${y1} ${x2} ${y2} ${p2.x} ${p2.y}`;
    }

    return `${path}z`;
  }

  return (
    <Svg id="svg" viewBox="0 0 800 800">
      <path ref={circleRef} fill="#211e36" />
      <g id="dot-container" />
    </Svg>
  );
};

export default WaveCircle;
