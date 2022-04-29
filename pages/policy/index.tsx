import type { NextPage } from 'next';
import Layout from '../../components/layout/layout';
import Header from 'components/elements/header';
import SubHeader from 'components/elements/sub-header';

const Policy: NextPage = () => {
    return (
        <Layout>
            <div className='flex flex-col pt-2 leading-loose pl-28 pr-28'>
                <Header title="Privacy Policy for Be Our Third Wheel"></Header>
                <div className='text-sm text-pink-100 align-left font-roboto font-light italic pb-20'>
                    This Privacy Policy document contains types of information collected and recorded by Be Our Third Wheel and how we use it. Your privacy is important to us. It&apos;s Be Our Third Wheel&apos;s policy to respect your privacy regarding any information we may collect from you across our website, https://beourthirdwheel.com, and other sites we own and operate.

                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we&apos;re collecting it and how it will be used.

                    We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we&apos;ll protect within commercially acceptable means to prevent loss and theft and unauthorized access, disclosure, copying, use, or modification.

                    We don&apos;t share any personally identifying information publicly or with third-parties, except when required to by law.

                    Our website may link to external sites that are not operated by us. Please be aware that we have no control over these sites content and practices and cannot accept responsibility or liability for their respective privacy policies.

                    You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.

                    <SubHeader title="Email"></SubHeader>
                    Be Our Third Wheel uses social authentication (Google) to uniquely identify you. Part of the authentication process records your email registered with the given service for account linking. The email recorded during authentication is NOT accessible publicly, is not used for email marketing, and is not shared with any 3rd party service.

                    <SubHeader title="Log Files"></SubHeader>
                    Be Our Third Wheel follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information. The purpose of the data is to analyze trends, administer the site, track users movement on the website, and gather demographic information.

                    <SubHeader title="Children&apos;s Information"></SubHeader>
                    Be Our Third Wheel does not knowingly collect any Personal Identifiable Information from children under the age of 13. Suppose you think that your child provided this kind of information to our website. In that case, we strongly encourage you to contact us immediately, and we will do our best to promptly remove such information from our records.

                    <SubHeader title="Online Privacy Policy Only"></SubHeader>
                    This Privacy Policy applies only to our online activities and is valid for visitors to our website regarding the information that they shared and/or collect in Be Our Third Wheel. This policy does not apply to any information collected offline or via channels other than this website.

                    <SubHeader title="Consent"></SubHeader>
                    By using our website, you, at this moment, consent to our Privacy Policy and agree to its Terms and Conditions. This policy is effective as of May 1, 2022.

                </div>
            </div>
        </Layout>

    )
}

export default Policy
