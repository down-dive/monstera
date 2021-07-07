import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { useMutation } from "@apollo/react-hooks";
import { ADD_REPLIES } from "../../utils/mutations";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiInputLabel-root": {
      color: "grey",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
      "& .MuiInputBase-input": {
        color: "var(--light)",
      },
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


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
      setContent("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  const classes = useStyles();

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        {/* Character Count: {characterCount}/280 */}
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form className={classes.root} noValidate onSubmit={handleFormSubmit}>
        <CssTextField
          label="Leave some nice words..."
          value={replyContent}
          variant="outlined"
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></CssTextField>

        <Button
          variant="contained"
          color="primary"
          style={{ margin: 10 }}
          className="col-12 col-md-3"
          type="submit"
        >
          comment
        </Button>
      </form>

      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default ReplyForm;
