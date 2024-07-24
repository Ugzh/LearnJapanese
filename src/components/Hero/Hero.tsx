function Hero() {
  return (
    <main>
      <div className="hero-text">
        <h1>Learn Japanese</h1>
        <p>
          Visiting the temples in Kyoto, getting a new job, or making a
          personnal connection - no matter why you want to learn we have the
          right course for you{" "}
        </p>
        <button>Get Started</button>
      </div>
      <div className="services">
        <div className="services-example">
          <img src="src/assets/book.png" />
          <p>
            <strong> Visiting the temples </strong> in Kyoto, getting a new job,
            or making a personnal connection - no matter why you want to learn
            we have the right course for you
          </p>
        </div>
        <div className="services-example">
          <img src="src/assets/headset.png" />
          <p>
            <strong> Visiting the temples </strong> in Kyoto, getting a new job,
            or making a personnal connection - no matter why you want to learn
            we have the right course for you
          </p>
        </div>
        <div className="services-example">
          <img src="src/assets/loop.png" />
          <p>
            <strong> Visiting the temples </strong> in Kyoto, getting a new job,
            or making a personnal connection - no matter why you want to learn
            we have the right course for you
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
