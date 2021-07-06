import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_REPLIES} from '../../utils/mutations';


const ReplyForm = (props) => {
   let postId = props.post_id
  const [replyContent, setContent] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addReply, { error }] = useMutation(ADD_REPLIES);

  const handleReplies = () => {
     
  }

  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setContent(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };
  
  // submit form
  const handleFormSubmit = async event => {
    console.log(props)
    event.preventDefault();

    try {
      await addReply({
        variables: { replyContent, postId}
      }).then(data => (console.log(data)))

      // clear form value
      setContent('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        {/* Character Count: {characterCount}/280 */}
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Leave some nice words..."
          value={replyContent}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          comment
        </button>
      </form>

      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ReplyForm;