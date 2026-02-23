"use client";

import { useState, useEffect, useRef } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

export default function Chart({ valuation, uplift }) {
  const [showModal, setShowModal] = useState(false);

  // ✅ store icon in ref
  const infoIconRef = useRef(null);

  const safeVal = valuation || 0;
  const safeUp = uplift || 0;

  const labels = ["Now", "Year 1", "Year 2", "Year 3", "Year 5"];

  const baseData =
    safeVal === 0
      ? labels.map(() => 0)
      : labels.map((_, i) => Math.round(safeVal * (1 + i * 0.03)));

  const upliftData =
    safeUp === 0
      ? labels.map(() => 0)
      : labels.map((_, i) => Math.round(safeUp * (1 + i * 0.06)));


  useEffect(() => {
    if (typeof window !== "undefined") {
      const img = new window.Image();
      img.src =
        "https://memate-website.s3.ap-southeast-2.amazonaws.com/charicon.svg";

      infoIconRef.current = img;
    }
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!CanvasRenderingContext2D.prototype.roundRect) {
        CanvasRenderingContext2D.prototype.roundRect = function (
          x,
          y,
          w,
          h,
          r
        ) {
          if (w < 2 * r) r = w / 2;
          if (h < 2 * r) r = h / 2;

          this.moveTo(x + r, y);
          this.lineTo(x + w - r, y);
          this.quadraticCurveTo(x + w, y, x + w, y + r);
          this.lineTo(x + w, y + h - r);
          this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
          this.lineTo(x + r, y + h);
          this.quadraticCurveTo(x, y + h, x, y + h - r);
          this.lineTo(x, y + r);
          this.quadraticCurveTo(x, y, x + r, y);

          return this;
        };
      }
    }
  }, []);

  // ✅ Custom Plugin Safe
  const customPlugin = {
    id: "customLabels",
    afterDatasetsDraw(chart) {
      const { ctx } = chart;

      if (chart.data.datasets.length < 2) return;

      const meta = chart.getDatasetMeta(1);
      if (!meta?.data?.length) return;

      const lastPoint = meta.data[meta.data.length - 1];
      const x = lastPoint.x;
      const y = lastPoint.y;

      ctx.save();

      ctx.beginPath();
      ctx.roundRect(x - 100, y - 30, 110, 28, 6);

     ctx.fillStyle = "transparent"; 
   ctx.strokeStyle = "transparent";

      ctx.fill();
      ctx.stroke();

      ctx.font = "12px Arial";
      ctx.fillStyle = "#000";

     ctx.fillText("With MeMate", x - 110, y - 10);

      // ✅ draw icon safely
      const icon = infoIconRef.current;
      if (icon && icon.complete) {
        ctx.drawImage(icon, x - 35, y - 23, 16, 16);
      }

      chart.withMemateBox = {
        x: x - 100,
        y: y - 30,
        w: 110,
        h: 28,
      };

      ctx.restore();
    },
  };

  const data = {
    labels,
datasets: [
  {
    label: "Projected Value",
    data: baseData,
    borderColor: "black",
    borderWidth: 2.5,
    tension: 0.45,
     pointRadius: (ctx) =>
            ctx.dataIndex === upliftData.length - 1 ? 7 : 0,
       pointBackgroundColor: "#000",
  pointBorderColor: "#000",     
  pointBorderWidth: 2,
        },
  ...(safeUp === 0
    ? []
    : [
       {
  label: "With MeMate",
  data: upliftData,
  borderWidth: 4,
  tension: 0.45,

  borderColor: (ctx) => {
    const chart = ctx.chart;
    const { ctx: canvasCtx, chartArea } = chart;

    if (!chartArea) return null;

    const gradient = canvasCtx.createLinearGradient(
      chartArea.left,
      0,
      chartArea.right,
      0
    );

    gradient.addColorStop(0, "#1ab2ff");
    gradient.addColorStop(0.5, "#ffb258");
    gradient.addColorStop(1, "#1ab2ff");

    return gradient;
  },

  fill: false,

  pointRadius: (ctx) =>
    ctx.dataIndex === upliftData.length - 1 ? 7 : 0,
   pointBackgroundColor: "#2daae1",
  pointBorderColor: "#2daae1",     
  pointBorderWidth: 2,
}


      ]),
],

  };
