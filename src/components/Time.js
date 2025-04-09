import React from "react";

export default function Time() {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
        <div className="time">25:00</div>
        <div className="">
          <button className="btn btn-primary">開始</button>
          <button className="btn btn-primary ms-2">暫停</button>
          <button className="btn btn-primary ms-2">重設</button>
          {/* 25分 */}
        </div>
      </div>
      今日已認真?分
    </section>
  );
}
