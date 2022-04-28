const PlayerProfileInfo = ({ label, answer }: any) => {
    return (
      <div className="flex flex-row space-x-2"> <span className='text-green-200'>{label}: </span>  <span className='text-pink-100'>{answer}</span></div>
    )
  }
  
  export default PlayerProfileInfo