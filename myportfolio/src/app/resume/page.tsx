// src/app/resume/page.tsx
import Link from "next/link";
import ResumeViewerLoader from "@/components/ResumeViewerLoader";

export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
          <ResumeViewerLoader />
        </div>
      </main>
    </div>
  );
}
