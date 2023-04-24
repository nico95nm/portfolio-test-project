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
              Hey im Nikola, I come from Serbia. I have been living in Vienna
              for 10+ year. I started code course for Web develpoer and this is
              my Portfolio.ss
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
