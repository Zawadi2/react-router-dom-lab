import { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const addMailBox = (newMailBoxData) => {
    newMailBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailBoxData]);
  };
  return (
    <>
      <NavBar />
      <h1> Mailbox !</h1>
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/new" element={<MailboxForm addMailbox={addMailBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};
export default App;