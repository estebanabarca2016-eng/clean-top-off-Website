import Link from "next/link";
import { ArrowRight, Fuel, Handshake, BarChart3, ShieldCheck, Search, Clock } from "lucide-react";
import { IconCard } from "../components";

export default function Home(){return <>
<section className="hero" style={{backgroundImage:"linear-gradient(90deg,rgba(3,22,39,.94) 0%,rgba(3,22,39,.72) 45%,rgba(3,22,39,.18) 78%),url('/hero-aviation.png')"}}>
<div className="container hero-inner"><div className="eyebrow">SMARTER JET FUEL</div><h1>Lower fuel costs.<br/>Higher value flights.</h1><p>We negotiate directly with FBOs on your behalf to secure better fuel prices and eliminate unnecessary fees — so you can focus on flying, not overpaying.</p><Link href="/contact" className="light-button">Get a Free Assessment <ArrowRight size={17}/></Link></div>
</section>
<section className="hero-proof"><div><b>Better fuel prices</b><span>Direct FBO negotiations</span></div><div><b>Lower FBO fees</b><span>We negotiate what we can</span></div><div><b>Real savings</b><span>Focused on measurable value</span></div><div><b>Trusted expertise</b><span>Aviation industry experience</span></div></section>

<section className="section"><div className="container two-col"><div><div className="eyebrow dark-eyebrow">ABOUT US</div><h2>A smarter approach to jet fuel.</h2><p>Clean Top Off was created to solve a simple problem: aircraft operators and flight departments are paying more for fuel and FBO fees than they should.</p><p>We work directly with FBOs to negotiate better fuel pricing, reduce unnecessary fees, and identify opportunities that can improve the economics of every trip.</p><p>Don’t just top off. <strong>Optimize.</strong></p><Link href="/about" className="dark-button">Learn More <ArrowRight size={17}/></Link></div><div className="visual-card image-visual-card" aria-label="Clean Top Off: same provider, same payment method, lower fuel costs" style={{backgroundImage:"url('/same-provider-lower-costs.png')"}}></div></div></section>

<section className="section light-section"><div className="container"><div className="section-heading"><div><div className="eyebrow dark-eyebrow">THE ADVANTAGE</div><h2>Real savings. Less work.</h2></div><p>We handle the research, FBO conversations, and fee negotiations behind the scenes.</p></div><div className="card-grid">
<IconCard icon={<Fuel/>} title="Better Fuel Prices" text="We negotiate directly with FBOs to secure better pricing on your behalf."/>
<IconCard icon={<ShieldCheck/>} title="Reduced FBO Fees" text="We help waive or reduce unnecessary ramp, handling, and infrastructure charges."/>
<IconCard icon={<BarChart3/>} title="Measurable Savings" text="Focus on savings you can understand and measure."/>
<IconCard icon={<Clock/>} title="Save Time" text="We do the legwork — researching prices and managing the details."/>
<IconCard icon={<Handshake/>} title="Trusted Expertise" text="Aviation experience and FBO relationships working for you."/>
<IconCard icon={<Search/>} title="Better Opportunities" text="Identify better fueling options across your regular routes."/>
</div></div></section>

<section className="section dark-section"><div className="container cta-band"><div><div className="eyebrow">READY TO START?</div><h2>Make every gallon work harder for you.</h2><p>Tell us about your operation and we’ll identify where Clean Top Off can create value.</p></div><Link href="/contact" className="light-button">Get a Free Assessment <ArrowRight size={17}/></Link></div></section>
</>}
