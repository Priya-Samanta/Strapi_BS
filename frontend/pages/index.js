import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return ( 
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
      {props.game.data.map((item, index) => {
          return (
          <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
            <Link href={`/games/${item.attributes.Slug}`}>
              
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.attributes.Image.data && item.attributes.Image.data.attributes.name}
                    alt={item.attributes.Image.data.attributes.name}
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.Title}</h2>
                  <p className="leading-relaxed text-base">
                    {item.attributes.Description}
                  </p>
                </div>
            </Link>
          </div>
          );
        })}
      </div>
    </div>
  </section>
);
}

export async function getServerSideProps(context) {
  let a = await fetch("http://localhost:1337/api/brain-sparks?populate=*");
  let game = await a.json();
  console.log(game)
  return {
    props: {game},
  }
}