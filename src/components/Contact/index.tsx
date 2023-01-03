import React, { useState } from "react";
import { StyledContact } from "./style";

const Contact: React.FC = () => {
  const [emailBody, setEmailBody] = useState("");
  const [emailSubject, setEmailSubject] = useState("");

  return (
    <StyledContact id="contact">
      <h2>Contact me</h2>
      <p>Let's work together!</p>

      <form className="contactForm">
        <div>
          <label htmlFor="inputSubjectContact">Subject</label>
          <input
            placeholder="Subject"
            id="inputSubjectContact"
            type="text"
            onChange={(e) => {
              setEmailSubject(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="textareaBodyContact">Message</label>
          <textarea
            placeholder="Message"
            id="textareaBodyContact"
            onChange={(e) => {
              setEmailBody(e.target.value);
            }}
            cols={30}
            rows={10}
          />
        </div>

        <a
          href={`mailto:josielborges555@gmail.com?subject=${emailSubject}&body=${emailBody}`}
        >
          Send Email
        </a>
      </form>
    </StyledContact>
  );
};

export default Contact;
