import React, { useRef ,useState, useEffect} from "react";
import Home from "../public/assets/svg/Home.svg";
import Ambassador from "../public/assets/svg/Ambassador.svg";
 import WebDev from "../public/assets/svg/WebDev.svg";
import Programs from "../public/assets/svg/Programs.svg";
import Games from "../public/assets/svg/Gaming.svg";
import Image from "next/image";
import Link from "next/link";
import AdBanner from "./AdBanner";

const Landingpage = () => {
  const [contributorsData, setContributorsData] = useState([]);
  useEffect(() => {
    // Fetch the contributors' data from GitHub API
    fetch("https://api.github.com/repos/swapnilsparsh/DevEmpire/contributors")
      .then((response) => response.json())
      .then((data) => {
        setContributorsData(data);
      })
      .catch((error) => {
        console.error("Error fetching contributors data:", error);
      });
  }, []);
  const ambassadorSectionRef = useRef(null);
    const callToActionScroll = () => {
    ambassadorSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="landingpage">
        <div className="container-landing">
          <div className="landing-page-header">
            <div className="header-details">
              <h1>Developer Empire</h1>
              <p>
                It's time to close those extra tabs. Welcome to your one-stop solution for all 
                resources and details on ambassador/fellowship programs, open source programs, web dev tools and so much more!
              </p>
              <div className="landing-page-btn-container">
                <div className="discord-button">
                  <a
                    className="discord"
                    href="https://discord.com/invite/V4W4Z4sTmh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="../assets/share-img/Discord-share.png" alt="" />
                  </a>
                </div>
                <div className="explore-all-btn">
                  <div
                    className="call-to-action-btn"
                    onClick={callToActionScroll}
                  >
                    Explore all
                  </div>
                </div>
              </div>
            </div>
            <div className="homesvg">
              <Image id="home" src={Home} alt="website logo" />
            </div>
          </div>
        </div>

        <div
          ref={ambassadorSectionRef}
          className="container-landing ambassador-section"
        >
          <div className="landing-page-details">
            <div className="header-image">
              <Image id="home" src={Ambassador} alt="Ambassador Illustration" />
            </div>
            <div className="heading-text">
              <Link href="/ambassador">
                <h1>
                  <u> Ambassador </u>
                </h1>
              </Link>
              <p>
                Find the perfect program for you from 75+ ambassador and fellowship programs from all over the world
              </p>
            </div>
          </div>
          <div className="landing-page-details">
            <div className="heading-text second">
              <Link href="/programs">
                <h1>
                  <u> Programs </u>
                </h1>
              </Link>
              <p>
                Looking for an open-source program to apply to? You're just a click away. Find all details right here!
              </p>
            </div>
            <div className="header-image">
              <Image id="home" src={Programs} alt="Programs Illustration" />
            </div>
          </div>
          <div className="landing-page-details">
            <div className="header-image">
              <Image id="home" src={WebDev} alt="Web Dev Illustration" />
            </div>
            <div className="heading-text">
              <Link href="/webdev">
                <h1>
                  <u> Web Dev Tools </u>
                </h1>
              </Link>
              <p>
                Power up your website with awesome tools from 
                CSS generators and stock photos, to icons, illustrations, vectors and so much more, all at one place
              </p>
            </div>
          </div>
          <div className="landing-page-details">
            <div className="heading-text second">
              <Link href="/games">
                <h1>
                  <u> Games </u>
                </h1>
              </Link>
              <p>
                Ever heard of 'All work and no play makes the developer dull' ? Here's your chance to mix some play into your work !
              </p>
            </div>
            <div className="header-image">
              <Image id="home" src={Games} alt="Games Illustration" />
            </div>
          </div>
          <div className="landing-page-details">
            <div className="heading-text second">
              <h1>
                Contributors
              </h1>
              </div>
            </div>
        </div>
      </div>
      {contributorsData.map((contributor) => (
  <div  className="contributors"  key={contributor.id}>
    <img src={contributor.avatar_url} alt={contributor.login} />
    
  </div>
))}
      <AdBanner
        data-ad-slot="7434970023"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      
    </>
  );
};

export default Landingpage;
