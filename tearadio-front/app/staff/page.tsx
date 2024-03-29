"use client";

"use client";
import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner, Html5QrcodeScanType } from 'html5-qrcode';
import Navbar from '../components/Navbar';

const Staff = () => {
  const qrScannerRef = useRef(null);

  useEffect(() => {
    const onScanSuccess = (decodedText :any, decodedResult :any) => {
      // URL'i doğrudan aç
      window.location.href = decodedText;

    };

    const onScanFailure = (error : any) => {
      console.error(`QR Kodu Okuma Hatası: ${error}`);
    };

    const config = {
      fps: 10,
      qrbox: { width: 400, height: 400 },
      experimentalFeatures: {
        useBarCodeDetectorIfSupported: true
      },
      rememberLastUsedCamera: true,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
      aspectRatio: 1.7777778
    };

    const html5QrcodeScanner = new Html5QrcodeScanner(
      "qr-reader",
      config,
      false // verbose flag
    );

    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

    return () => {
      html5QrcodeScanner.clear();
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <Navbar></Navbar>
      <div id="qr-reader" ref={qrScannerRef} className="w-full"></div>
    </div>
  );
};

export default Staff;




