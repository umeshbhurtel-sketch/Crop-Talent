export const Globe3D = () => {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      <div className="absolute inset-[-12%] bg-primary/10 rounded-full blur-2xl -z-10" />
      <div 
        className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_0_4px_hsl(var(--primary)/.85),0_0_0_10px_hsl(var(--primary)/.25),0_40px_80px_rgba(0,0,0,.35)]"
        role="region"
        aria-label="3D interactive globe"
      >
        <iframe 
          src='https://my.spline.design/3dglobe-a8PFXMoHa8RRvn73Pev6NU9b/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          title="Interactive 3D Globe"
          className="w-full h-full scale-110"
          style={{
            clipPath: 'circle(50% at 50% 50%)',
          }}
        />
        {/* Hide Spline watermark */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[180%] px-4 py-2 rounded-full bg-gradient-to-r from-accent to-primary text-white font-bold text-xs shadow-lg pointer-events-none whitespace-nowrap">
        Kathmandu · Nepal
      </div>
    </div>
  );
};
