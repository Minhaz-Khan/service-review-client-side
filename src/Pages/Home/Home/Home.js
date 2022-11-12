import React from 'react';
import photo1 from '../../../asset/image for assignment/bridal-5.jpg'
import photo2 from '../../../asset/image for assignment/05.-emotion-of-the-day-01.jpg'
import photo3 from '../../../asset/image for assignment/1522851909-shutterstock_578128279.jpg'
import photo4 from '../../../asset/image for assignment/1a5f9a6f990b6474fe2aed37a9b27c61.jpg'
import photo5 from '../../../asset/image for assignment/_SSP4982-Exposure-M.jpg'
import photo6 from '../../../asset/image for assignment/Fort-Wayne-Freemasons-Hall-Wedding-Katie-Tyler_0059.webp'
import photo7 from '../../../asset/image for assignment/freemain_51_682023-163726093957708.jpeg'
import photo8 from '../../../asset/image for assignment/pexels-ankur-kumar-3872626.jpg'
import photo9 from '../../../asset/image for assignment/WEDDING-PHOTO_04.jpg'
import HomeServices from '../../HomeServicesCart/HomeServices';
import UseTitle from '../../../UseTitle/UseTitle';


const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50  grid lg:grid-cols-12 grid-cols-1 ">
                <div className='col-span-5 my-auto mx-5 text-center'>
                    <h1 className='text-7xl font-semibold text-gray-400 mb-5'>
                        <span className='text-violet-700'>Get ready</span> for the <br />
                        best day ever.</h1>
                    <p className='text-lg'>These are images that you will hold on to for the rest of your life...

                        so they better be good. <br />


                        Planning a wedding can be SO overwhelming!
                        Don't worry. I've got you. I have resources to help the planning process leading to your perfect day.</p>
                </div>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 lg:col-span-7 bg-gray-100">
                    <img src={photo4} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo3} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo1} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo5} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo6} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo7} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo8} />

                    <img src={photo9} alt="" className="w-full h-full col-span-1 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>
            <div className='mt-10'>
                <HomeServices></HomeServices>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 bg-stone-300 my-20'>
                <div>
                    <img src="https://images.squarespace-cdn.com/content/v1/5ed648d4e51b067fbfc8ea14/ae42e78a-6d2b-4456-bcc9-035e3bd65558/martailardo_weddingphotography_london_41.jpg?format=750w" alt="" className='ml-auto py-10' />
                </div>
                <div className='my-auto px-20 pb-10'>
                    <h2 className='text-2xl font-thin'>PHOTOGRAPHS LIVE FOREVER</h2>
                    <div className='font-thin'>
                        <p className='mt-5 mb-10'>I’ll tell you the most important part of what I do: I capture moments in your life that you'll want to cherish for life  and that will give you goosebumps 10 years from now. </p>
                        <p className='my-5'>
                            There is something very unique about the energy of the wedding day. And I know what I’m saying as I’ve been documenting weddings for over 10 years. Yes, wedding photography is my full time job (how awesome is that?) </p>
                        <p>
                            My wedding work is a mixture of documentary style images (but always filtered through my artistic eye and a fashion photography background), and timeless couple portraits with editorial flair.  I’m inspired by cinematography, art and design and all of this, digested leaks to my images.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;