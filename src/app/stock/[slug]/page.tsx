"use client";

import StockChart from "@/components/shared/StockChart";

const Page = () => {
  const sampleData: { x: string; y: [number, number, number, number] }[] = [];

  const getRandomStockData = (previousClose: number) => {
    const open = previousClose + (Math.random() - 0.5) * 10;
    const high = open + Math.random() * 10;
    const low = open - Math.random() * 10;
    const close = low + Math.random() * (high - low);
    return [open, high, low, close];
  };

  let lastClosePrice = 100;

  for (let i = 0; i < 60; i++) {
    const date = new Date();
    date.setSeconds(date.getSeconds() - i);
    const timestamp = date.toISOString();

    const stockDataPoint: any = {
      x: timestamp,
      y: getRandomStockData(lastClosePrice),
    };

    lastClosePrice = stockDataPoint.y[3];
    sampleData.push(stockDataPoint);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Stock Buy and Sell Dashboard</h1>
      <StockChart initialData={sampleData} />
    </div>
  );
};

export default Page;
