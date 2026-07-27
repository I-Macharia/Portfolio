// components/ResumeViewer.tsx
"use client";

import { useState, useEffect } from "react";

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [PdfComponents, setPdfComponents] = useState<{
    Document: any;
    Page: any;
  } | null>(null);

  useEffect(() => {
    // Dynamically import only on the client after mount
    // This avoids the Webpack + pdfjs-dist ESM crash
    (async () => {
      const { Document, Page, pdfjs } = await import("react-pdf");

      // Use CDN worker (most reliable)
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

      // Import the CSS as well
      await import("react-pdf/dist/Page/AnnotationLayer.css");
      await import("react-pdf/dist/Page/TextLayer.css");

      setPdfComponents({ Document, Page });
    })();
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  if (!PdfComponents) {
    return (
      <div className="flex h-[80vh] items-center justify-center text-gray-500">
        Loading resume viewer…
      </div>
    );
  }

  const { Document, Page } = PdfComponents;

  return (
    <div className="flex flex-col items-center">
      {/* Toolbar */}
      <div className="mb-4 flex flex-wrap items-center justify-center gap-3 rounded-lg bg-gray-100 px-4 py-2 text-sm">
        <button
          onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
          disabled={pageNumber <= 1}
          className="rounded bg-white px-3 py-1 shadow disabled:opacity-40"
        >
          ← Prev
        </button>

        <span>
          Page {pageNumber} of {numPages || "…"}
        </span>

        <button
          onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
          disabled={pageNumber >= numPages}
          className="rounded bg-white px-3 py-1 shadow disabled:opacity-40"
        >
          Next →
        </button>

        <div className="mx-2 h-5 w-px bg-gray-300" />

        <button
          onClick={() => setScale((s) => Math.max(0.6, s - 0.2))}
          className="rounded bg-white px-3 py-1 shadow"
        >
          −
        </button>
        <span>{Math.round(scale * 100)}%</span>
        <button
          onClick={() => setScale((s) => Math.min(2.5, s + 0.2))}
          className="rounded bg-white px-3 py-1 shadow"
        >
          +
        </button>

        <div className="mx-2 h-5 w-px bg-gray-300" />

        <a
          href="/resume.pdf"
          download="Ian-Macharia-Resume.pdf"
          className="rounded bg-blue-600 px-3 py-1 text-white shadow hover:bg-blue-700"
        >
          Download PDF
        </a>
      </div>

      {/* PDF Document */}
      <div className="overflow-auto rounded-lg border bg-white shadow-lg">
        <Document
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex h-[800px] w-[600px] items-center justify-center text-gray-500">
              Loading resume…
            </div>
          }
          error={
            <div className="flex h-[400px] w-[600px] items-center justify-center text-red-500">
              Failed to load PDF. Please try the download link.
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-sm"
          />
        </Document>
      </div>
    </div>
  );
}