import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// import { useMutation } from '@apollo/react-hooks';
// import { ADD_POST } from '../../utils/mutations';
// import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const PostForm = () => {
  const [postContent, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  // const [addPost, { error }] = useMutation(ADD_POST, {
  //   update(cache, { data: { addPost } }) {
  //     try {
  //       // update post array's cache
  //       // could potentially not exist yet, so wrap in a try/catch
  //       const { posts } = cache.readQuery({ query: QUERY_POSTS });
  //       cache.writeQuery({
  //         query: QUERY_POSTS,
  //         data: { posts: [addPost, ...posts] }
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     // update me object's cache
  //     const { me } = cache.readQuery({ query: QUERY_ME });
  //     cache.writeQuery({
  //       query: QUERY_ME,
  //       data: { me: { ...me, posts: [...me.posts, addPost] } }
  //     });
  //   }
  // });

  // // update state based on form input changes
  // const handleChange = event => {
  //   if (event.target.value.length <= 280) {
  //     setText(event.target.value);
  //     setCharacterCount(event.target.value.length);
  //   }
  // };

  // // submit form
  // const handleFormSubmit = async event => {
  //   event.preventDefault();

  //   try {
  //     await addPost({
  //       variables: { postContent }
  //     });

  //     // clear form value
  //     setText('');
  //     setCharacterCount(0);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div>
      {/* <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p> */}
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        // onSubmit={handleFormSubmit}
      >
        <TextField
          id="outlined-multiline-flexible"
          label="How's it Going?"
          multiline
          fullWidth
          rows={4}
          defaultValue="type here..."
          variant="outlined"
        />
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;