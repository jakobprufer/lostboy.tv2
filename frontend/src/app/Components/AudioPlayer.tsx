import React, { useState, useEffect, useRef } from "react";
import {
  RiVolumeUpFill,
  RiVolumeMuteFill,
  RiDownloadLine,
} from "react-icons/ri";
import { Zustand } from "../Zustand/Zustand";

interface UseAudioArgs {
  source: string;
  barRef: React.RefObject<HTMLDivElement>;
  id: string;
  setCurrentPlaying: (id: string) => void;
}

interface AudioProps {
  currentTime: number;
  duration: number;
  playing: boolean;
  isSeeking: boolean;
  isLoading: boolean;
  progress: number;
  setTime: (seconds: number) => void;
  togglePlaying: () => void;
  updateTime: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  stopPlaying: () => void;
}

function useAudio({
  source,
  barRef,
  id,
  setCurrentPlaying,
}: UseAudioArgs): [JSX.Element, AudioProps] {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isSeeking, setSeeking] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [source]);

  return [
    <audio
      src={source}
      key={source}
      hidden
      ref={audioRef}
      onLoadedData={() => {
        if (audioRef.current) {
          setLoading(false);
          setDuration(audioRef.current.duration);
        }
      }}
      onSeeking={() => setSeeking(true)}
      onSeeked={() => setSeeking(false)}
      onTimeUpdate={() => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      }}
      onEnded={() => {
        setPlaying(false);
      }}
    />,
    {
      currentTime,
      duration,
      playing,
      isSeeking,
      isLoading,
      progress: duration > 0 ? (currentTime / duration) * 100 : 0,
      setTime: (seconds: number) => {
        if (audioRef.current) {
          audioRef.current.currentTime = seconds;
        }
      },
      togglePlaying: () => {
        if (playing) {
          audioRef.current?.pause();
          setPlaying(false);
        } else {
          audioRef.current?.play();
          setPlaying(true);
        }
        setCurrentPlaying(id);
      },
      updateTime: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (barRef.current) {
          const width = barRef.current.clientWidth;
          const offset = e.nativeEvent.offsetX;
          const newProgress = offset / width;
          if (audioRef.current) {
            audioRef.current.currentTime = newProgress * duration;
          }
        }
      },
      stopPlaying: () => {
        if (audioRef.current) {
          setPlaying(false);
          audioRef.current.pause();
          setCurrentTime(audioRef.current.currentTime);
          audioRef.current.currentTime = 0;
        }
      },
    },
  ];
}

interface SanityNode {
  _key: string;
  asset: {
    _ref: string;
  };
  caption?: string;
}

interface PlayerProps {
  value: SanityNode;
}

const AudioPlayer: React.FC<PlayerProps> = ({ value }) => {
  const barRef = useRef<HTMLDivElement>(null);

  //get states from Zustand
  const { currentPlaying, setCurrentPlaying, mouseOutEvent, mouseOverEvent } =
    Zustand();

  const id = value._key;
  const { _ref: ref } = value.asset;
  const assetRefParts = ref.split("-"); // ["file", "ff7...", "mp3"]
  const index = assetRefParts[1]; // "ff7..."
  const format = assetRefParts[2]; // "mp3"
  const source = `https://cdn.sanity.io/files/vlugq6ei/production/${index}.${format}`;
  // needs to be made dynamic if we want to use other sanity project

  const [audioElement, audioProps] = useAudio({
    source,
    barRef,
    setCurrentPlaying,
    id,
  });

  useEffect(() => {
    if (currentPlaying !== id) {
      audioProps.stopPlaying();
    }
  }, [currentPlaying, id]);

  return (
    <div className="audioPlayer">
      <div className="pCont">
        {audioElement}
        <div
          className={`pPlayButton sqButton ${
            audioProps.playing ? "playing" : ""
          }`}
          onClick={audioProps.togglePlaying}
          onMouseOut={mouseOutEvent}
          onMouseOver={mouseOverEvent}
        >
          <div className="pPlayIcon"></div>
        </div>
        <div className="pBar" onClick={audioProps.updateTime} ref={barRef}>
          <div
            className="pBarProgress"
            style={{ width: `${audioProps.progress}%` }}
          ></div>
        </div>
      </div>
      <div className="pLabel">{value.caption}</div>
    </div>
  );
};

export default AudioPlayer;
