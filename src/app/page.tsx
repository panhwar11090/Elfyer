import Image from "next/image";
import LandingPage from "./landingpage/page"; 
import MiddleSection from "./middlesection/page";
import AbovePage from "./abovepage/page";
import yeelow from '../../public/yelowshirt.png'
import green from '../../public/greenshirt.png'
import womens from '../../public/womenss.png'
import laptop from '../../public/laptop.png'
import mobile from '../../public/mobile.png'
import gaming from '../../public/gaming.png'
import jhumaka from '../../public/jhumka.png'
import neckhless from '../../public/neklesh.png'
import kangan from '../../public/kangan.png'
import Footer from '../app/fotterpage/page'


export default function Home() {

  const images = [
    { src: yeelow, alt: 'Yellow Shirt' },
    { src: green, alt: 'Green Shirt' },
    { src: womens, alt: 'Womens Shirt' }
  ];

  const electroniimages = [
    { src: laptop, alt: 'Laptop' },
    { src: mobile, alt: 'mobiles' },
    { src: gaming, alt: 'Gaming Pc' }
  ]

  const jwellaryimages = [
    { src: jhumaka, alt: 'Jhumka' },
    { src: neckhless, alt: 'neckless' },
    { src: kangan, alt: 'Kangan' }
  ]

  const jwellaryHeadings = [
    'Jhumka',
    'Neckles',
    'Kangan'
  ]

  const headings = [
      'Mens T-Shirt',
      'Mens T-Shirt',
      'WOMENS Shirt'
  ];

  const headingss = [
    'Laptops',
    'Mobiles',
    'Computers'
  ]

  const sectionHeading = 'MEN AND WOMEN SHOPPING'
  const elecroninHaedding = 'Electronic'
  const jwellaryMainHeading = 'Jewellery Accessories'



  return (
    <main >
      {/* <LandingPage/>  */}
     
      <AbovePage/>
      <MiddleSection images={images} headings={headings} sectionHeading= {sectionHeading}/>
      <MiddleSection images={electroniimages} headings={headingss} sectionHeading={elecroninHaedding} />
      <MiddleSection images={jwellaryimages} headings={jwellaryHeadings} sectionHeading={jwellaryMainHeading} />
      <Footer/>
      {/* <MiddleSection/> */}
    </main>
  );
}
