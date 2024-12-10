import React, { useState, useEffect } from "react";
import {
  Power,
  Volume2,
  VolumeX,
  Wifi,
  Battery,
  Signal,
  MessageCircle,
  Clock,
  Calendar,
} from "lucide-react";

const IPhone14ProMax: React.FC = () => {
  const [isScreenOn, setIsScreenOn] = useState(false);
  const [brightness, setBrightness] = useState(50);
  const [volume, setVolume] = useState(50);
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(85);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleScreen = () => {
    setIsScreenOn(!isScreenOn);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex justify-center items-center min-h-[50rem] md:min-h-screen bg-[#9f7cf0] p-4">
      <div
        className="relative w-[300px] h-[620px] bg-white 
        border-[8px] border-black 
        shadow-[8px_8px_0px_black]
        overflow-hidden"
      >
        {/* Dynamic Island - Brutalist Style */}
        <div
          className="absolute top-2 left-1/2 transform -translate-x-1/2
          w-[220px] h-[32px] bg-white border-2 border-black 
          z-40 flex justify-center items-center"
        >
          <div className="w-[8px] h-[8px] bg-black rounded-none mr-2 animate-pulse"></div>
          <div className="w-[8px] h-[8px] bg-black rounded-none"></div>
        </div>

        {/* Side Buttons - Brutalist Style */}
        <div
          className="absolute left-[-8px] top-[190px] h-[110px] w-[4px] 
          bg-black border-r border-black"
        ></div>
        <div
          className="absolute left-[-8px] top-[270px] h-[60px] w-[4px] 
          bg-black border-r border-black"
        ></div>
        <div
          className="absolute right-[-8px] top-[210px] h-[90px] w-[4px] 
          bg-black border-l border-black"
        ></div>

        {/* Screen - Brutalist Style */}
        <div
          className={`absolute top-0 left-0 w-full h-full 
          ${
            isScreenOn ? "bg-black text-white" : "bg-white"
          } transition-all duration-500 
          border-2 border-black`}
        >
          {isScreenOn && (
            <div className="p-4">
              <div className="flex justify-between items-center border-b-2 border-black pb-2">
                <div className="text-sm font-bold">{formatTime(time)}</div>
                <div className="flex items-center space-x-2">
                  <Signal className="w-4 h-4 stroke-[3]" />
                  <Wifi className="w-4 h-4 stroke-[3]" />
                  <div className="flex items-center">
                    <Battery className="w-5 h-5 stroke-[3]" />
                    <span className="text-xs ml-1">{batteryLevel}%</span>
                  </div>
                </div>
              </div>

              {/* Home Screen Quick Access - Brutalist Style */}
              <div className="grid grid-cols-4 gap-4 mt-8">
                {["Messages", "Calendar", "Clock", "Camera"].map(
                  (app, index) => (
                    <div
                      key={app}
                      className="flex flex-col items-center border-2 border-black p-2 hover:bg-black hover:text-white transition-colors"
                    >
                      {app === "Messages" && (
                        <MessageCircle className="w-10 h-10 mb-2 stroke-[3]" />
                      )}
                      {app === "Calendar" && (
                        <Calendar className="w-10 h-10 mb-2 stroke-[3]" />
                      )}
                      {app === "Clock" && (
                        <Clock className="w-10 h-10 mb-2 stroke-[3]" />
                      )}
                      <span className="text-xs font-bold">{app}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* Camera and Sensors - Brutalist Style */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="w-[12px] h-[12px] bg-white border-2 border-black"></div>
          <div className="w-[12px] h-[12px] bg-white border-2 border-black"></div>
        </div>

        {/* Control Panel - Brutalist Style */}
        {isScreenOn && (
          <div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2
            w-[320px] bg-white border-2 border-black p-5 shadow-[4px_4px_0px_black]"
          >
            <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-2">
              <Volume2 className="w-6 h-6 stroke-[3]" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-[220px] h-2 bg-black appearance-none 
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black"
              />
              <VolumeX className="w-6 h-6 stroke-[3]" />
            </div>
            <div className="flex justify-between items-center">
              <Power className="w-6 h-6 stroke-[3]" />
              <input
                type="range"
                min="0"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-[220px] h-2 bg-black appearance-none
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black"
              />
            </div>
          </div>
        )}

        {/* Power Button - Brutalist Style */}
        <button
          onClick={toggleScreen}
          className="absolute right-[-12px] top-[310px] w-[8px] h-[60px]
          bg-white border-l-2 border-black 
          hover:bg-black/10 transition-colors 
          active:bg-black/20"
        />

        {/* Bottom Speaker Grille - Brutalist Style */}
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2
          w-[160px] h-[6px] bg-white border-2 border-black"
        ></div>
      </div>
    </div>
  );
};

export default IPhone14ProMax;
