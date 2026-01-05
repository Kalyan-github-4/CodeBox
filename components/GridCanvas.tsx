"use client";

import { useEffect, useRef } from 'react';

// Particle class
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;

  constructor(canvas: HTMLCanvasElement) {
    this.x = 0;
    this.y = 0;
    this.size = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.opacity = 0;
    this.color = '';
    this.reset(canvas);
  }
  
  reset(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.color = ['#fbbf24', '#60a5fa', '#a78bfa', '#34d399'][Math.floor(Math.random() * 4)];
  }
  
  update(canvas: HTMLCanvasElement) {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

interface GridCanvasProps {
  particleCount?: number;
  gridSize?: number;
  connectDistance?: number;
  backgroundColor?: string;
  showGradientOverlay?: boolean;
}

const GridCanvas = ({
  particleCount = 80,
  gridSize = 40,
  connectDistance = 120,
  backgroundColor = 'rgba(15, 23, 42, 1)',
  showGradientOverlay = true,
}: GridCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles: Particle[] = [];
    
    function drawGrid(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      ctx.strokeStyle = 'rgba(100, 100, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas));
    }

    // Animation loop
    function animate() {
      if (!canvas || !ctx) return;
      
      // Clear canvas with background color
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      drawGrid(ctx, canvas);
      
      // Update and draw particles
      ctx.globalAlpha = 1;
      particles.forEach(particle => {
        particle.update(canvas);
        particle.draw(ctx);
      });
      
      // Connect nearby particles
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectDistance) {
            ctx.strokeStyle = '#60a5fa';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!canvas) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset particles for new canvas size
      particles.forEach(particle => {
        particle.reset(canvas);
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, gridSize, connectDistance, backgroundColor]);

  return (
    <>
      <canvas 
        ref={canvasRef}
        className='absolute inset-0 w-full h-full pointer-events-none'
      />
      {showGradientOverlay && (
        <div className='absolute inset-0 bg-linear-to-b from-transparent via-slate-900/50 to-slate-900/90' />
      )}
    </>
  );
};

export default GridCanvas;