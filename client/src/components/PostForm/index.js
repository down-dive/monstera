import React, { useState } from "react";
// import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { useMutation } from "@apollo/react-hooks";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiInputLabel-root': {
      color: 'grey'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
      '& .MuiInputBase-input': {
        color: 'var(--light)'
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const PostForm = () => {
  const [postContent, setContent] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        // update post array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 1000) {
      setContent(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postContent },
      });

      // clear form value
      setContent("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  const classes = useStyles();

  return (
    <div>
      <form
        className={classes.root} noValidate
        onSubmit={handleFormSubmit}
        
      >
        <CssTextField
          id="outlined-multiline-flexible"
          label="How's it Going?"
          value={postContent}
          multiline
          fullWidth
          rows={4}
          variant="outlined"
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        />
        <p
          className={`m-0 ${
            characterCount === 1000 || error ? "text-error" : ""
          }`}
        >
          {/* Character Count: {characterCount}/1000 */}
          {error && <span className="ml-2">Something went wrong...</span>}
        </p>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: 10 }}
          className="col-6 col-md-3"
          type="submit"
        >
          send
        </Button>
      </form>
    </div>
  );
};

export default PostForm;
