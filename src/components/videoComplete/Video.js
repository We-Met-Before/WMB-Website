import ExportedImage from "next-image-export-optimizer";
import { forwardRef, useEffect, useState } from "react";
import { isSafari } from "react-device-detect";

const Video = forwardRef(({ src, width = 300, height = 300, poster, autoPlay = true, loop = false }, ref) => {
  const [useM4V, setUseM4V] = useState(false);

  if (typeof window !== "undefined") {
    useEffect(() => {
      const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo);
      if (isSafari && hasMediaCapabilities) {
        setUseM4V(true);
      }
    });
  }

  return (
    <video width={width} height={height} poster={poster} autoPlay={autoPlay} loop={loop} muted playsInline ref={ref}>
      {useM4V && <source src={`${src}.mov`} type="video/mp4" />}

      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.ogv`} type="video/ogg" />
      <source src={`${src}.mp4`} type="video/mp4" />

      <ExportedImage src={`${src}.jpg`} width={width} height={height} alt={""} />
    </video>
  );
});

Video.displayName = "Video";

export default Video;
