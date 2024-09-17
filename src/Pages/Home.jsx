// import React from 'react'
// import { Btn } from '../Components/common/Btn'
// import pizza from '../assets/images/pizza.png'
// import { Pizzas } from '../Components/menu/Pizzas'
// import { FaArrowRight } from 'react-icons/fa'

// export const Home = ({pizzaData}) => {

//   return (
//     <div className='py-5 min-h-screen'>
//       {/* Seciton 1 Banner */}
//       <section className='flex justify-center content-center'>
//         <div className='w-1/2 self-center '>
//           <div className='font-medium text-xl text-orange-600'>You are feeling Hungry?</div>
//           <div className='text-6xl my-3 font-bold'>Don't Wait !</div>
//           <div className=' w-fit font-medium'>
//             <Btn btnText={"Order Now"} btnIcon2={<FaArrowRight/>}
//               bgColor={'bg-yellow-400'} hoverColor={'bg-yellow-600'}
//             />
//           </div>
//         </div>
//         <div className='w-1/2'>
//           <img src={pizza} alt='Pizza Banner'/>
//         </div>
//       </section>

//       {/* Section 2 List of Products */}
//       <section className='w-full my-10'>
//         <div className='text-3xl font-bold mb-5'>Pizza Menu</div>
//         <Pizzas pizzaData={pizzaData}/>
//       </section>
//     </div>
//   )
// }

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { CTAButton } from '../Components/common/CTAButoon'
import Banner from '../assets/images/pizzaVideo.mp4' // Update with actual pizza banner video
import PizzaImage from '../assets/images/pizzabanner2.jpeg' // Update with actual pizza image
import pizza from '../assets/images/pizza.png' // Used in Section 1
import { SpecialMenu } from '../Components/menu/SpecialMenu'
// import { Testimonials } from '../components/core/HomePage/Testimonials'
// import { ReviewSlider } from '../components/common/ReviewSlider'
import { Pizzas } from '../Components/menu/Pizzas'
import { Btn } from '../Components/common/Btn'
import { useNavigate } from 'react-router-dom'

export const Home = ({ pizzaData }) => {

  const navigate = useNavigate()
   
  return (
    <div className='py-5 min-h-screen text-black'>
      {/* Section 1: Hero Banner */}
      <section className='flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10 py-10'>
        <div className='lg:w-1/2 flex flex-col justify-center'>
          <div className='font-medium text-xl text-orange-600'>You are feeling Hungry?</div>
          <div className='text-6xl my-3 font-bold'>Don't Wait!</div>
          <div className='w-fit'>
            <Btn 
              clickHandler={()=>navigate('/menu')}
              btnText={"Order Now"} 
              btnIcon2={<FaArrowRight />} 
              bgColor={'bg-yellow-400'} 
              hoverColor={'bg-yellow-600'}
            />
          </div>
        </div>
        <div className='lg:w-1/2'>
          <img src={pizza} alt='Pizza Banner' className='w-full' />
        </div>
      </section>

      {/* Section 2: Special Menu */}
      <div className='relative mx-auto flex flex-col w-[11/12] max-w-maxContent items-center justify-between text-gray-800'>
        <div className='text-center text-4xl font-semibold mt-8'>
          Taste the Best with
          <span className='font-bold  text-orange-600 spa'>{" "}Authentic Pizza</span>
        </div>
        <div className='w-[80%] font-bold text-gray-500 text-lg mt-4 text-center'>
          Enjoy the freshest ingredients and traditional recipes. Your favorite pizza, delivered hot and fast.
        </div>

        <div className='flex flex-row gap-7 mt-8'>
          <CTAButton active={true} linkto={'/menu'}>
            Order Now
          </CTAButton>

          <CTAButton active={false} linkto={'/aboutus'}>
            Learn More
          </CTAButton>
        </div>

        <div className='mx-3 my-12'>
          <video muted loop autoPlay>
            <source src={Banner} type='video/mp4'/>
          </video>
        </div>

        {/* Special Menu Section */}
        <SpecialMenu />

        {/* Featured Pizza Section */}
        <div className='flex justify-center items-center mt-12'>
          <img src={PizzaImage} alt='Delicious Pizza' className='w-full max-w-4xl'/>
        </div>
      </div>

      {/* Section 3: Pizza Menu */}
      <section className='w-full my-10'>
        <div className='text-3xl font-bold mb-5 text-orange-600 text-center'>Pizza Menu</div>
        <Pizzas pizzaData={pizzaData} />
      </section>

      {/* Section 4: Testimonials and Reviews */}
      {/* <div className='bg-gray-200 text-black'>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">

          <Testimonials />


          <h1 className='text-center text-4xl font-semibold mt-10'>What Our Customers Are Saying</h1>
          <ReviewSlider />
        </div>
      </div> */}
    </div>
  )
}
