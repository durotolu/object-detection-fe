"use client";

import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  load as cocoSSDLoad,
  ObjectDetection as CocoSsdObjectDetection,
  DetectedObject,
} from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { renderPredictions } from "@/utils/render-predictions";

let detectInterval: NodeJS.Timeout;

const ObjectDetection: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  async function runCoco() {
    setIsLoading(true);
    const net: CocoSsdObjectDetection = await cocoSSDLoad();
    console.log("hefre");
    setIsLoading(false);

    detectInterval = setInterval(() => {
      runObjectDetection(net);
    }, 10);
  }

  async function runObjectDetection(net: CocoSsdObjectDetection) {
    console.log("here");
    if (
      canvasRef.current &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      // find detected objects
      const detectedObjects: DetectedObject[] = await net.detect(
        webcamRef.current.video as HTMLVideoElement,
        undefined,
        0.6
      );

      console.log("detectedObjects", detectedObjects);

      const context = canvasRef.current.getContext("2d");
      if (context) {
        renderPredictions(detectedObjects, context);
      }
    }
  }

  const showmyVideo = () => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = myVideoWidth;
      webcamRef.current.video.height = myVideoHeight;
    }
  };

  useEffect(() => {
    runCoco();
    showmyVideo();
    return () => clearInterval(detectInterval); // Clear interval on component unmount
  }, []);

  return (
    <div>
      <div className="relative flex justify-center items-center gradient rounded-md w-[264px]">
        {/* webcam */}
        <Webcam
          // ref={webcamRef}
          className="rounded-[10px] border border-[#755AE2] w-full"
          muted
        />
        {/* canvas */}
        {/* <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-99999 w-[264px] lg:h-[168px]"
          /> */}
      </div>
    </div>
  );
};

export default ObjectDetection;
