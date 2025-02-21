import React from "react";
import { useParams } from "react-router-dom";

function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams(); // ✅ Get mailboxId from URL params
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId)); // ✅ Find mailbox by ID

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>; // ✅ Proper error handling
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {selectedBox._id}</p>
      <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
      <p><strong>Size:</strong> {selectedBox.boxSize}</p>
    </div>
  );
}

export default MailboxDetails;
