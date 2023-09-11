import ReactPlayer from "react-player/lazy";
import Control from "./Controls/Control";
import { useState, useRef, useEffect } from "react";
import { formatTime } from "@/lib/utils";
import screenfull from "screenfull";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { set } from "sanity";
import { gsap } from "gsap";
import { CircularProgress } from "@nextui-org/react";

let count = 0;

export default function Player({
  url,
  blurURL,
}: {
  url: string;
  blurURL: string;
}) {
  const videoPlayerRef = useRef<ReactPlayer>(null);
  const blurVideoPlayerRef = useRef<ReactPlayer>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);
  const [hasWindow, setHasWindow] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
    buffer: true,
    isFullScreen: false,
  });

  //Destructuring the properties from the videoState
  const { playing, muted, volume, playbackRate, played, seeking, buffer } =
    videoState;

  const currentTime = videoPlayerRef.current
    ? videoPlayerRef.current.getCurrentTime()
    : 0;
  const duration = videoPlayerRef.current
    ? videoPlayerRef.current.getDuration()
    : 0;

  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);

  const playPauseHandler = () => {
    //plays and pause the video (toggling)
    setVideoState((prev) => ({ ...prev, playing: !prev.playing }));
  };

  const rewindHandler = () => {
    //Rewinds the video player reducing 5
    videoPlayerRef.current?.seekTo(
      videoPlayerRef.current.getCurrentTime() - 10
    );
    blurVideoPlayerRef.current?.seekTo(
      //@ts-expect-error
      videoPlayerRef.current.getCurrentTime() - 10
    );
  };

  const fullScreenHandler = () => {
    //FullScreen the video player
    setVideoState((prev) => ({ ...prev, isFullScreen: !prev.isFullScreen }));
  };

  const handleFastFoward = () => {
    //FastFowards the video player by adding 10
    const currentPlus10 = videoPlayerRef.current!.getCurrentTime() + 10;

    videoPlayerRef.current?.seekTo(currentPlus10);

    blurVideoPlayerRef.current?.seekTo(currentPlus10);
  };

  //console.log("========", (controlRef.current.style.visibility = "false"));
  const progressHandler = (state: any) => {
    if (count > 3) {
      console.log("close");
      if (controlRef.current) controlRef.current.style.visibility = "hidden"; // toggling player control container
    } else if (
      controlRef.current &&
      controlRef.current.style.visibility === "visible"
    ) {
      count += 1;
    }

    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const seekHandler = (value: number) => {
    setVideoState({ ...videoState, played: value / 100 });
    videoPlayerRef.current?.seekTo(value / 100);
    blurVideoPlayerRef.current?.seekTo(value / 100);
  };

  const seekMouseUpHandler = (value: number) => {
    console.log(value);

    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current?.seekTo(value / 100);
    blurVideoPlayerRef.current?.seekTo(value / 100);
  };

  const volumeChangeHandler = (value: number) => {
    const newVolume = value / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
    });
  };

  const volumeSeekUpHandler = (value: number) => {
    const newVolume = value / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0 ? true : false,
    });
  };

  const muteHandler = () => {
    //Mutes the video player
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const onSeekMouseDownHandler = () => {
    setVideoState({ ...videoState, seeking: true });
  };

  const mouseMoveHandler = () => {
    if (controlRef.current) controlRef.current.style.visibility = "visible";
    count = 0;
  };

  const bufferStartHandler = () => {
    console.log("Bufering.......");
    setVideoState({ ...videoState, buffer: true });
  };

  const bufferEndHandler = () => {
    console.log("buffering stoped ,,,,,,play");
    setVideoState({ ...videoState, buffer: false });
  };

  const handleSpaceBar = (e: any) => {
    if (e.code === "Space") {
      playPauseHandler();
    }
  };

  const handleArrowRight = (e: any) => {
    if (e.code === "ArrowRight") {
      setResetTimer((prev) => !prev);
      handleFastFoward();
    }
  };

  const handleArrowLeft = (e: any) => {
    if (e.code === "ArrowLeft") {
      setResetTimer((prev) => !prev);
      rewindHandler();
    }
  };

  const handleArrows = (e: any) => {
    handleArrowLeft(e);
    handleArrowRight(e);
  };

  useEffect(() => {
    addEventListener("keydown", handleSpaceBar);

    return () => {
      removeEventListener("keydown", handleSpaceBar);
    };
  }, [videoState.playing]);

  useEffect(() => {
    addEventListener("keydown", handleArrows);

    return () => {
      removeEventListener("keydown", handleArrows);
    };
  }, []);

  useEffect(() => {
    if (videoState.isFullScreen) {
      //@ts-expect-error
      screenfull.request(wrapperRef.current);
    } else {
      //@ts-expect-error
      screenfull.exit(wrapperRef.current);
    }
  }, [videoState.isFullScreen]);

  useEffect(() => {
    setShowControls(true);
    const timer = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [videoState.playing, resetTimer]);

  useEffect(() => {
    const controlsTl = gsap.timeline({ paused: true });
    const wrapper = wrapperRef.current as HTMLDivElement;
    if (showControls) {
      controlsTl.to(controlRef.current, {
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });
      if (videoState.isFullScreen) wrapper.style.cursor = "auto";
      controlsTl.restart();
    } else if (!showControls) {
      controlsTl.to(controlRef.current, {
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
      });
      if (videoState.isFullScreen) wrapper.style.cursor = "none";
      controlsTl.restart();
    }

    return () => {
      controlsTl.kill();
    };
  }, [showControls, videoState.isFullScreen]);

  return (
    <div
      // onKeyDown={(e) => {
      //   if (e.code === "32") playPauseHandler();
      // }}
      ref={wrapperRef}
      onMouseMove={() => {
        setResetTimer((prev) => !prev);
      }}
      className="w-full"
    >
      <div
        className="relative w-full aspect-video h-auto flex items-center justify-center"
        onMouseMove={mouseMoveHandler}
      >
        {hasWindow && (
          <div
            style={{
              borderRadius: videoState.isFullScreen ? "0" : "1rem",
            }}
            className="video-wrapper z-[1] w-full h-full overflow-hidden"
          >
            <ReactPlayer
              ref={videoPlayerRef}
              className="w-full h-full relative overflow-hidden"
              url={url}
              width="100%"
              height="100%"
              playing={playing}
              volume={volume}
              muted={muted}
              onProgress={progressHandler}
              onBuffer={bufferStartHandler}
              onBufferEnd={bufferEndHandler}
            />
          </div>
        )}
        {hasWindow && (
          <ReactPlayer
            ref={blurVideoPlayerRef}
            className="aspect-video h-auto z-[0] absolute blur-[80px] opacity-80"
            url={blurURL}
            width={videoState.isFullScreen ? "100%" : "90%"}
            height={videoState.isFullScreen ? "100%" : "90%"}
            playing={playing}
            muted={true}
          />
        )}

        {buffer && (
          <div className="absolute z-[4] pointer-events-none inset-0 flex items-center justify-center">
            <CircularProgress
              classNames={{
                track: "stroke-white/20",
                indicator: "stroke-white",
              }}
              size="sm"
            />
          </div>
        )}
        <div
          onClick={playPauseHandler}
          onDoubleClick={fullScreenHandler}
          className="absolute z-[2] inset-0"
        ></div>
        <Control
          controlRef={controlRef}
          onPlayPause={playPauseHandler}
          playing={playing}
          onRewind={rewindHandler}
          onForward={handleFastFoward}
          played={played}
          onSeek={seekHandler}
          onSeekMouseUp={seekMouseUpHandler}
          volume={volume}
          onVolumeChangeHandler={volumeChangeHandler}
          onVolumeSeekUp={volumeSeekUpHandler}
          mute={muted}
          onMute={muteHandler}
          duration={formatDuration}
          currentTime={formatCurrentTime}
          onMouseSeekDown={onSeekMouseDownHandler}
          toggleFullScreen={fullScreenHandler}
          isFullScreen={videoState.isFullScreen}
        />
      </div>
    </div>
  );
}
