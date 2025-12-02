import emailjs from "@emailjs/browser";

function HireModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pj615dz",
      "template_xznnu4k",
      e.target,
      "aJWUrS8Qdgr6cJpvZ"
    )
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
      onClose(); // close modal
    })
    .catch((err) => {
      alert("Failed to send message: " + JSON.stringify(err));
    });
  };
  
  return (
    <div id="hireModal" className="hire-modal">
      <div className="hire-modal-content">
        <span className="hire-close" onClick={onClose}>&times;</span>
        <h2>Hire Me</h2>
        <form id="hire-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="hire-submit-btn">Send Message</button>
        </form>
        
        <div className="hire-or-section">
          <p>Or chat via</p>
          <a href="https://wa.me/+2349077276277?text=Hi%20Michael,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20hire%20you!" target="_blank" rel="noopener noreferrer" className="hire-whatsapp-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default HireModal;