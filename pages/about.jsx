import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Im Nikola and im from Serbia. I started doing this course cause I
              always wanted to do codding.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
