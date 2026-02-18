"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Plus } from "lucide-react";
import "./DashboardStats.css";

export default function DashboardStats() {
  const stats = [
    {
      title: "Expense to be paid",
      value: 3,
      amount: 3453.0,
      box: "pink",
      big: true,
    },
    {
      title: "Invoices Due",
      value: 12,
      amount: 54320.99,
      box: "blue",
      big: true,
    },
    {
      title: "Quotes Won",
      value: 12,
      amount: 12387.4,
      box: "blue",
      icon: true,
    },
    {
      title: "Active Quotes",
      value: 4,
      amount: 12387.4,
      box: "blue",
      icon: true,
    },
    {
      title: "Job waiting for approval",
      value: 23,
      amount: 10415.0,
      box: "yellow",
    },
    {
      title: "Active Projects",
      value: 4,
      amount: 7540.0,
      box: "blue",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const loading = !inView;

  return (
    <div ref={ref} className="dashboard-wrapper">
      <div className={`dashboard-card ${inView ? "fade-in" : ""}`}>
        <div className="top-grid">
          {stats.slice(0, 2).map((item, index) => (
            <div key={index} className="stat-box big-box">
              <p className="stat-title">{item.title}</p>

              <div className={`number-box ${item.box}`}>
                {loading ? (
                  <div className="skeleton-number"></div>
                ) : (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    className="stat-number"
                  />
                )}
              </div>

              <p className="stat-amount">
                {loading ? (
                  <span className="skeleton-line"></span>
                ) : (
                  <>
                    $
                    <CountUp
                      start={0}
                      end={item.amount}
                      duration={2.5}
                      decimals={2}
                    />
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="bottom-grid">
          {stats.slice(2).map((item, index) => (
            <div key={index} className="stat-box small-box">
              {item.icon && (
                <Plus size={18} className="icon-btn" />
              )}

              <p className="stat-title small">{item.title}</p>

              <div className={`number-box ${item.box}`}>
                {loading ? (
                  <div className="skeleton-number"></div>
                ) : (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    className="stat-number small-number"
                  />
                )}
              </div>

              <p className="stat-amount light">
                {loading ? (
                  <span className="skeleton-line"></span>
                ) : (
                  <>
                    $
                    <CountUp
                      start={0}
                      end={item.amount}
                      duration={2.5}
                      decimals={2}
                    />
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
       
      </div>
       <h2 className="footer-text">
          See and predict unprofitable <br />
          business activities.
        </h2>
    </div>
  );
}
