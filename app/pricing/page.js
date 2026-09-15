import { Check, X, ArrowRight, ShieldCheck, Settings, BarChart3 } from "lucide-react";
import { Hero } from "../../components";
import PricingLeadForm from "./PricingLeadForm";

const lightFeatures = [
  "Negotiated fuel pricing",
  "FBO guidance",
  "Fuel market insights",
  "Personalized support",
  "Monthly savings report",
  "Monthly optimization meeting",
  "Reseller Rewards Optimization",
];

const proFeatures = [
  ...lightFeatures,
  "Unlimited optimization meetings",
  "Flight-by-flight operations analysis",
  "Trip-specific fuel optimization",
  "Tankering analysis",
  "FBO/fuel-stop comparison",
];

function PlanCard({ type }) {
  const pro = type === "pro";
  const features = pro ? proFeatures : lightFeatures;

  return (
    <div className={"plan pricing-plan-card " + (pro ? "featured pricing-pro" : "pricing-light")}>
      {pro && <span className="badge">MOST POPULAR</span>}

      <h3>{pro ? "PRO" : "LIGHT"}</h3>
      <div className="plan-kicker">{pro ? "COMPLETE FUEL OPTIMIZATION" : "FUEL OPTIMIZATION ESSENTIALS"}</div>
      <p className="plan-description">
        {pro
          ? "Full fuel optimization with flight-by-flight analysis and unlimited access to our experts."
          : "Get expert fuel guidance and insights with the essentials you need to start saving."}
      </p>

      <div className="pricing-divider" />

      <div className="price">{pro ? "$150" : "$75"} <small>/ month per tail</small></div>
      <div className="annual-price">
        <strong>{pro ? "$1,200" : "$750"}</strong> / year per tail
        <span>Save {pro ? "$600" : "$150"} annually</span>
      </div>

      <div className="pricing-divider" />

      <ul className="pricing-feature-list">
        {proFeatures.map((feature) => {
          const included = features.includes(feature);
          return (
            <li key={feature} className={!included ? "not-included" : ""}>
              {included ? <Check size={18} /> : <X size={18} />}
              <span>{feature}</span>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <Hero
        eyebrow="PRICING"
        title="Simple Plans. Real Results."
        text="Choose the level of fuel optimization that fits your operation. Keep your existing fuel providers and payment methods while Clean Top Off works to improve your fuel economics."
      />

      <section className="section pricing-main-section">
        <div className="container">
          <div className="pricing-page-grid">
            <div className="pricing-intro">
              <div className="eyebrow dark-eyebrow">PRICING</div>
              <h2>Simple Plans.<br /><span>Real Results.</span></h2>
              <p>
                Choose the plan that fits your operation. Get expert fuel guidance,
                better pricing, and optimized fee structures without changing your fuel providers.
              </p>

              <div className="pricing-value-list">
                <div>
                  <ShieldCheck size={35} />
                  <div><strong>No provider changes</strong><span>Keep your existing fuel suppliers.</span></div>
                </div>
                <div>
                  <Settings size={35} />
                  <div><strong>No payment method changes</strong><span>Same process, lower costs.</span></div>
                </div>
                <div>
                  <BarChart3 size={35} />
                  <div><strong>Real savings</strong><span>Expert guidance. Measurable results.</span></div>
                </div>
              </div>
            </div>

            <div className="pricing-cards">
              <PlanCard type="light" />
              <PlanCard type="pro" />
            </div>

            <div className="start-panel pricing-form-panel pricing-selector-panel" id="pricing-form">
              <div className="eyebrow dark-eyebrow">GET STARTED</div>
              <h3>See Your Investment</h3>
              <p>Select your plan and billing option to see the exact cost, then tell us a bit about your operation.</p>
              <PricingLeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container stats">
          <div><b>Better</b><span>Fuel pricing</span></div>
          <div><b>Lower</b><span>FBO fees</span></div>
          <div><b>Clear</b><span>Savings reporting</span></div>
          <div><b>Smarter</b><span>Fuel decisions</span></div>
        </div>
      </section>
    </>
  );
}