const options = {
    responsive: true,
    maintainAspectRatio: false,
  plugins: {
  tooltip: {
    enabled: true,
    backgroundColor: "#111",
    titleColor: "#fff",
    bodyColor: "#fff",
    borderColor: "#2daae1",
    borderWidth: 1,
    cornerRadius: 12,
    padding: 12,
    titleFont: {
      size: 14,
      weight: "bold",
    },
    bodyFont: {
      size: 13,
    },
    displayColors: false,
  },
  
}
,

    scales: {
      x: {
        grid: { color: "#f2f2f2" },
        ticks: { display: false },
      },
y: {
  min: 0,
  max: safeVal === 0 && safeUp === 0 ? 1 : undefined,
  beginAtZero: true,
  grid: { display: false },
  ticks: { display: false },
},


    },

    layout: {
      padding: {
        left: 60,  
        right: 0,
        bottom: 0, 
        top: 0,
      },
    },
      onHover: (event, elements, chart) => {
        const box = chart.withMemateBox;
        const canvas = chart.canvas;

        if (!box) {
          canvas.style.cursor = "default";
          return;
        }

        const rect = canvas.getBoundingClientRect();
        const x = event.native.clientX - rect.left;
        const y = event.native.clientY - rect.top;

        if (
          x >= box.x &&
          x <= box.x + box.w &&
          y >= box.y &&
          y <= box.y + box.h
        ) {
          canvas.style.cursor = "pointer";
        } else {
          canvas.style.cursor = "default";
        }
      },
    onClick: (event, elements, chart) => {
      const box = chart.withMemateBox;
      if (!box) return;

      const rect = chart.canvas.getBoundingClientRect();
      const x = event.native.clientX - rect.left;
      const y = event.native.clientY - rect.top;

      if (
        x >= box.x &&
        x <= box.x + box.w &&
        y >= box.y &&
        y <= box.y + box.h
      ) {
        setShowModal(true);
      }
    },
  };

  return (
    <>
    <div style={{ position: "relative", height: "400px", marginTop: "20px" }}>
        <div style={{
          position: "absolute",
          left: "-53px",
          top: "15%",
          transform: "translateY(-50%) rotate(-90deg)",
          fontSize: "15px",
          color: "rgba(136, 142, 158, 1)",
          whiteSpace: "nowrap",
          fontFamily: "sequel_sans_roman_head",
          zIndex: 10,
        }}>
          Business value
        </div>
        <div style={{ height: "390px", marginLeft: "-60px" }}>
          <Line data={data} options={options} plugins={[customPlugin]} />
        </div>
        <div style={{
          position: "absolute",
          right: "20px",
          bottom: "0px",
          fontSize: "15px",
          color: "rgba(136, 142, 158, 1)",
          fontFamily: "sequel_sans_roman_head",
          zIndex: 10,
        }}>
          5 years
        </div>
      </div>

    <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        center
        closeIcon={<span style={{ fontSize: "22px" }}></span>}
      
       classNames={{
    modal: "customCalModal",
  }}
        styles={{
          modal: {
            borderRadius: "18px",
            padding: "40px 40px 15px 40px !important",
            maxWidth: "600px",
            width: "600px",
            background: "var(--Gray-25, rgba(252, 252, 253, 1))",
          },
        }}
      >
        <div className="customCalModalHeading">
          <h2>Based on observed improvements in documentation quality, traceability, and operational consistency.</h2>
          <p>
            The projected uplift shown reflects average improvements observed in businesses using structured job history, documented workflows and centralised business records.
          </p>
          <p>
            Individual results will vary depending on business type, usage, implementation and market conditions. No guarantee of increased valuation is provided.
          </p>
        </div>
        <div className="CustomModelCloseBut">
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
}
