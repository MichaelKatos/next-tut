import Link from 'next/link';

import '../scss/style.scss';
import Navbar from '../components/Navbar';

const Index = props => (
  <section className='page-section'>
    <Navbar />
    <h1>Hello World from Next JS</h1>
    <div className='container mx-auto'>
      <Link as={`/posts/${props.slug}`} href={`/post?title=${props.title}`}>
        <a title='Learn Next JS'>Latest post on next js</a>
      </Link>
      <img src='./static/playingtennis.jpg' />
    </div>
  </section>
);

Index.getInitialProps = async function(props) {
  let title = 'Latest post on next js';
  let slug = 'latest-post-next-js';
  return {
    title,
    slug
  };
};

export default Index;
