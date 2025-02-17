import Image from "next/image";

export default function Home() {
  return (
   <main>
    <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
      
     <div className="bg-red-200 flex items-center justify-center">

         <p className="text-yellow-300 font-bold text-3x1"> Everything you are. In one, simple link in bio.</p>
         <p>Join 50M+ people using Linktree for their link in bio. 
          One link to help you share everything you create, curate and sell from your
       Instagram,TikTok, Twitter, YouTube and other social media profiles.</p>
     </div>
     <div>
      your column 2
     </div>
    </section>
    <section className="bg-red-700 min-h-[100vh]">
    </section>
   </main>
  );
}
