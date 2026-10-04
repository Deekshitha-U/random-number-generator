// ---------------------------------------------------------------
// Particles.jsx  -  the little sparks that fly out of the orb
// Props:
//   burstId -> changes on every click so the animation replays
// ---------------------------------------------------------------
import "../styles/Particles.css";

const PARTICLE_COUNT = 20;

function Particles({ burstId }) {
  // Array.from makes an array of 20 empty slots we can loop over
  const sparks = Array.from({ length: PARTICLE_COUNT });

  return (
    // "key" changes each click, so React rebuilds these and CSS replays
    <div className="particles" key={burstId} aria-hidden="true">
      {sparks.map((_, i) => (
        <i
          key={i}
          style={{
            // CSS variables let each spark fly in a different direction
            "--angle": `${(360 / PARTICLE_COUNT) * i}deg`,
            "--distance": `${120 + (i % 3) * 35}px`,
            "--delay": `${(i % 5) * 20}ms`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;
