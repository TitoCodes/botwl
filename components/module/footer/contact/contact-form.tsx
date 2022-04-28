const ContactForm = () => {
    return (
        <>
          <form>
            <div className="flex text-amber items-center border-b text-amber-300 border-amber-100">
              <input className="appearance-none bg-gray border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="email" aria-label="Email" />
            </div>
            <div className="flex items-center border-b text-amber-300 border-amber-100 py-2">
              <input className="appearance-none bg-gray border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="subject" aria-label="Subject" />
            </div>
            <div className="flex items-center border-b text-amber-300 border-amber-100">
              <textarea className="appearance-none bg-gray border-none w-full mr-3 py-5 px-2 focus:outline-none" placeholder="body" aria-label="Body" />
            </div>
            <div className='float-right pt-3'>
              <button className="text-xs appearance-none hover:bg-green-400 text-white py-1 px-4 border border-green-400 hover:border-green-400 rounded">
                Submit
              </button>
            </div>
            <div className='float-right pt-3 pr-2'>
              <button className="text-xs appearance-none hover:bg-red-400 text-white py-1 px-4 border border-red-400 hover:border-red-400 rounded">
                Reset
              </button>
            </div>
          </form>
        </>
    )
}

export default ContactForm
