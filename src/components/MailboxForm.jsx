import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  
const MailboxForm = ({ addMailbox }) => {
  const [formData, setFormData] = useState({
    boxholder: '',
    boxsize: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addMailbox(formData);
    navigate('/mailboxes');
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boxholder:
        <input type="text" name="boxholder" value={formData.boxholder} onChange={handleChange} />
      </label>
      <br />
      <label>
        Box Size:
        <select name="boxsize" value={formData.boxsize} onChange={handleChange}>
          <option value="">Select a size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <br />
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;