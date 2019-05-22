import { withRouter } from 'next/router';

const Post = withRouter(props => {
  return (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the post</p>
    </div>
  );
});

export default Post;
