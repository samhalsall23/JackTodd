import React from "react";
import ProjectTile from "./components/ProjectTile";


export default function Page() {
  return (
    <main>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom:'60px' }}>
        <img src="https://i.ibb.co/xDGBhH7/WHITELOGO-jack.png" alt='logo' style={{ width: '50%', height: 'auto' }} />
        <p style={{ textAlign: 'center', fontSize:'20px' }}>Multi-media graphic designer specialising in publication design, branding and advertising</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', justifyContent: 'center', width: '90%', margin: '0 auto' }} className="outer">
        <div style={{ backgroundColor: '#F0F0F0', paddingBottom: '100%', position: 'relative' }}>
          <ProjectTile />
        </div>
        <div style={{ backgroundColor: '#F0F0F0', paddingBottom: '100%', position: 'relative' }}>
          <ProjectTile />
        </div>
        <div style={{ backgroundColor: '#F0F0F0', paddingBottom: '100%', position: 'relative' }}>
          <ProjectTile />
        </div>
        <div style={{ backgroundColor: '#F0F0F0', paddingBottom: '100%', position: 'relative' }}>
          <ProjectTile />
        </div>
        <div style={{ backgroundColor: '#F0F0F0', paddingBottom: '100%', position: 'relative' }}>
          <ProjectTile />
        </div>
        <div style={{ backgroundColor: '#F0F0F0', paddingBottom: '100%', position: 'relative' }}>
          <ProjectTile />
        </div>
        
        {/* Repeat the above div for each project tile */}
      </div>
    </main>
  );
}
