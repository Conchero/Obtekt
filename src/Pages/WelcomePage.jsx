import React, { useState, useEffect, useRef } from "react";

const WelcomePage = (props) => {
  const [streaming, setStreaming] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setStreaming(false);
    videoRef.current = null;
  }, []);

  const handleActivateWebcam = async () => {

    if (videoRef.current?.srcObject) {
      const oldStream = videoRef.current.srcObject;
      oldStream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }

    if (!streaming) {
      try {

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setStreaming(true);
        props.setCamActivated(true);
        // const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // props.setCamActivated(true);
        // if (videoRef.current) {
        //   videoRef.current.srcObject = stream;
        //   setStreaming(true);
        // }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('./Image/HomePageBackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-[100vw] h-[100vh] border-[64px] border-black/50">
        <div className="w-full h-full flex flex-col gap-[32px] lg:gap-[72px] items-center justify-center text-center">
          <div className="flex flex-col gap-[24px] lg:gap-[50px] px-[64px] lg:px-[160px]">
            <h1 className="leading-none text-[64px] lg:text-[96px] font-semibold text-white">
              Welcome to <span className="text-[#00A150]">Obtekt</span>
            </h1>
            <p className="text-[20px] lg:text-[32px] text-white">
              Obtekt allows users to recognize objects in real time using their
              device’s camera. Simply open the app, point the camera at an
              object, and voilà! ;)
            </p>
          </div>

          <button
            onClick={handleActivateWebcam}
            className="flex items-center gap-2 bg-[#00A150] hover:bg-white text-white text-semibold text-[20px] lg:text-[24px] hover:text-[#00A150] font-semibold py-[12px] px-[24px] rounded-[16px] cursor-pointer transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[32px] w-[32px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 18h16M4 6v12"
              />
            </svg>
            Activate my webcam
          </button>

          {streaming && (
            <div className="mt-8">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-80 h-60 rounded-lg shadow-lg border-2 border-green-500"
              />
            </div>
          )}
        </div>

        <div className="absolute top-0 right-0 w-[192px] h-[192px] border-t-[8px] border-r-[8px] border-[#00A150]"></div>
        <div className="absolute bottom-0 left-0 w-[192px] h-[192px] border-b-[8px] border-l-[8px] border-[#00A150]"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
