"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center min-h-screen bg-white text-black px-6">

      <div className="text-center max-w-2xl">
        <div className="flex items-center justify-center">

        <Image src="/logo.png" alt="" width={144} height={144}/>
        </div>

        {/* School Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Paradise Children <br /> Academy & College
        </h1>

        {/* Description */}
        <p className="text-lg text-black/80 mb-10">
          Welcome to Paradise Children Academy & College. 
          A modern institution dedicated to quality education, 
          student success, and building bright futures.
        </p>

        {/* Enter Dashboard Button */}
        <button
          onClick={() => router.push("/admin")}
          className="bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          Enter Dashboard
        </button>

      </div>

    </main>
  );
}