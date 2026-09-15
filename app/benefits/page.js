import Link from "next/link";
import { Fuel, Trophy, MapPin, BarChart3, Plane, FileText, Headphones, ShieldCheck, ArrowRight } from "lucide-react";

const cards = [
  ["Lower Fuel Costs", "Better negotiated fuel pricing.", Fuel],
  ["Reseller Rewards Optimization", "Maximize rewards and incentives across eligible jet fuel resellers.", Trophy, true],
  ["FBO Guidance", "Optimize fuel stops, fees, and FBO choices.", MapPin],
  ["Market Insights", "Use current fuel market intelligence to make smarter decisions.", BarChart3],
  ["Fuel Optimization", "Identify tankering and trip-specific savings opportunities.", Plane],
  ["Savings Reports", "Clearly track savings and optimization results.", FileText],
  ["Expert Support", "Direct access to aviation fuel experts.", Headphones],
  ["No Provider Changes", "Keep your existing fuel providers and payment methods.", ShieldCheck],
];

export default function Benefits() {
  return (
    <>
      <section className="benefits-page">
        <div className="benefits-top">
          <div className="container benefits-heading">
            <div className="eyebrow dark-eyebrow">BENEFITS</div>
            <h1>More Value at <span>Every Stop.</span></h1>
            <p>Expert guidance. Better pricing. Greater rewards. All without changing your providers.</p>
          </div>

          <div className="container benefits-cards">
            {cards.map(([title, text, Icon, featured]) => (
              <Link
                href="/pricing"
                key={title}
                className={"benefit-card" + (featured ? " benefit-card-featured" : "")}
              >
                <div className="benefit-icon"><Icon size={39} strokeWidth={1.9} /></div>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="benefit-more">LEARN MORE <span><ArrowRight size={17}/></span></div>
              </Link>
            ))}
          </div>
        </div>

        <div className="benefits-airport">
          <div className="benefits-airport-overlay" />
          <div className="container benefits-bottom">
            <div>
              <div className="eyebrow">THE CLEAN TOP OFF ADVANTAGE</div>
              <h2>More value at every fuel stop.</h2>
            </div>
            <p>We work behind the scenes to improve fuel pricing, rewards, fees, and fueling decisions while your operation stays focused on flying.</p>
          </div>
        </div>
      </section>
    </>
  );
}
