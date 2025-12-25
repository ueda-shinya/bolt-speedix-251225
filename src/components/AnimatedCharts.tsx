import { useEffect, useState } from 'react';

export function AnimatedRadarChart() {
  const [values, setValues] = useState([0, 0, 0, 0, 0]);
  const targetValues = [85, 92, 78, 88, 95];
  const labels = ['Speed', 'Quality', 'Cost', 'Support', 'Satisfaction'];

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(prev =>
        prev.map((val, idx) => {
          const target = targetValues[idx];
          const diff = target - val;
          if (Math.abs(diff) < 0.5) return target;
          return val + diff * 0.05;
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const points = values.map((value, index) => {
    const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
    const radius = (value / 100) * 80;
    const x = 100 + Math.cos(angle) * radius;
    const y = 100 + Math.sin(angle) * radius;
    return { x, y };
  });

  const maxPoints = targetValues.map((_, index) => {
    const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
    const x = 100 + Math.cos(angle) * 80;
    const y = 100 + Math.sin(angle) * 80;
    return { x, y };
  });

  const pointsStr = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {[20, 40, 60, 80].map((radius) => (
        <polygon
          key={radius}
          points={Array.from({ length: 5 }, (_, i) => {
            const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
            const x = 100 + Math.cos(angle) * radius;
            const y = 100 + Math.sin(angle) * radius;
            return `${x},${y}`;
          }).join(' ')}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
      ))}

      {maxPoints.map((point, index) => (
        <line
          key={index}
          x1="100"
          y1="100"
          x2={point.x}
          y2={point.y}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
      ))}

      <polygon
        points={pointsStr}
        fill="url(#radarGradient)"
        stroke="#60A5FA"
        strokeWidth="2"
      />

      {points.map((point, index) => (
        <g key={index}>
          <circle
            cx={point.x}
            cy={point.y}
            r="3"
            fill="#22D3EE"
          />
          <text
            x={maxPoints[index].x + (maxPoints[index].x - 100) * 0.2}
            y={maxPoints[index].y + (maxPoints[index].y - 100) * 0.2}
            textAnchor="middle"
            fill="white"
            fontSize="10"
            fontWeight="bold"
          >
            {labels[index]}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function AnimatedBarChart() {
  const [heights, setHeights] = useState([0, 0, 0, 0, 0]);
  const targetHeights = [75, 90, 65, 85, 95];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights(prev =>
        prev.map((height, idx) => {
          const target = targetHeights[idx];
          const diff = target - height;
          if (Math.abs(diff) < 0.5) return target;
          return height + diff * 0.05;
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const barWidth = 30;
  const spacing = 10;
  const chartHeight = 120;

  return (
    <svg viewBox="0 0 220 160" className="w-full h-full">
      <defs>
        {heights.map((_, idx) => (
          <linearGradient key={idx} id={`barGradient${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        ))}
      </defs>

      <line x1="20" y1="20" x2="20" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      <line x1="20" y1="140" x2="210" y2="140" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

      {[0, 25, 50, 75, 100].map((val) => (
        <g key={val}>
          <line
            x1="20"
            y1={140 - (val / 100) * chartHeight}
            x2="210"
            y2={140 - (val / 100) * chartHeight}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
          <text
            x="10"
            y={145 - (val / 100) * chartHeight}
            fill="rgba(255,255,255,0.5)"
            fontSize="8"
            textAnchor="end"
          >
            {val}
          </text>
        </g>
      ))}

      {heights.map((height, idx) => {
        const x = 30 + idx * (barWidth + spacing);
        const barHeight = (height / 100) * chartHeight;
        const y = 140 - barHeight;

        return (
          <g key={idx}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              fill={`url(#barGradient${idx})`}
              rx="2"
            />
            <text
              x={x + barWidth / 2}
              y="152"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
            >
              {labels[idx]}
            </text>
            <text
              x={x + barWidth / 2}
              y={y - 5}
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
            >
              {Math.round(height)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
