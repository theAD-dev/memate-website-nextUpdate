"use client";

import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useEffect } from "react";
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

const safeVal = valuation ? valuation : 0;
const safeUp = uplift ? uplift : 0;
// console.log("SafeVal:", safeVal, "Uplift:", uplift);

  const labels = ["Now", "Year 1", "Year 2", "Year 3", "Year 5"];

const baseData =
  safeVal === 0
    ? labels.map(() => 0)
    : labels.map((_, i) => Math.round(safeVal * (1 + i * 0.03)));

const upliftData =
  safeUp === 0
    ? labels.map(() => 0)
    : labels.map((_, i) => Math.round(safeUp * (1 + i * 0.06)));


  const customPlugin = {
    id: "customLabels",
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(1);

      if (!meta?.data?.length) return;
      const lastPoint = meta.data[meta.data.length - 1];
      const x = lastPoint.x;
      const y = lastPoint.y;

      ctx.save();
      ctx.font = "12px Arial";
      ctx.fillStyle = "transparent";
      ctx.strokeStyle = "transparent";

      ctx.beginPath();
      ctx.roundRect(x - 100, y - 30, 90, 25, 6);
      ctx.fill();
      ctx.stroke();
      const svgString = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.26215 0.199111C5.7016 0.530932 4.25464 1.2642 3.06425 2.32646C1.87386 3.38871 0.981245 4.74319 0.474604 6.25604C-0.0320373 7.7689 -0.135166 9.38776 0.175408 10.9527C0.485981 12.5176 1.19951 13.9744 2.24548 15.1791C2.37026 15.3288 2.44415 15.5143 2.45643 15.7088C2.46872 15.9033 2.41877 16.0966 2.31382 16.2608L1.89215 16.9399C1.80603 17.0787 1.75855 17.238 1.75463 17.4013C1.75072 17.5646 1.7905 17.7259 1.86986 17.8687C1.94923 18.0114 2.06529 18.1304 2.20605 18.2133C2.34681 18.2961 2.50715 18.3398 2.67048 18.3399H8.90798C11.2775 18.3655 13.5682 17.4895 15.3161 15.8895C17.064 14.2895 18.1386 12.085 18.3221 9.72244C18.4062 8.3125 18.1637 6.90217 17.6135 5.60131C17.0632 4.30044 16.2201 3.14414 15.1498 2.22247C14.0795 1.3008 12.8109 0.638633 11.4428 0.287537C10.0747 -0.0635592 8.644 -0.0932719 7.26215 0.199111ZM9.17132 3.33994C9.42477 3.34011 9.67249 3.41542 9.88314 3.55635C10.0938 3.69728 10.2579 3.89751 10.3548 4.13172C10.4517 4.36592 10.477 4.6236 10.4274 4.87216C10.3779 5.12073 10.2557 5.34902 10.0765 5.52818C9.89719 5.70734 9.66881 5.82933 9.42022 5.87871C9.17162 5.9281 8.91396 5.90267 8.67982 5.80564C8.44567 5.70861 8.24555 5.54433 8.10476 5.33358C7.96396 5.12283 7.88882 4.87507 7.88882 4.62161C7.88904 4.28162 8.02425 3.95562 8.26475 3.71529C8.50524 3.47495 8.83132 3.33994 9.17132 3.33994ZM10.1963 14.1733H9.17132C8.9503 14.1733 8.73834 14.0855 8.58206 13.9292C8.42578 13.7729 8.33798 13.561 8.33798 13.3399V9.04494H8.14632C7.9253 9.04494 7.71334 8.95715 7.55706 8.80087C7.40078 8.64459 7.31298 8.43262 7.31298 8.21161C7.31298 7.9906 7.40078 7.77864 7.55706 7.62235C7.71334 7.46607 7.9253 7.37828 8.14632 7.37828H9.17132C9.39233 7.37828 9.60429 7.46607 9.76057 7.62235C9.91685 7.77864 10.0046 7.9906 10.0046 8.21161V12.5066H10.1963C10.4173 12.5066 10.6293 12.5944 10.7856 12.7507C10.9419 12.907 11.0296 13.1189 11.0296 13.3399C11.0296 13.561 10.9419 13.7729 10.7856 13.9292C10.6293 14.0855 10.4173 14.1733 10.1963 14.1733Z" fill="#888E9E"/>
      </svg>`;

          const img = new Image();
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);

           img.onload = () => {
        ctx.drawImage(img, x - 100, y - 25, 19, 19);
        URL.revokeObjectURL(url);
      };
      img.src = url;
      
      ctx.fillStyle = "#000";
      ctx.fillText("With MeMate ", x - 90, y - 13);

      chart.withMemateBox = {
        x: x - 100,
        y: y - 30,
        w: 100,
        h: 25,
      };

      ctx.restore();
    },
  };

useEffect(() => {
  if (typeof window !== "undefined") {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
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
}, []);
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
        },
  ...(safeUp === 0
    ? []
    : [
        {
          label: "With MeMate",
          data: upliftData,
          borderWidth: 4,
          tension: 0.45,
          borderColor: "#2daae1",
          fill: true,
          backgroundColor: "rgba(45,170,225,0.08)",
          pointRadius: (ctx) =>
            ctx.dataIndex === upliftData.length - 1 ? 7 : 0,
        },
      ]),
],

  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },

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
          left: "-50px",
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          fontSize: "14px",
          color: "#666",
          whiteSpace: "nowrap",
          fontFamily: "Arial, sans-serif",
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
          fontSize: "14px",
          color: "#666",
          fontFamily: "Arial, sans-serif",
          zIndex: 10,
        }}>
          5 years
        </div>
      </div>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        top
        closeIcon={<span style={{ fontSize: "22px" }}></span>}
        styles={{
          modal: {
            borderRadius: "18px",
            padding: "40px 40px 15px 40px",
            maxWidth: "600px",
            width: "95%",
            background: "var(--Gray-25, rgba(252, 252, 253, 1))",
            fontFamily: "'sequel_sans', sans-serif !important",
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