import { useForm } from 'react-hook-form'

type FormData = {
  name: string;
  email: string;
}

const Input = () => {

  const { register, handleSubmit } = useForm<FormData>()

  const submitData = async (data: FormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const final = await response.json()
    alert('Check your inbox already!')
  }

  return (
    <div className='h-screen flex justify-between'>
      <div className='bg-purple-100 basis-1/2'>
        {/* <img
          className='h-full object-cover'
          src='https://img.freepik.com/premium-vector/big-magnet-attracts-likes-good-reviews-rating-followers-social-influencer-media-content-grab-feedback-from-audience-lead-generation-satisfaction-loyalty-analysis-attracting-customers_458444-631.jpg'
        /> */}
      </div>
      <div className='bg-white basis-1/2'>
        <p className='text-7xl font-light text-center my-10 mt-20 text-purple-400'>Stay up to date <br></br> with mail-at</p>
        <p className='text-xl text-center pb-10 font-extralight mx-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugit officiis debitis eum ipsum molestias magnam eligendi possimus impedit aperiam</p>
        <form onSubmit={handleSubmit(submitData)} className='flex flex-col align-middle mx-20 space-y-6'>
          <input className='form-input' placeholder='Your name!' {...register('name')} />
          <input className='form-input' placeholder='Your Email Address!' {...register('email')} />
          <button type='submit'
            className='bg-purple-600 mt-5 w-1/2 mx-auto hover:bg-purple-700 px-5 py-3 font-bold text-xl rounded-full text-white'
          >
            Subscribe!
          </button>
        </form>
      </div>
    </div>
  )
}

export default Input
