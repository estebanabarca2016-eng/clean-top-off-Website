 "use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function PricingLeadForm({ defaultPlan = "" }) {
  const [plan, setPlan] = React.useState(defaultPlan || "");
  const [billing, setBilling] = React.useState("");
  const [price, setPrice] = React.useState("—");

  React.useEffect(() => {
    if (!plan || !billing) {
      setPrice("—");
      return;
    }

    const prices = {
      Light: {
        Monthly: "$75 / month per tail",
        Yearly: "$750 / year per tail",
      },
      Pro: {
        Monthly: "$150 / month per tail",
        Yearly: "$1,200 / year per tail",
      },
    };

    setPrice(prices[plan]?.[billing] || "—");
  }, [plan, billing]);

  return (
    <form
      className="assessment-form"
      action="https://formspree.io/f/xzezbpvj"
      method="POST"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Clean Top Off Free Assessment Request"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="selected_price" value={price} />
      <input
        type="text"
        name="_honey"
        tabIndex="-1"
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />

      <div className="pricing-selectors">
        <label>
          Plan *
          <select
            required
            name="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="" disabled>
              Select a plan
            </option>
            <option value="Light">Light</option>
            <option value="Pro">Pro</option>
          </select>
        </label>

        <label>
          Billing Option *
          <select
            required
            name="billing"
            value={billing}
            onChange={(e) => setBilling(e.target.value)}
          >
            <option value="" disabled>
              Select monthly or yearly
            </option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </label>
      </div>

      <div className="investment-box">
        <span>Estimated Investment</span>
        <strong>{price}</strong>
      </div>

      <div className="form-section-label">Your Information</div>

      <label>
        Name *
        <input required name="name" placeholder="Full name" />
      </label>

      <label>
        Email *
        <input
          required
          name="email"
          type="email"
          placeholder="you@company.com"
        />
      </label>

      <label>
        Phone *
        <input
          required
          name="phone"
          type="tel"
          placeholder="+1 (555) 555-5555"
        />
      </label>

      <label>
        Aircraft Tail Number *
        <input
          required
          name="tail_number"
          placeholder="e.g. N123AB"
        />
      </label>

      <button className="primary-button pricing-submit" type="submit">
        Get a Free Assessment <ArrowRight size={17} />
      </button>

      <small>
        We’ll review your information and contact you directly. No account or
        password required.
      </small>
    </form>
  );
}
