import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const PdfModal = ({ file, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(0.5);
  const scrollRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleWheel = (e) => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;

    const atTop = scrollTop === 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
    if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
      e.preventDefault();
    }
  };

  return (
    <div id='pdfmodal' >
      <button
        onClick={onClose}
        className='pdfclose'
      >
        Close
      </button>
      <nav className="pdfnav">
        <button 
        className='pdfprev'
        onClick={() => setPageNumber((p) => Math.max(1, p - 1))}>
          Prev{" "}
        </button>
        <button
          onClick={() => setPageNumber((p) => Math.min(numPages || 1, p + 1))}
        >
          Next
        </button>
        <span >
          Page {pageNumber} / {numPages || "?"}
        </span>
        <button onClick={() => setScale((s) => Math.max(0.5, s - 0.2))}>
          -
        </button>
        <button onClick={() => setScale((s) => Math.min(1, s + 0.2))}>+</button>
      </nav>

      <div
        className="pdfcontainer"
        ref={scrollRef}
        onWheel={handleWheel}
      >
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfModal;
