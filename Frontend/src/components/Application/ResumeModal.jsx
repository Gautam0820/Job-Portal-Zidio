import React from "react";
import { jsPDF } from "jspdf";

const ResumeModal = ({ imageUrl, onClose }) => {
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const width = doc.internal.pageSize.getWidth();
      const height = (img.height * width) / img.width;
      doc.addImage(img, 'JPEG', 0, 0, width, height);
      doc.save('resume.pdf');
    };
  };

  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="resume" />
       
        <button className="download-button" onClick={downloadAsPDF}>
          Download Resume as PDF
        </button>
      </div>
    </div>
  );
};

export default ResumeModal;
