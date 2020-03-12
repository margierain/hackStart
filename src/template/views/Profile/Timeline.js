import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import axios from 'template/utils/axios';
import AddPost from 'template/components/AddPost';
import PostCard from 'template/components/PostCard';

const useStyles = makeStyles(theme => ({
  root: {},
  posts: {
    marginTop: theme.spacing(2),
  },
  post: {
    marginBottom: theme.spacing(2),
  },
}));

function Timeline({ className = undefined, ...rest }) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchPosts = () => {
      axios.get('/api/users/1/posts').then(response => {
        if (mounted) {
          setPosts(response.data.posts);
        }
      });
    };

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <AddPost />
      <div className={classes.posts}>
        {posts.map(post => (
          <PostCard className={classes.post} key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

Timeline.propTypes = {
  className: PropTypes.string,
};

export default Timeline;
