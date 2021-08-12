import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import Footer from '../components/Footer'

export default function Home( {exploreData, cardData, img, distance, location }) {
  return (
    <div>
      <Head>
        <title>Create airbnb</title>
        
      </Head>


      <Header />

      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className="text-4xl font-smibold pb-5">Exoplore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard key={img}
               img={img}
                distance={distance}
                location={location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">

          {cardData?.map(({ img, title }) => (
            <MediumCard key= {img} 
            img={img} 
            title={title}
            />
            
          ))}
          </div>

        </section>

        <LargeCard img="https://links.papareact.com/4cj"
          description="Wishlists curated by Airbnb."
          title="The Greatest Outdoor"
          buttonText="Get inspire"        />


       

      </main>

      <Footer />

      </div>
      
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);

  const cardData = await fetch("https://links.papareact.com/zp1")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);

  return {
    props: { exploreData, cardData }, // will be passed to the page component as props
  };
}
