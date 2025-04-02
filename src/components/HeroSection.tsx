import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";

export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between text-left py-0 px-0 md:px-6">
            <Spotlight />
            <div className="md:w-1/2 flex flex-col items-start">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
                    Transform Your Mind & Body
                </h1>
                <p className="mt-4 text-lg text-gray-700 max-w-md">
                    Join Pritam, a yoga expert with 10+ years of experience, and embark on a journey of holistic well-being.
                    Achieve balance through personalized yoga, nutrition, and mindset practices.
                </p>
                <div className="mt-5">
                    <Button
                        borderRadius="0.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center relative mt-6 md:mt-0">
                <img
                    src="/hero1.png"
                    alt="Yoga Practice"
                    className="w-full max-w-sm md:max-w-2xl"
                />
                <img
                    src="/overlay-image.png"
                    alt="Yoga Pose"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-lg md:w-4xl"
                />
            </div>
        </section>
    );
}
