import FeatureCard from "../ui/FeatureCard";

import perfectIcon1 from '../../assets/perfect-card-1.png';
import perfectIcon2 from '../../assets/perfect-card-2.png';
import perfectIcon3 from '../../assets/perfect-card-3.png';

export default function PerfectSolutions() {
  return (
    <section className="py-20 bg-[#F8FAFF]">
      <div className="container mx-auto px-">

        {/* ===== Header ===== */}
        <div className="text-center max-w-2xl mx-auto mt-5 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Perfect Solution For Your Business
          </h2>

          <p className="mt-4 text-gray-500">
            Graphs displaying your performance for metrics like follower
            evolution, average rate per post and reach and impressions
            to give you the insights.
          </p>
        </div>

        {/* ===== Cards ===== */}
        <div className="mt-25 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1 */}
          <FeatureCard
            title="Grow Your Business"
            description="Take us wherever you go so that you know what's going on with your money at all times."
            icon={perfectIcon1}
            iconBackground="#FFF0E9"
            isActive={false}
          />

          {/* Card 2 (ตัวกลาง - เด่นกว่า) */}
          <div className="z-10">
            <FeatureCard
              title="Drive More Sales"
              description="Take us wherever you go so that you know what's going on with your money at all times."
              icon={perfectIcon2}
              iconBackground="#E9EDFF"
              isActive={true}
            />
          </div>

          {/* Card 3 */}
          <FeatureCard
            title="Handled By Expert"
            description="Take us wherever you go so that you know what's going on with your money at all times."
            icon={perfectIcon3}
            iconBackground="#FFF6DD"
            isActive={false}
          />
        </div>

      </div>
    </section>
  );
}