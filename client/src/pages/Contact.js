import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aj8bajg', 'template_az8tv1t', e.target, 'FfuHnByI_hs-CP3ew')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return(
    <div className="lg:grid lg:grid-cols-2 lg:gap-5 xl:gap-7 opacity-[50%] mt-10 md:mt-16 mx-2 sm:mx-10 md:mx-12 xl:mt-24">
      <div className='bg-[#302DE0] text-white rounded-[20px] py-5 lg:flex lg:flex-col lg:justify-between'>
        <h1 className='text-center font-semibold text-[25px] md:text-[28px] xl:text-[32px]'>Contact Me</h1>
        <p className='text-center text-[20px] md:text-[22px] xl:text-[30px] font-light mx-2 md:mx-5 mt-3 text-sm leading-normal '>
          I'm always open to any questions, comments, or opportunities that you might have. Please don't hesitate to reach out if you would like to connect!
        </p>
        <div className='flex justify-center m-4'>
          <AiOutlineMail size={25} className='mr-2' />
          <BsFacebook size={25} className='mr-2'/>
          <BsGithub size={25} className='mr-2'/>
          <BsInstagram size={25} className='mr-2'/>
          <BsLinkedin size={25} className='mr-2'/>
          <BsTwitter size={25}/>
        </div>
      </div>
      <div>
        <form onSubmit={sendEmail} className='mt-5 md:mt-10 lg:mt-2'>
          <input type='text' name='name' placeholder='Name' className='border-2 border-[#0688FF] p-1 md:p-2 w-full rounded-[10px] md:text-[22px]'/>
          <input type='text' name='subject' placeholder='Subject' className='border-2 border-[#0688FF] p-1 mt-2 md:mt-4 md:p-2 w-full rounded-[10px] md:text-[22px]'/>
          <textarea placeholder='Message' name='message' rows={5} className='border-2 border-[#0688FF] p-1 mt-2 md:mt-4 md:p-2 w-full rounded-[10px] md:text-[22px]'/>
          <button className='bg-[#31A727] w-full rounded-[10px] text-white text-[20px] md:text-[26px] p-1 md:p-2 mt-2 md:mt-6'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;