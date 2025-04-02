import { Spotlight } from "./ui/Spotlight";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20">
            <Spotlight />
            <h1 className="text-6xl font-bold bg-gradient-to-tl from-green-500 to-green-800 text-transparent bg-clip-text">
                Transform Your Mind & Body
            </h1>
            <p className="mt-4 text-lg text-white max-w-2xl">
                Join Pritam, a yoga expert with 10+ years of experience, and embark on a journey of holistic well-being.
                Achieve balance through personalized yoga, nutrition, and mindset practices.
            </p>
            <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700">
                Get Started
            </button>
        </section>
    );
}