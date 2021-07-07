import React from 'react';
import { useMutation } from "@apollo/react-hooks";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

function DangerButton() {
    const [confirmationClicks, setConfirmationClicks] = React.useState(0);
    const [posting, setPosting] = React.useState(false);

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

    const handleDanger = async () => {
        if (confirmationClicks == 0) {
            setConfirmationClicks(1);
        } else {
            setPosting(true);
            navigator.geolocation.getCurrentPosition(async (pos) => {
                const crd = pos.coords;
                const lat = `${pos.coords.latitude}`;
                const long = `${pos.coords.longitude}`;
    
                try {
                    await addPost({
                        variables: {
                            postContent: "I am in danger!",
                            sos: true,
                            lat: lat,
                            long: long,
                        }
                    });
                    setConfirmationClicks(2);
                } catch (e) {
                    console.error(e);
                }
                setPosting(false);
            }, async (err) => {
                console.warn(`ERROR(${err.code}) : Could not get location. ${err.message}`);
                try {
                    await addPost({
                        variables: {
                            postContent: "I am in danger!",
                            sos: true,
                        }
                    });
                    setConfirmationClicks(2);
                } catch (e) {
                    console.error(e);
                }
                setPosting(false);
            });
        }
    }

    return (
        <div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '100px', width: '100px', backgroundColor: '#9c0000', borderRadius: 50, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}} onClick={handleDanger}>
                {posting ? <h3 style={{color: 'white'}}>Posting...</h3> : confirmationClicks == 1 ? <p style={{color: 'white', wordWrap: 'normal', fontSize: 12}}>Click again to confirm you are in danger</p> : <h2 style={{color: 'white'}}>S.O.S.</h2>}
            </div>
        </div>
    )
}

export default DangerButton;