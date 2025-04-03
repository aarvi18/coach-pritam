import { AsanItem } from "@/data/AsanItem";
import { CardDemo } from "./CardDemo";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { People } from "@/data/People";

export default function YogaAsanasSection() {
    return (
        <section className="flex flex-col items-center text-center py-10 w-full max-w-6xl">
            <h4 className="text-2xl font-bold mb-4">Yoga Asanas</h4>
            <p className="text-gray-600 max-w-lg mb-6">
                Yoga is a light, which once lit will never dim. The better your practice, the brighter your flame with REFLEXI.
            </p>
            <CardDemo items={AsanItem} />
            <div className="flex flex-row items-center justify-center mb-10 w-full mt-7">
                <AnimatedTooltip items={People} />
            </div>
        </section>
    );
}
