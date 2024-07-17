import React, { useContext } from "react";
import { assets } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return track ? (
    <div className="h-[10%] bg-black flex justify-between items-start text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="image1" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="shuffele"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="shuffele"
            onClick={previous}
          />
          {playStatus ? (
            <img
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="shuffele"
              onClick={pause}
            />
          ) : (
            <img
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="shuffele"
              onClick={play}
            />
          )}
          <img
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="shuffele"
            onClick={next}
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="shuffele"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
            onClick={seekSong}
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="plays" />
        <img className="w-4" src={assets.mic_icon} alt="plays" />
        <img className="w-4" src={assets.queue_icon} alt="plays" />
        <img className="w-4" src={assets.speaker_icon} alt="plays" />
        <img className="w-4" src={assets.volume_icon} alt="plays" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="plays" />
        <img className="w-4" src={assets.zoom_icon} alt="plays" />
      </div>
    </div>
  ) : null;
};

export default Player;
