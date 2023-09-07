import { Link } from "react-scroll";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Alpha Jedidia </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Aspiring Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I am highly motivated to explore the vast world of IT and eager to collaborate on an IT project with you. Let's work together and take on new challenges!
          </p><br />
        </div>
        <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-primary"
        >
          Contact Me
        </Link>    
        <span>  </span>
        <a href="./CV/AlphaJedidiaCV.pdf" download="AlphaJedidiaCV.pdf">
          <button className="btn btn-outline-primary">Download CV</button>
        </a>

      </div>
      <div className="hero--section--img">
        <img src="./img/AlphaJedidiaIMG.png" alt="Hero Section" />
      </div>
    </section>
  );
}
