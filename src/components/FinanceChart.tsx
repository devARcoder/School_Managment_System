"use client";

import Image from "next/image";

const FinanceChart = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
    </div>
  );
};

export default FinanceChart;
