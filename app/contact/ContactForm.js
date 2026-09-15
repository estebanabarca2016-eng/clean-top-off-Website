"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <form
      className="assessment-form"
      action="https://formsubmit.co/info@cleantopoff.com"
      method="POST"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Clean Top Off Contact Request"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="text"
        name="_honey"
        tabIndex="-1"
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />

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

      <label>
        How can we help? *
        <textarea
          required
          name="message"
          rows="5"
          placeholder="Tell us what you're looking for or what you'd like to improve about your fuel operation."
        />
      </label>

      <button className="primary-button pricing-submit" type="submit">
        Send Request <ArrowRight size={17} />
      </button>

      <small>
        Tell us a little about what you need and our team will get back to you.
      </small>
    </form>
  );
}
