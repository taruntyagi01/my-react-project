import React from 'react';
import bgimage from '../assets/bg-image.jpg';
import teamImage from '../assets/team-image.jpg';
import teaImage from '../assets/book-image.jpg';
import { FaHome,FaBriefcase,FaFileInvoiceDollar,FaReact,FaGithub,FaFacebook,FaTwitter,FaInstagram,FaRegCopyright, FaPhoneAlt} from "react-icons/fa";
import contactImage from '../assets/contact-image.jpg'


const Home = () => {
  return (
    <div >
      <nav className='h-13 w-full bg-[#272525]  text-white fixed   gap-10 flex items-center pl-10 top-0 z-10 shadow-md shadow-slate-200/20 '>
        <a href="#home"><div>Home</div></a>
        <a href="#about"><div>About</div></a>
        <a href="#contact"><div>Contact us</div></a>
        <a href="#term"></a><div>Terms</div>
        <div className='flex items-center justify-center w-12 h-10 bg-white border border-gray-300 rounded-full shadow-sm ml-220'><FaReact className="text-indigo-600 w-6 h-6 flex "/></div><p className='text-blue-600 text-2xl'>The Gem</p>
      </nav>
    <div id='home' style={{backgroundImage:`url(${bgimage})`,backgroundSize:"cover",
  height:"1000px", display:"flex", justifyContent:"center",alignItems:"center" }} ><div><div className='text-4xl text-white ml-25 '>The Sky Is The The Limit </div> <div className='text-3xl text-white mt-10'>We provide world class Financial Assistance</div><div className='h-15 w-50 bg-green-500 rounded-2xl text-2xl flex justify-center items-center mt-10 ml-45'>Read More~</div></div></div>
  <div id='about' className='w-full h-350px bg-white flex justify-evenly items-center'>
            <div className='flex flex-col gap-4 w-1/4 justify-center items-center h-90' id='about'>
                <div className='w-16 h-16 rounded-full bg-green-600 flex items-center justify-center'><FaHome />
                  
                </div>
                <p className='text-xl font-semibold'>Investment Banking</p>
                <p className='text-center'>Banking is the backbone of a nation’s economy, enabling secure financial transactions and savings.</p>
            </div>

            <div className='flex flex-col gap-4 w-1/4 justify-center items-center'>
                <div className='w-16 h-16 rounded-full bg-green-600 flex items-center justify-center'><FaBriefcase/>
                
                </div>
                <p className='text-xl font-semibold'>Portfolio Manager</p>
                <p className='text-center'>It helps you stand out to potential employers or clients by highlighting your expertise and experience.</p>
            </div>

            <div className='flex flex-col gap-4 w-1/4 justify-center items-center'>
                <div className='w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mt-4'><FaFileInvoiceDollar/>
                
                </div>
                <p className='text-xl font-semibold'>Tax & Custodial</p>
                <p className='text-center'>Tax is a mandatory financial charge imposed by the government to fund public services and infrastructure.</p>
            </div>
        </div>
        <div className='w-full h-130 flex'>
            <img className='h-full w-1/2 object-cover' src={teamImage} alt='team-image'/>
            <div className='bg-green-500 h-full w-1/2'>
                <div className='relative top-30 left-10 mr-10'>
                    <p className='font-bold text-white mb-1'>What you are looking for</p>
                    <h2 className='text-4xl text-white mb-5 font-thin'>We provide bespoke solutions</h2>
                    <p className='text-white mb-8'>Success is not achieved overnight; it is the result of consistent effort, dedication, and learning from failure. Every step forward, no matter how small, contributes to the larger goal. Challenges will arise, but they are opportunities to grow stronger and wiser. Believing in yourself and staying focused makes a big difference.</p>
                    <button className='rounded-sm px-7 py-3 text-white bg-transparent border border-white cursor-pointer hover:scale-90 transition-all duration-150'>Read More</button>
                </div>
            </div>
        </div>
         <div id='cases' className='w-full h-100 flex flex-col gap-6 justify-center items-center'>
            <p className='font-semibold'>This is what we do</p>
            <h2 className='text-5xl font-thin'>Business Cases</h2>
            <p className='font-thin mt-2'>Planning, execution, feedback, and iteration shape sustainable business models!</p>
        </div>

        <div id='blog' className='w-full h-130 flex'>
            <div className='bg-blue-500 w-1/2'>
                <div className='relative top-30 left-15 mr-16'>
                    <p className='font-bold text-white mb-1'>May 21 2020</p>
                    <h2 className='text-4xl text-white font-thin mb-5'>Blog Post 1</h2>
                    <p className='text-white mb-8'>A successful business starts with a clear vision and strong purpose. It grows through strategic planning, innovation, and consistent execution. Building trust with customers and adapting to market changes are essential. Every challenge offers a lesson, and long-term success depends on resilience, teamwork, and a commitment to continuous improvement.</p>
                    <button className='rounded-sm px-7 py-3 text-white bg-transparent border border-white cursor-pointer hover:scale-90 transition-all duration-150'>Read Our Blog</button>
                </div>
            </div>
            <img className='h-full w-1/2 object-cover' src={teaImage} alt='teaImage'/>
        </div>
<div className='w-full h-100 flex flex-col items-center justify-center'>
            <p className='font-semibold mb-3'>Who we are</p>
            <h2 className='text-4xl font-thin mb-6'>Our Professional Team</h2>
            <p className='font-thin'>A strong team turns vision into we know already baby reality through collaboration and trust.</p>
            <div className='w-full flex justify-center gap-10 mt-30'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='font-semibold'>Ravi kumar</p>
                    <p className='font-thin'>President</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='font-semibold'>Tarun tyagi</p>
                    <p className='font-thin'>Vice President</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='font-semibold'>Git hub</p>
                    <p className='font-thin'>Marketting Head</p>
                </div>
            </div>
        </div>
<div id='contact' className='w-full h-130 flex'>
            <img className='h-full w-1/2 object-cover' src={contactImage} alt='contact-image'/>
            <div className='h-full w-1/2 bg-slate-100'>
                <form className='flex flex-col gap-7 ml-20 mt-30'>
                    <label className='mb-4 text-4xl font-thin tracking-wider'>Request Callback</label>

                    <input type='text' placeholder='Enter Name' required
                        className='w-11/12 bg-white py-2 rounded-sm px-2 text-sm border-none focus:outline-none'
                    />

                    <input type='email' placeholder='Enter Email' required
                        className='w-11/12 bg-white py-2 rounded-sm px-2 text-sm border-none focus:outline-none'
                    />

                    <input type='text' placeholder='Enter Phone' required
                        className='w-11/12 bg-white py-2 rounded-sm px-2 text-sm border-none focus:outline-none'
                    />

                    <button className='bg-green-600 text-white py-2 w-11/12 rounded-sm mt-5 text-sm font-semibold'>Send</button>
                </form>
            </div>
        </div>
        <div className='h-90 bg-gray-800 text-white flex flex-col justify-center items-center 'id='term'>
            <div className='flex justify-evenly gap-30'>
            <ul className='flex flex-col gap-4'>
            <li className='text-xl'>Quick Links</li>
            <li>Home</li>
            <li>Courses</li>
            <li>Labs</li>
            <li>Contact</li>
            </ul>
            <ul className='flex flex-col gap-4'>
                <li className='text-xl '>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms & Use</li>
                <li>Refund & Cancellation Policy</li>

            </ul>
            <ul className='flex flex-col gap-4'>
                <li className='text-xl'>Get in Touch</li>
                <li>Support @tarun.com</li>
                
             <div className='flex gap-3 text-2xl'>
               <a href='https://github.com/taruntyagi01'> <FaGithub /> </a>
                <a href='https://www.facebook.com/kunal.tyagi.ji.2025'><FaFacebook/></a>
                <a href='#'><FaTwitter/></a>
                <a href='https://www.instagram.com/tarun_tyagiiiii/'><FaInstagram/></a>
                <a href='tel:+8447398510'><FaPhoneAlt/></a>
            
            </div>
            </ul>
          </div>
           <div className='flex justify-center items-center text-gray-100 text-sm mt-20'>
                Copyright <FaRegCopyright className='text-sm mr-1 ml-1'/> 2025 Sorting TarunTyagi Technologies Pvt Ltd. All Rights Reserved.
            </div>
          </div>
    </div>
  )
}

export default Home
