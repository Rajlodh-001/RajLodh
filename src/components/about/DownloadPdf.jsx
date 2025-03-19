import React from "react";
import resume from "../../assets/Raj Lodh_Resume.pdf"

const DownloadCV = async () => {
  try {
    const response = await fetch(resume); 
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "RajLodh_Resume"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url); 
  } catch (error) {
    console.error("Failed to download Resume", error);
  }
};

const DownloadButton = () => {
  return (
    <button onClick={DownloadCV} className="btn">
      Download CV
    </button>
  );
};

export default DownloadButton;
