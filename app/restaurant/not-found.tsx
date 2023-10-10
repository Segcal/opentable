"use client";

import Image from "next/image";
import errorMascot from "../../public/icons/error.png";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center h-screen">
      <Image src={errorMascot} alt="" className="w-56 mb-8 animate-bounce" />
      <div className="bg-white px-9 py-14 shadow rounded animate-pulse">
        <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
        <p className="text-reg font-bold">We Couldn't fint that restaurant</p>
        <p className="mt-6 text-sm font-light">Error Code: 404</p>
      </div>
    </div>
  );
}
