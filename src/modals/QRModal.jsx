import { useEffect } from "react";
import QRCode from "qrcode";

function QRModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  useEffect(() => {
    QRCode.toCanvas(
      document.getElementById("qrcode"),
      "https://drive.google.com/file/d/1QwWKkHYpTkdEjqesMvxhcKUfRdKPMHMU/view?usp=sharing",
      { width: 200 },
      (err) => console.log(err || "QR Generated")
    );
  }, []);

  return (
    <div className="qr-modal">
      <div className="qr-modal-content">
        <span className="qr-close" onClick={onClose}>&times;</span>

        <h2>Scan to View My CV</h2>

        <div className="qrcode-wrapper">
          <canvas id="qrcode"></canvas>
        </div>

        <p className="cv-note">
          Or click <a href="https://drive.google.com/file/d/1QwWKkHYpTkdEjqesMvxhcKUfRdKPMHMU/view?usp=sharing" target="_blank">here</a> to open directly.
        </p>
      </div>
    </div>
  );
}

export default QRModal;
