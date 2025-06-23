"use client"
import AnimatedLine from "../components/animatedLine";
import ScrollSpyMenu from "../components/asideMenu";
import Carousel3D from "../components/ServicesSlider";
import ReactCompareImage from 'react-compare-image';

const CustomHandle = () => (
  <div
    style={{
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#ffffffB3',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'ew-resize',
      boxShadow: '0 0 5px rgba(0,0,0,0.4)',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <img src="/icons/arrow-left.svg" alt="Left Arrow" width={13} height={20} />
      <img src="/icons/arrow-right.svg" alt="Right Arrow" width={13} height={20} />
    </div>
  </div>
);


export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen bg-gray-900 text-white p-20">
        Banner
      </section>
      <section id="reviews" className="text-white services">
        <AnimatedLine />
        <div className="container mx-auto lg:py-20 lg:px-48">
        Customer Reviews
        <Carousel3D />

        </div>
        <AnimatedLine classes={'justify-self-end -rotate-180'}/>
      </section>
      <section id="why-us" className="min-h-screen text-white lg:p-20 px-8">
        Why Choose Us?
        <div className="container mx-auto flex flex-wrap">
          <div className="lg:w-3/12 w-full">
          <h3 className="font-bold italic text-[48px]">Marca 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam curae quam interdum quisque id, magnis accumsan placerat integer natoque ligula (Explicación breve del caso)</p>
          </div>
          <div className="lg:w-9/12 w-full py-12 lg:py-0">
            <ReactCompareImage leftImage="white.webp" rightImage="colored.webp" sliderLineWidth='1' handle={<CustomHandle />}/>
          </div>
        </div>
      </section>
      <section id="benefits" className="min-h-screen text-white p-20">
        Benefits...
      </section>
      <section id="projects" className="min-h-screen text-white p-20">
        Our Projects
      </section>
      <section id="services" className="min-h-screen text-white p-20">
        Additional Services
      </section>
      <section id="vehicles" className="min-h-screen text-white p-20">
        Types of Vehicles
      </section>
      <section id="quote" className="min-h-screen p-20">
        Quote section
      </section>

      <ScrollSpyMenu />

    </main>
  );
}
