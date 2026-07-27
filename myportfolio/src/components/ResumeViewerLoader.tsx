"use client";

import dynamic from "next/dynamic";

// Keep this import client-only because react-pdf depends on browser APIs.
const ResumeViewer = dynamic(() => import("@/components/ResumeViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[80vh] items-center justify-center text-gray-500">
      Loading resume viewer…
    </div>
  ),
});

export default function ResumeViewerLoader() {
  return <ResumeViewer />;
}
