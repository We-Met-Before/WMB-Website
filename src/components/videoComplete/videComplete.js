import { useEffect, useRef, useState } from "react";
import Video from "./Video";

export default function VideoComplete({ width, height, src, loop }) {
  const [playLoop, setPlayLoop] = useState(false);
  const srcRef = useRef(null);
  const loopRef = useRef(null);

  let timer;

  const onLoopEnd = () => {
    setPlayLoop(false);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setPlayLoop(true);
    }, Math.random() * 1000 + 1000);
  };

  useEffect(() => {
    if (srcRef.current && loopRef.current) {
      srcRef.current.addEventListener("ended", onLoopEnd);
      loopRef.current.addEventListener("ended", onLoopEnd);

      if (playLoop) {
        loopRef.current.play();
      } else {
        loopRef.current.pause();
      }

      return () => {
        loopRef.current?.removeEventListener("ended", onLoopEnd);
        srcRef.current?.removeEventListener("ended", onLoopEnd);
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
