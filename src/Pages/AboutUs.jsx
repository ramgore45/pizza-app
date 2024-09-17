import React from 'react';
import BannerImage1 from '../assets/images/pizzabanner1.jpg';
import BannerImage2 from '../assets/images/pizzabanner2.jpeg';
import BannerImage3 from '../assets/images/pizzabanner3.jpg';
// import { ReviewSlider } from '../components/common/ReviewSlider';
import FoundingStory from '../assets/images/founding.jpg';

export const AboutUs = () => {
  return (
    <div className='text-white'>
      {/* Section 1 */}
      <section className="bg-gray-800">
        <div className="relative mx-auto flex w-11/12 max-w-7xl flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Bringing the Best Pizza Experience to You
            <span className='font-bold text-blue-500 spa'>{" "}Every Slice Counts</span>
            <p className="mx-auto mt-3 text-center text-base font-medium text-gray-400 lg:w-[95%]">
              At PizzaMaster, we are dedicated to delivering an exceptional pizza experience. From our carefully crafted recipes to our commitment to using only the freshest ingredients, we are passionate about creating a pizza experience that you will love.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="Pizza 1" />
            <img src={BannerImage3} alt="Pizza 3" />
            <img src={BannerImage2} alt="Pizza 2" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      {/* <section className="border-b pb-20 border-gray-700">
        <div className="mx-auto flex w-11/12 max-w-7xl flex-col justify-between gap-10 text-gray-500">
          <div className="h-[100px]"></div>
          <Quote />
        </div>
      </section> */}

      {/* Section 3 */}
      <section>
        <div className="mx-auto mt-20 flex w-11/12 max-w-7xl flex-col justify-between gap-10 text-gray-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex w-full flex-col gap-10">
              <h1 className="bg-gradient-to-br from-red-500 via-yellow-500 to-orange-500 bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-gray-400 lg:w-[95%]">
                PizzaMaster was founded by a group of pizza enthusiasts who wanted to share their love for pizza with the world. Our journey began with a vision to create the perfect pizza, blending traditional techniques with innovative flavors to delight our customers.
              </p>
              <p className="text-base font-medium text-gray-400 lg:w-[95%]">
                With years of experience in the culinary industry, our team is dedicated to providing an unforgettable pizza experience. Our commitment to quality and passion for pizza are at the heart of everything we do.
              </p>
            </div>
            <div>
              <img
                src={FoundingStory}
                alt="Founding Story"
                className="shadow-lg shadow-red-500"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="mb-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-green-500 to-green-300 bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                Our Vision
              </h1>
              <p className="text-base font-medium text-gray-400 lg:w-[95%]">
                Our vision is to revolutionize the pizza industry by offering unique and exciting flavors while maintaining the highest standards of quality. We aim to be the go-to destination for pizza lovers everywhere, providing exceptional taste and memorable experiences.
              </p>
            </div>
            <div className="mb-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-blue-500 to-blue-300 text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%]">
                Our Mission
              </h1>
              <p className="text-base font-medium text-gray-400 lg:w-[95%]">
                Our mission is to deliver top-notch pizza that brings people together. We strive to create a warm and welcoming atmosphere where everyone feels at home. Through our dedication to quality and customer satisfaction, we aim to become the pizza brand of choice for families and friends alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      {/* <Stat /> */}

      {/* Optional Sections for LearningGrid and ContactFormSection */}
      {/* <section className="mx-auto mt-20 flex w-11/12 max-w-7xl flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section> */}

      {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-7xl flex-col items-center justify-between gap-8 bg-gray-900 text-white">
        <h1 className="text-center text-4xl font-semibold mt-8">
          What Our Customers Are Saying
        </h1>
        <ReviewSlider />
      </div> */}
    </div>
  );
};
