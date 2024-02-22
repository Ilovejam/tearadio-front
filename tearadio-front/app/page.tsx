import Image from "next/image";
import Navbar from "./components/Navbar";
import MemberCard from "./member-card/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <MemberCard 
        title="Digital Member Passport" 
        subtitle="MEMBERSHIP" 
        imageUrl="/profile.jpg"
      />
    </main>
  );
}
