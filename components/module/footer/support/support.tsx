import SocialLink from "components/elements/social-link"
import { faPatreon } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Support = () => {
    return (
        <>
            <div><SocialLink icon={faPatreon} title="Patreon" link="https://www.patreon.com/beourthirdwheel"></SocialLink></div>
            <div><SocialLink icon={faCoffee} title="Buy Me A Coffee" link="http://buymeacoffee.com/beourthirdwheel"></SocialLink></div>
        </>
    )
}

export default Support
