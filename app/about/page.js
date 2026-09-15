import {
  ArrowRight,
  Fuel,
  Award,
  Coins,
  MapPin,
  BarChart3,
  Plane,
  Clock3,
  DollarSign,
  Users,
} from "lucide-react";

const solutionCards = [
  {
    icon: Fuel,
    title: "Fuel Pricing",
    text: "Find better rates across our network",
  },
  {
    icon: Award,
    title: "Rewards Optimization",
    text: "Maximize eligible rewards and incentives",
  },
  {
    icon: Coins,
    title: "Fee Analysis",
    text: "Identify waivable fees and reduce costs",
  },
  {
    icon: MapPin,
    title: "FBO Guidance",
    text: "Compare options and find the best fit",
  },
  {
    icon: BarChart3,
    title: "Ongoing Support",
    text: "Stay ahead with expert advice",
  },
];

const valueItems = [
  {
    icon: Plane,
    title: "You Focus on Flying",
    text: "We handle the complexity behind the scenes.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    text: "No need to research, compare, or negotiate.",
  },
  {
    icon: DollarSign,
    title: "Get More Value",
    text: "Better pricing, lower fees, and stronger rewards.",
  },
  {
    icon: Users,
    title: "A Dedicated Team",
    text: "Aviation fuel specialists working for you.",
  },
];

function OptionCard({ title, children, className = "" }) {
  return (
    <div className={`about-option-card ${className}`}>
      <strong>{title}</strong>
      <div>{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero-split">
        <div className="about-problem-panel">
          <div className="about-panel-copy">
            <h1>
              Too Many Options.
              <br />
              <span>Not Enough Time.</span>
            </h1>

            <p>
              Different FBOs, fuel prices, fees, and rewards. Finding the best
              option takes time. Time you should be spending on flying, not fuel
              logistics.
            </p>

            <div className="about-option-cloud">
              <OptionCard title="FBO A">
                <b>$6.48/gal</b>
                <small>Ramp Fee: $350<br />Handling Fee: $250</small>
              </OptionCard>
              <OptionCard title="FBO B">
                <b>$6.12/gal</b>
                <small>Ramp Fee: $450<br />Handling Fee: $300</small>
              </OptionCard>
              <OptionCard title="FBO C">
                <b>$6.35/gal</b>
                <small>Ramp Fee: $300<br />Handling Fee: $275</small>
              </OptionCard>

              <OptionCard title="Fuel Cards">
                <small>▣ &nbsp; Program A<br />▣ &nbsp; Program B<br />▣ &nbsp; Program C</small>
              </OptionCard>

              <OptionCard title="Rewards Programs" className="about-option-wide">
                <small>• Points<br />• Rebates<br />• Volume incentives<br />• Tiered rewards</small>
              </OptionCard>

              <OptionCard title="Additional Fees" className="about-option-wide">
                <small>• International fees<br />• Security fees<br />• Facility fees<br />• After-hours fees<br />• And more...</small>
              </OptionCard>

              <OptionCard title="Fuel Suppliers" className="about-option-wide">
                <small>◉ &nbsp; Supplier A<br />◉ &nbsp; Supplier B<br />◉ &nbsp; Supplier C<br />◉ &nbsp; Supplier D</small>
              </OptionCard>
            </div>
          </div>
        </div>

        <div className="about-solution-panel">
          <div className="about-solution-copy">
            <h2>
              That’s Why
              <br />
              <span>We’re Here.</span>
            </h2>

            <p>
              We created a team of specialized fuel experts to do the work for
              you. We analyze, compare, negotiate, and identify the best
              opportunities so you get more value from every gallon.
            </p>

            <div className="about-solution-cards">
              {solutionCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="about-solution-card" key={item.title}>
                    <div className="about-solution-icon">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="about-aircraft-glow" aria-hidden="true">
            <div className="about-aircraft-silhouette"></div>
          </div>
          <div className="about-center-arrow" aria-hidden="true">
            <ArrowRight size={38} strokeWidth={1.6} />
          </div>
        </div>
      </section>

      <section className="about-value-strip">
        <div className="container about-value-grid">
          {valueItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="about-value-item" key={item.title}>
                <div className="about-value-icon"><Icon size={35} strokeWidth={1.7} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-outcome">
        <div className="container">
          <div className="about-outcome-card">
            <div className="about-outcome-plane">
              <Plane size={55} strokeWidth={1.6} />
            </div>
            <div className="about-outcome-divider"></div>
            <div>
              <h2>
                Same operations. <span>A smarter outcome.</span>
              </h2>
              <p>
                Let us take care of the fuel details so you can focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
