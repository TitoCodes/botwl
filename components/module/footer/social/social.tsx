import SocialLink from "components/elements/social-link"
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faTwitterSquare,
  faTiktok,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
      <div><SocialLink icon={faFacebookSquare} title="Facebook" link="https://www.facebook.com/gaming/BeOurThirdWheel" hoverColor="hover:text-blue-100"></SocialLink></div>
      <div><SocialLink icon={faYoutubeSquare} title="Youtube" link="https://www.youtube.com/c/BeOurThirdWheel" hoverColor="hover:text-red-400"></SocialLink></div>
      <div><SocialLink icon={faTiktok} title="TikTok" link="https://www.tiktok.com/@BeOurThirdWheel" hoverColor="hover:text-black"></SocialLink></div>
      <div><SocialLink icon={faInstagramSquare} title="Instagram" link="https://www.instagram.com/beourthirdwheel/" hoverColor="hover:text-red-300"></SocialLink></div>
      <div><SocialLink icon={faTwitterSquare} title="Twitter" link="https://twitter.com/BeOurThirdWheel" hoverColor="hover:text-blue-200"></SocialLink></div>
      <div><SocialLink icon={faDiscord} title="Discord" link="https://discord.gg/56p2MJedaH" hoverColor="hover:text-indigo-200"></SocialLink></div>
    </>
  )
}

export default Social
