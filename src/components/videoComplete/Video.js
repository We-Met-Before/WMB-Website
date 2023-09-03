import { forwardRef, useRef } from "react";

const Video = forwardRef(({src, width, height, poster, autoPlay = true, loop = false}, ref) => (
  <video
    width={width}
    height={height}
    
    poster={poster}
    autoPlay={autoPlay}
    loop={loop}
    muted
    playsInline
    ref={ref}
  >
    <source src={`${src}.mp4`} type="video/mp4" />
    <source src={`${src}.webm`} type="video/webm" />
    <source src={`${src}.ogv`} type="video/ogg" />

    <img src={`${src}.jpg`} width={width} height={height} />
  </video>
));

export default Video;


