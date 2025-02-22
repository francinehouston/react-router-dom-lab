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

    addBox(boxOwner, boxSize); //  Call `addBox` function
    navigate("/mailboxes"); //  Redirect back to mailboxes list
  };

  return (
    <div>
      <h2>Create a New Mailbox</h2>
      <form onSubmit={handleSubmit}>
      <label>
         Enter a Boxholder:
          <input
            type="text"
            value={boxOwner}
            onChange={(e) => setBoxOwner(e.target.value)} required
          />
        </label>
        <br/>

        <label>
       Select a Box Size:
          {/* <input
            type="text"
            value={boxSize}
            onChange={(e) => setBoxSize(e.target.value)} 
          /> */}
          <select value ={boxSize} onChange ={(e) => setBoxSize(e.target.value)}>
<option value = "Small">Small</option>
<option value = "Medium">Medium</option>
<option value = "Large">Large</option>
          </select>
        </label>

       

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MailboxForm;
