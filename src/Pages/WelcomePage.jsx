import React, { useState,useEffect, useRef } from 'react';

const WelcomePage = (props) => {
  const [streaming, setStreaming] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setStreaming(false);
    videoRef.current = null;
  }, [])


  const handleActivateWebcam = async () => {
    if (!streaming) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        props.setCamActivated(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreaming(true);
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-full max-w-5xl h-[80vh] bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: "url('Image/HomePageBackground.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-green-500">Obtekt</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Obtekt allows users to recognize objects in real time using their device’s camera. 
            Simply open the app, point the camera at an object, and voilà! ;
          </p>
          <button
            onClick={handleActivateWebcam}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h16M4 18h16M4 6v12" />
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

        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-green-500"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-green-500"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-green-500"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-green-500"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
