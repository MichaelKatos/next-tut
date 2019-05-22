import Link from 'next/link';

const About = () => (
  <section className='page-section'>
    <h1>About Next JS</h1>
    <Link href='/'>
      <a href='/' title='NextJS Tutorial'>
        Home
      </a>
    </Link>
  </section>
);

export default About;
