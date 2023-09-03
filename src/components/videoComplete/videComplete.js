import { useEffect, useRef, useState } from "react";
import Video from "./Video";

export default function VideoComplete({ width, height, src, loop }) {
  const [playLoop, setPlayLoop] = useState(false);
  const srcRef = useRef(null);
  const loopRef = useRef(null);

  let timer;

  const onLoopEnd = () => {
    timer = setTimeout(() => {
      loopRef.current.play();
    }, Math.floor(Math.random() * 1000 + 1000));
  };

  const onSrcEnd = () => {
    setPlayLoop(true);
  };

  useEffect(() => {
    if (srcRef.current && loopRef.current) {
      srcRef.current.addEventListener("ended", onSrcEnd);
      loopRef.current.addEventListener("ended", onLoopEnd);

      if (playLoop) {
        loopRef.current.play();
      } else {
        loopRef.current.pause();
      }

      return () => {
        clearTimeout(timer);
        // loopRef.current.removeEventListener("ended", onLoopEnd);
        // srcRef.current.removeEventListener("ended", onSrcEnd);
      };
    }
  }, [srcRef, loopRef, playLoop]);

  return (
    <>
      <div style={{ opacity: playLoop ? 0 : 1 }}>
        <Video src={src} ref={srcRef} loop={false} autoPlay={true} />
      </div>
      <div style={{ opacity: playLoop ? 1 : 0 }}>
        <Video src={loop} ref={loopRef} loop={false} />
      </div>
    </>
  );
}
