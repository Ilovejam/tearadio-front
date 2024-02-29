import React from 'react';
import Navbar from '../components/Navbar';
import BottomNavBar from '../components/BottomNavBar';
import IdCardStaff from '../components/IdCardStaff';
import Image from 'next/image';
const page = () => {
  return (
    <div>
      <Navbar />
      {/* Flex container to center and display cards side by side on larger screens, and stack them on smaller screens */}
      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-20">
        <div>
          {/* Title for Member Card */}
          <Image src='https://help.sap.com/doc/f53c64b93e5140918d676b927a3cd65b/Cloud/en-US/docs-en/guides/features/fiori-ui/android/images/qrcode-single-mode.png' width={400} height={400} alt='qrscan'>

          </Image>
        </div>
        
      </div>
      <BottomNavBar />
    </div>
  );
}

export default page;
