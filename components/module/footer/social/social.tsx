import SocialLink from "components/elements/social-link"
import {
    faFacebookSquare,
    faInstagramSquare,
    faYoutubeSquare,
    faTwitterSquare,
    faDiscord
  } from "@fortawesome/free-brands-svg-icons";
  
  import {
    faCoffee
  } from "@fortawesome/free-solid-svg-icons"

const Social = ({ name, style }: any) => {
    return (
        <>
            <div><SocialLink icon={faFacebookSquare} title="Facebook" link="https://www.facebook.com/gaming/BeOurThirdWheel"></SocialLink></div>
          <div><SocialLink icon={faInstagramSquare} title="Instagram" link="https://www.instagram.com/beourthirdwheel/"></SocialLink></div>
          <div><SocialLink icon={faYoutubeSquare} title="Youtube" link="https://www.youtube.com/c/BeOurThirdWheel"></SocialLink></div>
          <div><SocialLink icon={faTwitterSquare} title="Twitter" link="https://twitter.com/BeOurThirdWheel"></SocialLink></div>
          <div><SocialLink icon={faDiscord} title="Discord" link="https://discord.gg/56p2MJedaH"></SocialLink></div>
        </>
    )
}

export default Social
