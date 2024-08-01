import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <>
    <h2>Mailboxes</h2>
    <ul>
      {props.mailboxes.map((currentmailbox) => (
        <li key={currentmailbox._id}>
           {currentmailbox.boxholder}
          {currentmailbox.boxsize}
          <Link to={`/mailboxes/${currentmailbox._id}`}>View Details</Link>
        </li>
      ))}
      </ul>
    </>
  );
};
export default MailboxList;