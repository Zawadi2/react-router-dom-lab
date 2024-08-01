
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }
  return (
    <>
     <h2>Box {selectedBox._id}</h2>
    <dl>
      <dt>Boxholder:</dt>
         <dd>{selectedBox.boxholder}</dd>
      <dt>Box Size:</dt>
       <dd>{selectedBox.boxsize}</dd>
    </dl>
    </>
  );
};
export default MailboxDetails;