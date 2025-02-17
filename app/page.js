import Image from "next/image";

export default function Home() {
  return (
   <main>
    <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">

        <div className=" flex justify-center flex-col gap-4 ml-[10vw] gap-3">

         <p className="text-yellow-300 font-bold text-5xl"> Everything you </p>
         <p className="text-yellow-300 font-bold text-5xl">are. In one,</p>
         <p className="text-yellow-300 font-bold text-5xl"> simple link in bio.</p>
         <p className="text-yellow-300 text-xl">Join 50M+ people using Linktree for their link in bio. 
          One link to help you share everything you create, curate and sell from your
       Instagram,TikTok, Twitter, YouTube and other social media profiles.</p>
       <div className="input flex gap-3">
            <input className="px-1 py-1 rounded-md focus:outline-green-800" type="text" placeholder="linktr.ee/your-url"/>
           <button className="bg-pink-300 rounded-full px-4 py-4 font-semibold">Claim your Bittree</button>
       </div>
     </div>
     <div className="flex items-center justify-center flex-col mr-[10vw] mt-[6vw] ">
      <img src="/img.png" alt="homepage image "/>
     </div>
    </section>
    <section className="bg-red-700 min-h-[100vh]">
    </section>
   </main>
  );
}
