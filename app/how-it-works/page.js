import { ArrowRight, FilePenLine, Search, Settings, BarChart3, Ban, Building2, CreditCard, Users, Clock3, Plane } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FilePenLine,
    title: "Get a Free Assessment",
    text: "Tell us about your aircraft and operation. It’s quick, free, and no commitment.",
  },
  {
    number: "2",
    icon: Search,
    title: "Identify Savings and Optimizations",
    text: "We analyze your fuel spend, pricing, rewards, fees, and operational opportunities.",
  },
  {
    number: "3",
    icon: Settings,
    title: "Get a Customized Plan",
    text: "We deliver clear recommendations to help you capture more value.",
  },
  {
    number: "4",
    icon: BarChart3,
    title: "See Real Results",
    text: "You keep your existing providers and payment methods while we help you save and optimize.",
  },
];

const reassurance = [
  {
    icon: Ban,
    title: "No Changes to Your Providers",
    text: "Keep your existing fuel suppliers.",
  },
  {
    icon: Building2,
    title: "No Changes to Your FBOs",
    text: "Continue fueling at the same locations.",
  },
  {
    icon: CreditCard,
    title: "No Changes to Your Payment Methods",
    text: "Use the same cards and processes.",
  },
  {
    icon: Users,
    title: "We Negotiate on Your Behalf",
    text: "Leverage our network and relationships to secure better pricing, fees, and terms.",
  },
  {
    icon: Clock3,
    title: "You Save Time",
    text: "No need to spend hours negotiating or analyzing fuel contracts.",
  },
  {
    icon: Plane,
    title: "You Focus on Flying",
    text: "We handle the complexity so you can focus on your mission.",
  },
];

function Step({ item }) {
  const Icon = item.icon;
  return (
    <div className="how-step">
      <div className="how-icon-wrap">
        <span className="how-number">{item.number}</span>
        <div className="how-icon-circle">
          <Icon size={72} strokeWidth={1.7} />
        </div>
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <main className="how-page">
      <section className="how-process">
        <div className="container">
          <div className="how-heading">
            <div className="eyebrow">HOW IT WORKS</div>
            <h1>Simple Steps. <span>Real Results.</span></h1>
            <p>Get more value from your fuel spend without changing the way you operate.</p>
          </div>

          <div className="how-steps">
            {steps.map((item, index) => (
              <div className="how-step-slot" key={item.number}>
                <Step item={item} />
                {index < steps.length - 1 && (
                  <div className="how-arrow"><ArrowRight size={46} strokeWidth={1.35} /></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-no-disruptions">
        <div className="container">
          <div className="how-disruption-hero how-disruption-centered">
            <div className="how-disruption-copy">
              <div className="eyebrow">NO DISRUPTIONS</div>
              <h2>Same Operations.<br /><span>A Smarter Outcome.</span></h2>
              <p>
                You don’t need to change your providers, FBOs, contracts, or payment methods.
                We work behind the scenes to negotiate better pricing, reduce fees, and maximize
                rewards so you can focus on what matters most: flying.
              </p>
            </div>
          </div>

          <div className="how-bottom-grid">
            <div className="how-reassurance-grid">
              {reassurance.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="how-reassurance-card" key={item.title}>
                    <div className="how-small-icon"><Icon size={31} strokeWidth={1.8} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>

            <aside className="how-outcome-card">
              <div className="eyebrow">SAME FLIGHTS. MORE VALUE.</div>
              <div className="how-quote">
                “We don’t change the way you fly. We just make it more efficient.”
              </div>
              <div className="how-outcomes">
                <div><span>✓</span> Lower fuel costs</div>
                <div><span>✓</span> Higher rewards</div>
                <div><span>✓</span> Greater operational value</div>
              </div>
              <a href="/contact" className="primary-button">
                Get a Free Assessment <ArrowRight size={17} />
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
