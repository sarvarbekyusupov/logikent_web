"use client";

import dynamic from "next/dynamic";

const RouteMap = dynamic(() => import("@/components/RouteMap"), {
  ssr: false,
  loading: () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "650px", background: "#f7fafc" }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ),
});

export default function RouteMapWrapper() {
  return <RouteMap />;
}
