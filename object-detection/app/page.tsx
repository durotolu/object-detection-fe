"use client";

import webcam from "../icons/webcam.svg";
import mic from "../icons/mic.svg";
import bulb from "../icons/bulb.svg";
import wifi from "../icons/wifi.svg";
import webcam_small from "../icons/webcam-small.svg";
import wifi_bad from "../icons/wifi-bad.svg";
import internet from "../icons/internet.svg";
import lighting from "../icons/lighting.svg";
import ObjectDetection from "../components/ObjectDetection";
import checkmark from "../icons/checkmark.svg";
import alert from "../icons/alert.svg";
import Check from "../components/Check";
import getNetworkDownloadSpeed from "@/utils/internet-speed";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Description from "@/components/Description";

export default function Home() {
  const [proceed, setProceed] = useState<boolean>(false);
  const [internetState, setInternetState] = useState<boolean | null>(null);
  const [isWebcamActive, setIsWebcamActive] = useState<boolean>(false);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);

  const isDisabled = !internetState || !isAudioActive || !isWebcamActive

  useEffect(() => {
    getNetworkDownloadSpeed
      .then((res) => {
        console.log(res);
        if (parseInt(res.mbps) > 3) setInternetState(true);
        else setInternetState(false);
      })
      .catch(() => setInternetState(null));
  }, [internetState]);

  useEffect(() => {
    (async () => {
      const video = await navigator.mediaDevices.getUserMedia({ video: true });
      setIsWebcamActive(video.active);
      const audio = await navigator.mediaDevices.getUserMedia({ audio: true });
      navigator.userActivation;
      setIsAudioActive(audio.active);
    })();
  }, [isWebcamActive, isAudioActive]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="max-w-[832px] mt-6 pl-12 pr-16 pt-9 pb-10 shadow-[3px_5px_20px_10px_#0000000A] rounded-[20px]">
        <Description />
        <div className="mb-10 flex">
          <ObjectDetection />
          <div className="grid grid-cols-2 place-items-center ml-11">
            <Check
              icon={isWebcamActive ? checkmark : webcam}
              label={"Webcam"}
              iconTop={isWebcamActive && webcam_small}
              labelTop={"Webcam small"}
            />
            <Check
              icon={
                internetState === false ? alert : internetState ? checkmark : internet
              }
              label={"Internet Speed"}
              iconTop={(internetState === false) ? wifi_bad : internetState ? wifi : null}
              labelTop={"Wifi"}
            />
            <Check
              icon={isAudioActive ? checkmark : webcam}
              label={"Gadget mic"}
              iconTop={isAudioActive && mic}
              labelTop={"Mic"}
            />
            <Check
              icon={isWebcamActive ? checkmark : lighting}
              label={"Lighting"}
              iconTop={isWebcamActive && bulb}
              labelTop={"Bulb"}
            />
          </div>
        </div>
        <button
          className={`bg-[#755AE2] text-sm font-medium text-white py-[13px] px-[17px] rounded-[7px] ${isDisabled && "opacity-40"}`}
          onClick={() => setProceed(!proceed)}
          disabled={isDisabled}
        >
          Take picture and continue
        </button>
      </div>
      <Footer />
      {proceed && <Modal setProceed={setProceed} />}
    </main>
  );
}
