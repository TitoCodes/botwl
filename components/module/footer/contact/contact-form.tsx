import { useState } from "react";

type Contact = {
    email: string,
    subject: string,
    body: string
}

const ContactForm = () => {
    const [contact, setContact] = useState<Partial<Contact>>({});

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setContact({});
        event.target.reset();
    }

    const handleResetClick = async () => {
        let form = (document.getElementById("contact-form") as HTMLFormElement);
        form.reset();
        setContact({});
    }

    return (
        <>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="flex text-amber items-center border-b text-amber-300 border-amber-100">
                    <input onChange={(e) => setContact({ ...contact, email: e.target.value })} required className="appearance-none bg-gray border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="email" name="email" aria-label="Email"/>
                </div>
                <div className="flex items-center border-b text-amber-300 border-amber-100 py-2">
                    <input onChange={(e) => setContact({ ...contact, subject: e.target.value })} required className="appearance-none bg-gray border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="subject" name="subject" aria-label="Subject"/>
                </div>
                <div className="flex items-center border-b text-amber-300 border-amber-100">
                    <textarea onChange={(e) => setContact({ ...contact, body: e.target.value })} required className="appearance-none bg-gray border-none w-full mr-3 py-5 px-2 focus:outline-none" placeholder="body" name="body" aria-label="Body" />
                </div>
                <div className='float-right pt-3'>
                    <button className="text-xs appearance-none hover:bg-green-400 text-white py-1 px-4 border border-green-400 hover:border-green-400 rounded" type="submit">
                        Submit
                    </button>
                </div>
                <div className='float-right pt-3 pr-2'>
                    <button onClick={handleResetClick} className="text-xs appearance-none hover:bg-red-400 text-white py-1 px-4 border border-red-400 hover:border-red-400 rounded" type="reset">
                        Reset
                    </button>
                </div>
            </form>
        </>
    )
}

export default ContactForm
