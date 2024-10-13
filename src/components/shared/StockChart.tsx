import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Change the URL if your server is hosted elsewhere

const StockChart = ({ initialData }: { initialData: any }) => {
  // Ensure initialData is an array or set an empty array as default
  const [data, setData] = useState<
    Array<{ x: string; y: [number, number, number, number] }>
  >(Array.isArray(initialData) ? initialData : []);

  const options: ApexOptions = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "Stock Price Movement",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Price",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#008000",
          downward: "#ff0000",
        },
      },
    },
  };

  useEffect(() => {
    socket.on("stockData", (newData) => {
      // Ensure newData is an array before spreading it
      if (Array.isArray(newData)) {
        setData((prevData) => [...prevData, ...newData]);
      } else {
        console.error("Received non-array data:", newData);
      }
    });

    return () => {
      socket.off("stockData");
    };
  }, []);

  return (
    <div>
      <Chart
        options={options}
        series={[{ data }]}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default StockChart;
