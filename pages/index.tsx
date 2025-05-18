import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { DEFAULT_IMAGE, APP_NAME } from '../constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="An Airbnb-style listing page built with Next.js, TypeScript, and Tailwind." />
      </Head>

      <main className="min-h-screen p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center">{APP_NAME}</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              imageSrc={DEFAULT_IMAGE}
              title={`Cozy Studio ${i}`}
              pricePerNight={90 + i * 5}
            />
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => alert('Booking!')}>Book Now</Button>
        </div>
      </main>
    </>
  );
}
