export default function AnimatedLine({classes, children}) {
  return (
<div className={`relative lg:w-[681px] h-[332px] overflow-hidden ${classes}`}>
  {/* Fondo negro */}
  <div className="absolute inset-0" />

  {/* Wrapper que rota el div */}
  <div
    className="absolute w-full h-full flex items-center justify-center"
    style={{
      transform: 'rotate(16deg)'
    }}
  >
    {/* Capa animada que se moverá en la dirección del eje rotado */}
    <div className="absolute lg:w-[1200px] w-full h-[60px] animate-diagonal"
        style={{
          background: 'radial-gradient(27.01% 35.67% at 52.65% 97.17%, #F00 0%, rgba(0,0,0,0) 100%);',
          backgroundBlendMode: 'screen',
          mixBlendMode: 'screen',
        }}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="560" height="212" viewBox="0 0 560 212" fill="none" style={{transform: 'rotate(-15.3deg)'}} className="mt-[-80px] lg:ms-[-150px] ms-[-380px] w-[360px] lg:w-full">
          <path d="M-199.088 0.543211C-135.746 17.5921 -72.4615 34.828 -9.22652 52.2495C54.0219 69.6317 117.22 87.1833 180.409 104.766C243.585 122.405 306.748 140.083 369.866 157.929C432.994 175.733 496.069 193.726 559.092 211.909C495.752 194.866 432.461 177.632 369.228 160.207C305.98 142.824 242.782 125.273 179.592 107.684C116.418 90.0412 53.2553 72.3634 -9.86298 54.5177C-72.9908 36.7135 -136.066 18.7199 -199.092 0.540868L-199.088 0.543211Z" fill="white"/>
      </svg>
  </div>
</div>
  );
}