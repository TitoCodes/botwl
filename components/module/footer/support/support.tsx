import SocialLink from "components/elements/social-link"
import { faPatreon } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Support = () => {
    return (
        <>
            <div><SocialLink icon={faPatreon} title="Become our Patreon" link="https://www.patreon.com/bePatron?u=19509477" hoverColor="hover:text-red-200"></SocialLink></div>
            <div><SocialLink icon={faCoffee} title="Buy us some Coffees" link="http://buymeacoffee.com/beourthirdwheel" hoverColor="hover:text-yellow-100"></SocialLink></div>
        </>
    )
}

export default Support
