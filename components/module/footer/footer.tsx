import NavigationLink from 'components/module/navigation/navigation-link';
import ContactForm from './contact/contact-form';
import Social from './social/social';
import Support from './support/support';

const Footer = () => {
  return (
    <footer className="flex justify-evenly font-roboto bg-gray text-pink-200 text-ml pt-6 pb-10">
      <div>
        <h3>Sitemap</h3>
        <div className='flex flex-col text-pink-100 pt-5 text-sm space-y-1 font-bold'>
          <NavigationLink></NavigationLink>
        </div>
      </div>
      <div>
        <h3>Contact Us</h3>
        <div className='pt-5 text-sm space-y-1'>
         <ContactForm></ContactForm>
        </div>
      </div>
      <div>
        <h3>Socials</h3>
        <div className='text-pink-100 pt-5 text-sm space-y-1'>
         <Social></Social>
        </div>
      </div>
      <div>
        <h3>Support Us</h3>
        <div className='text-pink-100 pt-5 text-sm space-y-1'>
        <Support></Support>
        </div>
      </div>
    </footer>
  )
}

export default Footer
