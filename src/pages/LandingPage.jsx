import '../styles/sass/pages/_landingPage.scss';
import bgVideo from '../assets/bg-video.mp4';

const LandingPage = () => {
  return (
    <div className="hero">
        <div className="hero__head">
            <h2 className="hero__head--title">Remote Teams</h2>
        </div>
        <div className="hero__main">
            <h2 className="hero__main--desc">A one stop for remote teams for fun events</h2>
            <button className="hero__main--button btn-primary">Create a room</button>
        </div>
        <video className="hero__bg" src={bgVideo} autoPlay loop playsInline muted></video>
    </div>
  )
}

export default LandingPage;