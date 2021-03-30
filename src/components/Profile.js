import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const [redirection, setRedirection] = useState(false);

  const redirectAction = () => {
    if (redirection) {
      props.history.push('/');
    }
  };

  return (
    <>
      {redirectAction()}
      <Link to={{ pathname: `${props.match.url}/posts` }}>
        Posts of profile
      </Link>
      <button onClick={() => setRedirection(!redirection)}>Redirect</button>
    </>
  );
};

export default Profile;
