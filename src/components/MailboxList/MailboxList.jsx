import React from "react";
import { Link } from "react-router-dom";

function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailbox List</h2>
      {mailboxes.length === 0 ? (
        <p>No mailboxes added yet.</p> // ✅ Show message if no mailboxes
      ) : (
        <ul>
          {mailboxes.map((mailbox) => (
            <li key={mailbox._id} className="mail-box">
              <Link to={`/mailboxes/${mailbox._id}`}>
                Mailbox #{mailbox._id} - {mailbox.boxOwner}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MailboxList;
