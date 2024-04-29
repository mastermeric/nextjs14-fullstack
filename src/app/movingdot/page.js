"use client"
import React, {useState} from 'react'

const MovigDot = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
      });
      return (
        <div
          onPointerMove={e => {
            setPosition({
              x: e.clientX,
              y: e.clientY
            });
          }}
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
          }}>
          <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 50,
            height: 50,
          }} />
        </div>
      );
}

export default MovigDot