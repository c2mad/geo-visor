import React from "react";
import "../../assets/css/home.css"; // Importa tu hoja de estilos CSS aquí

function VideoBackground() {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video">
        <VideoBackground>
          <source src="../../assets/images/video.mp4" type="video.mp4" />
        </VideoBackground>
      </video>
    </div>
  );
}

export default VideoBackground;
