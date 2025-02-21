import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route} from 'react-router';
import NavBar from './components/NavBar/NavBar.jsx'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'

const App = () => {
  const [mailboxes, setMailboxes] = useState([
     { _id: 1, boxSize: "Small", boxOwner: "John" },
    { _id: 2, boxSize: "Medium", boxOwner: "Jane" },
    { _id: 3, boxSize: "Large", boxOwner: "Alex" }
  ]);

  const addBox = (boxOwner,boxSize) => {
    const newMailbox = {
      _id: mailboxes.length + 1, // Unique ID based on length
      boxOwner,
      boxSize,
    };
    setMailboxes([...mailboxes, newMailbox]); // Update state with new mailbox
  };

  


  return (
<>
<NavBar />
  <Routes>
    <Route path= "/" element={<main><h1>Post Office</h1></main>}/>
    <Route path ="/mailboxes"element={<MailboxList mailboxes={mailboxes}/>}/>
    <Route path = "/new-mailbox" element={<MailboxForm addBox={addBox}/>}/>
    <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      
  </Routes>
  </>
  )
};

export default App;

