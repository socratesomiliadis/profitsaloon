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
import Image from "next/image";

let count = 0;

export default function PlayerWithtThumbnail({
  url,
  blurURL,
  thumbURL,
}: {
  url: string;
  blurURL?: string;
  thumbURL: string;
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

  const [hasBeenInteracted, setHasBeenInteracted] = useState(false);

  const [videoState, setVideoState] = useState({
    playing: false,
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
    if (e.code === "Space" && hasBeenInteracted) {
      e.preventDefault();
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
        {!hasBeenInteracted && (
          <button
            onClick={() => {
              setHasBeenInteracted(true);
              playPauseHandler();
            }}
            className="absolute left-6 top-6 rounded-full h-20 w-20 bg-profitBlack/80 z-[11] backdrop-blur flex items-center justify-center"
          >
            <svg
              width="20%"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M17.3634 10.9747C17.3634 11.5831 17.0833 12.1276 16.6141 12.4312L3.15715 21.1364C2.92327 21.2876 2.66712 21.3632 2.4108 21.3632C2.15362 21.3632 1.89642 21.2872 1.66223 21.135C1.19428 20.8308 0.915039 20.2871 0.915039 19.6799V2.26911C0.915039 1.66188 1.1943 1.11817 1.66205 0.814375C2.13 0.510183 2.68884 0.509988 3.15697 0.812616L16.6144 9.51774C17.0836 9.82134 17.3637 10.3658 17.3637 10.9742L17.3634 10.9747Z"
                fill="#EDEDED"
              />
            </svg>
          </button>
        )}
        {!hasBeenInteracted && (
          <Image
            src={thumbURL}
            width={1920}
            height={1080}
            alt=""
            priority
            className="w-full h-full object-cover absolute z-10"
          />
        )}
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
        {hasWindow && !!blurURL && (
          <ReactPlayer
            ref={blurVideoPlayerRef}
            className="aspect-video h-auto z-[0] absolute blur-[80px] opacity-80"
            url={blurURL}
            width={videoState.isFullScreen ? "100%" : "95%"}
            height={videoState.isFullScreen ? "100%" : "95%"}
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
