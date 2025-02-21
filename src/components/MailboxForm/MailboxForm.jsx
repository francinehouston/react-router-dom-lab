import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Removed unnecessary Navigate import

function MailboxForm({ addBox }) {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!boxOwner || !boxSize) {
      alert("Please fill in all fields.");
      return;
    }

    addBox(boxOwner, boxSize); // ✅ Call `addBox` function
    navigate("/mailboxes"); // ✅ Redirect back to mailboxes list
  };

  return (
    <div>
      <h2>Create a New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Box Size:
          <input
            type="text"
            value={boxSize}
            onChange={(e) => setBoxSize(e.target.value)}
          />
        </label>
<br/>
        <label>
          Box Owner:
          <input
            type="text"
            value={boxOwner}
            onChange={(e) => setBoxOwner(e.target.value)}
          />
        </label>

        <button type="submit">Add Mailbox</button>
      </form>
    </div>
  );
}

export default MailboxForm;
