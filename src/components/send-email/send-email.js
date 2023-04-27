import React from 'react';
import './send-email.scss';
import SendIcon from '@mui/icons-material/Send';

const SendEmail = ({value, setValue, handleSubmit}) => {
  return (
    <div className="updates">
      <h3>Get updates</h3>
      <form onSubmit={handleSubmit} className="send-email">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder='Enter your email'
          type="text" />
        <SendIcon
          style={{ cursor: 'pointer' }}
          onClick={handleSubmit}
          fontSize='small' />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default SendEmail;