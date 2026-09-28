import fs from "fs";

const locationsData = {
  sacramento: {
    name: "Sacramento",
    path: "/mold-inspector-sacramento-ca",
    intro: "Comprehensive mold inspection and mold testing for Sacramento homes and commercial properties. We identify moisture sources and indoor air quality concerns.",
    paragraphs: [
      "Sacramento’s diverse housing stock—from historic bungalows in the central city to modern commercial properties—requires a nuanced approach to mold inspection and moisture detection. We conduct detailed residential mold inspections and commercial mold inspections tailored to the unique climate and building materials of the capital city.",
      "Whether you are dealing with a past plumbing leak, roof damage from winter storms, or hidden moisture within wall cavities, our comprehensive mold testing services are designed to give you clarity. We don't just look at the surface; our moisture inspection process traces the root cause of water intrusion.",
      "Our indoor air quality testing and black mold inspection protocols provide actionable data for property owners, buyers, and managers. When you need clear, evidence-based documentation of water-damage mold inspection findings in Sacramento, our methodical process ensures no detail is overlooked."
    ],
    neighborhoods: ["Downtown", "Land Park", "Natomas", "South Sacramento", "Pocket-Greenhaven", "Tahoe Park"],
    concerns: ["Historic home plumbing leaks", "Attic and crawl space humidity", "Commercial building HVAC mold", "Winter storm water intrusion", "Hidden mold behind drywall", "Post-renovation moisture issues"],
    faqs: [
      ["How do I schedule a residential mold inspection in Sacramento?", "Call +1 916-665-4249 with your address and a brief description of the moisture or odor concern. We will guide you through the process."],
      ["Do you offer commercial mold inspections?", "Yes, we routinely inspect Sacramento commercial properties, offices, and retail spaces for indoor air quality and moisture concerns."],
      ["Is mold testing always necessary?", "Not always. We start with a thorough visual moisture inspection. If testing is needed to answer specific questions, we will recommend the appropriate air or surface sampling."]
    ]
  },
  "midtown-sacramento": {
    name: "Midtown Sacramento",
    path: "/mold-inspector-midtown-sacramento-ca",
    intro: "Expert residential and commercial mold inspections for Midtown Sacramento. Serving historic homes, apartments, and modern lofts with targeted testing.",
    paragraphs: [
      "Midtown Sacramento is defined by its beautiful historic Victorians, Craftsman homes, and newly renovated apartment lofts. The combination of older plumbing systems, modernized HVAC retrofits, and dense living arrangements often creates unique moisture challenges. Our residential mold inspections in Midtown focus heavily on these older structural nuances.",
      "We frequently perform hidden mold detection and water-damage mold inspections in properties that have undergone multiple generations of renovations. From assessing crawl spaces with inadequate ventilation to testing indoor air quality in multi-unit buildings, our approach is highly specific to Midtown's architecture.",
      "If you suspect an issue, our comprehensive mold testing and moisture inspection services help identify whether an earthy odor or visible staining is an active problem. We also offer specialized commercial mold inspections for Midtown's bustling restaurants, boutiques, and office spaces to ensure a healthy indoor environment."
    ],
    neighborhoods: ["Marshall School", "Newton Booth", "Southside Park", "Boulevard Park", "Alkali Flat", "Poverty Ridge"],
    concerns: ["Victorian home crawl spaces", "Multi-unit apartment ventilation", "Older plumbing system leaks", "Hidden mold in renovated walls", "Basement moisture intrusion", "Restaurant/commercial kitchen humidity"],
    faqs: [
      ["Can you inspect Midtown apartments for mold?", "Yes, we work with both tenants (with landlord permission) and property managers to conduct thorough residential mold inspections in multi-family buildings."],
      ["Do you test for black mold in older homes?", "Yes. Our black mold inspection and targeted testing protocols are ideal for older Midtown properties where long-standing moisture may have gone unnoticed."],
      ["What does a moisture inspection involve?", "We use thermal imaging and moisture meters to trace water pathways behind walls and under floors without causing damage to your historic property."]
    ]
  },
  "east-sacramento": {
    name: "East Sacramento",
    path: "/mold-inspector-east-sacramento-ca",
    intro: "Detailed mold testing and moisture detection for East Sacramento properties. We specialize in older homes, additions, and comprehensive air quality assessments.",
    paragraphs: [
      "East Sacramento’s tree-lined streets and established Fab Forties homes present specific inspection scenarios. Mature landscaping can impact exterior drainage, leading to crawl space moisture and foundation issues. Our residential mold inspections are designed to evaluate how the exterior environment interacts with the interior of your home.",
      "Many East Sacramento properties have seen extensive additions and remodeling over the decades. These transitions between old and new construction are common sites for water intrusion. We utilize advanced moisture inspection techniques and hidden mold detection to evaluate these critical junctions.",
      "Whether you need routine indoor air quality testing for a growing family or a comprehensive water-damage mold inspection after a severe winter storm, our methodology is thorough. We also provide commercial mold inspections for local businesses operating in adapted historic structures along J Street and Folsom Blvd."
    ],
    neighborhoods: ["Fab Forties", "River Park", "Campus Commons", "Elmhurst", "McKinley Park", "East Portal"],
    concerns: ["Poor exterior drainage impacting foundations", "Remodel and addition transition leaks", "Crawl space humidity from mature landscaping", "Roof leaks in older structures", "Indoor air quality in updated homes", "Hidden moisture behind custom cabinetry"],
    faqs: [
      ["How does mature landscaping affect mold?", "Large trees and dense vegetation can shade roofs and block foundation vents, retaining moisture and increasing the risk of hidden mold. Our moisture inspection checks for these factors."],
      ["Are your residential mold inspections disruptive?", "No, our inspections are non-invasive. We use specialized equipment for hidden mold detection without tearing open your walls."],
      ["Do you offer post-renovation mold testing?", "Yes. If you've recently remodeled your East Sacramento home and notice unusual odors, we can perform targeted mold testing to ensure no moisture was trapped during construction."]
    ]
  },
  "arden-arcade": {
    name: "Arden-Arcade",
    path: "/mold-inspector-arden-arcade-ca",
    intro: "Professional mold inspection and testing in Arden-Arcade. We provide clear, evidence-based answers for residential homes, retail spaces, and commercial properties.",
    paragraphs: [
      "The Arden-Arcade area features a massive footprint of mid-century residential neighborhoods alongside dense commercial and retail corridors. This variety means our commercial mold inspections and residential mold inspections must account for a wide array of building practices, HVAC designs, and aging infrastructure.",
      "We frequently address indoor air quality testing requests in older Arden-Arcade ranch homes where inadequate attic ventilation or aging HVAC ductwork has led to condensation issues. Our thorough moisture inspection process identifies these hidden vulnerabilities before they escalate into major water damage.",
      "If you are managing a retail space or buying a home in the area, our specialized mold testing and black mold inspection services provide the documentation you need. From identifying hidden mold detection clues in flat-roofed commercial buildings to assessing water-damage mold inspection needs after plumbing failures, we offer a complete diagnostic approach."
    ],
    neighborhoods: ["Arden Park", "Wilhaggin", "Del Paso Manor", "Sierra Oaks", "Swanston Estates", "Point West"],
    concerns: ["Mid-century home HVAC condensation", "Flat-roof commercial building leaks", "Aging plumbing infrastructure", "Attic ventilation deficiencies", "Retail space indoor air quality", "Slab foundation moisture wicking"],
    faqs: [
      ["Do you inspect commercial retail spaces in Arden-Arcade?", "Absolutely. We conduct detailed commercial mold inspections for retail stores, offices, and warehouses to ensure safe indoor air quality for employees and customers."],
      ["Why is my mid-century home so dusty/musty?", "Older ductwork and poor attic ventilation can contribute to poor air quality and hidden mold. Our indoor air quality testing can help identify the source."],
      ["What happens if you find black mold?", "Our black mold inspection will document the extent of the issue, trace the moisture source, and provide a clear, written report you can use to hire a remediation contractor."]
    ]
  },
  "citrus-heights": {
    name: "Citrus Heights",
    path: "/mold-inspector-citrus-heights-ca",
    intro: "Thorough mold testing, moisture inspection, and air quality assessments for Citrus Heights. Serving homeowners, landlords, and property buyers with clear reporting.",
    paragraphs: [
      "In Citrus Heights, properties often feature varied lot grading and a mix of original construction alongside significant remodeling. This topography can lead to water pooling against foundations, making our specialized residential mold inspections and moisture inspection services critical for local homeowners.",
      "We often perform water-damage mold inspections in Citrus Heights homes dealing with aging roofs or compromised utility spaces like garages and laundry rooms. Our hidden mold detection techniques allow us to identify moisture trapped behind drywall or under flooring without invasive teardowns.",
      "For property managers and commercial tenants in the Sunrise Market area, we offer comprehensive commercial mold inspections and indoor air quality testing. Whether your concern requires a focused black mold inspection or broad mold testing to determine overall air health, our process delivers reliable, evidence-based results."
    ],
    neighborhoods: ["Sylvan Corners", "Birdcage Heights", "Arcade Creek", "Rusch Park", "Sunrise Market area", "Woodside"],
    concerns: ["Foundation water pooling due to lot grading", "Garage and utility room leaks", "Aging roof water intrusion", "Hidden mold in remodeled bathrooms", "Commercial tenant air quality", "HVAC system condensation"],
    faqs: [
      ["Can lot grading cause mold?", "Yes. If water drains toward your foundation rather than away from it, moisture can wick into the walls and crawl space. We evaluate this during our moisture inspection."],
      ["Do you provide reports for landlords and tenants?", "Yes, our residential mold inspections result in objective, written reports that can be used by property managers, tenants, and landlords to make informed decisions."],
      ["How accurate is your mold testing?", "We use calibrated equipment and accredited third-party laboratories for all our mold testing and indoor air quality testing, ensuring highly accurate results."]
    ]
  },
  "elk-grove": {
    name: "Elk Grove",
    path: "/mold-inspector-elk-grove-ca",
    intro: "Expert residential and commercial mold inspections in Elk Grove. We identify moisture issues in newer construction and established neighborhoods.",
    paragraphs: [
      "Elk Grove has experienced rapid expansion, resulting in a unique blend of established neighborhoods and sprawling new construction developments. Even newer homes can suffer from moisture issues due to construction defects, tight building envelopes, or HVAC imbalances. Our residential mold inspections are tailored to evaluate these modern building science challenges.",
      "Tight building envelopes in Elk Grove homes are great for energy efficiency but can trap humidity if ventilation is poor. Our indoor air quality testing and moisture inspection services identify condensation issues in bathrooms, laundry rooms, and around modern HVAC systems before they lead to widespread mold growth.",
      "We also provide comprehensive commercial mold inspections for Elk Grove's growing business parks and retail centers. Whether you require a water-damage mold inspection after a burst pipe, hidden mold detection behind newer drywall, or specific black mold inspection services, we provide thorough, documented answers."
    ],
    neighborhoods: ["Laguna", "Laguna West", "Stonelake", "Cosumnes River", "Sheldon", "Camden"],
    concerns: ["Tight building envelope humidity", "New construction HVAC condensation", "Stucco exterior water intrusion", "Master bathroom exhaust failures", "Commercial business park air quality", "Slab leak moisture"],
    faqs: [
      ["Can new homes in Elk Grove have mold?", "Yes. Newer homes are built very tightly for energy efficiency. If ventilation is inadequate, everyday activities can create enough trapped humidity to support mold growth."],
      ["Do you inspect for hidden mold behind stucco?", "Yes. Stucco failures can lead to significant water intrusion. We use advanced moisture inspection tools to look for hidden mold detection clues inside the walls."],
      ["What is included in a commercial mold inspection?", "We assess the building's exterior, roof, HVAC systems, plumbing, and interior spaces, followed by targeted mold testing if necessary to verify indoor air quality."]
    ]
  },
  "roseville": {
    name: "Roseville",
    path: "/mold-inspector-roseville-ca",
    intro: "Roseville’s premier mold inspection and mold testing service. We provide thorough moisture detection and air quality solutions for large homes and commercial spaces.",
    paragraphs: [
      "Roseville properties often feature larger floor plans, complex multi-zone HVAC systems, and expansive master suites. These features require a methodical approach to residential mold inspections. A water event on the second floor can travel through complex pathways, making our hidden mold detection and moisture inspection services vital.",
      "The hot summer climate in Roseville means air conditioning systems run constantly, which can lead to condensation and ductwork issues. We frequently conduct indoor air quality testing and commercial mold inspections for offices and retail centers dealing with HVAC-related moisture or strange odors.",
      "Whether you need a black mold inspection for a specific concern, a comprehensive water-damage mold inspection after a plumbing failure, or routine mold testing before buying a home in West Roseville, our documented reports give you the clear evidence needed to take the right next steps."
    ],
    neighborhoods: ["West Roseville", "East Roseville", "Cresthaven", "Johnson Ranch", "Woodcreek", "Highland Reserve"],
    concerns: ["Multi-zone HVAC condensation", "Large-scale plumbing failures", "Second-story bathroom leaks", "Commercial office air quality", "Attic ventilation in intense heat", "Hidden mold in expansive floor plans"],
    faqs: [
      ["How long does a residential mold inspection take for a large home?", "For larger Roseville homes, an inspection typically takes 2 to 3 hours, depending on the complexity of the HVAC systems and the specific moisture concerns."],
      ["Do you test for mold in HVAC ducts?", "Yes. If we suspect the HVAC system is harboring moisture or mold, we can perform targeted indoor air quality testing directly from the supply registers."],
      ["Can you help me after a major plumbing leak?", "Absolutely. Our water-damage mold inspection will map out exactly how far the moisture traveled, identifying hidden mold detection risks you might not see."]
    ]
  },
  "folsom": {
    name: "Folsom",
    path: "/mold-inspector-folsom-ca",
    intro: "Specialized mold inspection and indoor air quality testing for Folsom, CA. We investigate moisture issues in homes, historic properties, and newer developments.",
    paragraphs: [
      "Folsom’s unique geography, encompassing lakeside properties, historic downtown buildings, and sprawling new developments like Empire Ranch, demands versatile inspection expertise. Our residential mold inspections account for everything from hillside drainage issues to complex moisture intrusion in custom homes.",
      "Properties closer to the lake or natural waterways may experience different humidity profiles. We utilize advanced moisture inspection tools and hidden mold detection techniques to identify water intrusion that might otherwise go unnoticed. Our mold testing and indoor air quality testing ensure your family is breathing safe air.",
      "We also serve the local business community with detailed commercial mold inspections. Whether you need a black mold inspection in a historic Folsom storefront or a water-damage mold inspection following a severe weather event, our meticulous documentation process provides the clarity you need to proceed."
    ],
    neighborhoods: ["Historic Folsom", "Broadstone", "Empire Ranch", "American River Canyon", "Lexington Hills", "Natoma Station"],
    concerns: ["Hillside lot drainage and retaining walls", "Custom home complex roof leaks", "Historic storefront moisture issues", "Lakeside humidity and condensation", "Hidden mold in large custom bathrooms", "Indoor air quality for property buyers"],
    faqs: [
      ["Do you provide inspections for property buyers in Folsom?", "Yes. A targeted residential mold inspection is an excellent supplement to your standard home inspection, especially for larger custom homes or properties with a known leak history."],
      ["Can you test the air quality in my Folsom office?", "Yes, we perform commercial mold inspections and comprehensive indoor air quality testing to ensure a healthy environment for your employees."],
      ["How do you find hidden mold?", "We use a combination of infrared thermal imaging, non-penetrating moisture meters, and visual building science analysis for accurate hidden mold detection."]
    ]
  },
  "fair-oaks": {
    name: "Fair Oaks",
    path: "/mold-inspector-fair-oaks-ca",
    intro: "Trusted mold testing and moisture inspections for Fair Oaks. We provide clear documentation for older homes, complex lots, and commercial spaces.",
    paragraphs: [
      "Fair Oaks is known for its rolling hills, mature trees, and beautiful older properties. The varied topography often creates unique exterior drainage challenges, directing water toward crawl spaces and foundations. Our residential mold inspections specifically target these structural vulnerabilities to identify the true source of moisture.",
      "Because many homes here are nestled in shaded, wooded environments, natural sunlight doesn't always dry out the exterior efficiently. This makes our moisture inspection and hidden mold detection services crucial for identifying hidden rot or mold in siding and roofing. We also provide precise mold testing to confirm the presence of elevated spores.",
      "Whether you require a black mold inspection for an aging crawl space, indoor air quality testing for your family’s peace of mind, or a water-damage mold inspection after a localized flood, we provide evidence-based answers. We also extend our services to local businesses with thorough commercial mold inspections."
    ],
    neighborhoods: ["Rollingwood", "Phoenix Field", "Northridge", "Walnut Creek", "Old Fair Oaks Village", "Hazel Avenue area"],
    concerns: ["Wooded lot shade preventing exterior drying", "Sloped terrain causing foundation water intrusion", "Older crawl space ventilation failures", "Hidden mold in aging siding/roofing", "Musty odors in historic village homes", "Commercial retail moisture issues"],
    faqs: [
      ["Does living in a wooded area increase mold risk?", "It can. Shade and reduced airflow can keep exteriors damp longer, increasing the risk of moisture intrusion. Our moisture inspection evaluates these exterior factors."],
      ["Do you go into crawl spaces?", "Yes, as long as it is physically safe and accessible, our residential mold inspections include a thorough evaluation of the crawl space."],
      ["What is the difference between mold testing and a mold inspection?", "An inspection is a comprehensive physical investigation of the property to find moisture and mold. Mold testing involves taking physical samples (air or surface) for laboratory analysis to identify specific spore types and counts."]
    ]
  },
  "rancho-cordova": {
    name: "Rancho Cordova",
    path: "/mold-inspector-rancho-cordova-ca",
    intro: "Comprehensive mold inspection, testing, and air quality services for Rancho Cordova. Serving homeowners, renters, and commercial property managers.",
    paragraphs: [
      "Rancho Cordova features a broad mix of residential neighborhoods, massive commercial business parks, and rapidly expanding new housing developments. This diversity means we routinely perform both complex commercial mold inspections and detailed residential mold inspections tailored to the specific construction era of the property.",
      "Many older neighborhoods in Rancho Cordova deal with aging plumbing and HVAC systems, making them prime candidates for our hidden mold detection and moisture inspection services. For newer developments, we focus heavily on indoor air quality testing and verifying that tight building envelopes are breathing properly.",
      "Whether you are a tenant dealing with a recurring leak, a landlord needing a documented water-damage mold inspection, or a business owner requiring a specific black mold inspection, our process is transparent and evidence-driven. We provide the mold testing data you need to make informed property decisions."
    ],
    neighborhoods: ["Mather", "Gold River", "Hagan", "Sunrise", "Cordova Meadows", "Anatolia"],
    concerns: ["Commercial business park HVAC issues", "Aging plumbing in established neighborhoods", "Tight building envelopes in new developments", "Tenant/Landlord documentation needs", "Hidden mold behind aging drywall", "Post-leak water damage assessment"],
    faqs: [
      ["Do you work with commercial property managers in Rancho Cordova?", "Yes. We regularly conduct commercial mold inspections and indoor air quality testing for business parks, warehouses, and office complexes."],
      ["Can you provide documentation for a landlord dispute?", "Our residential mold inspections result in objective, factual reports based on building science and laboratory mold testing. This documentation is highly useful for resolving property disputes calmly and professionally."],
      ["What should I do if I find black mold?", "Do not disturb it, as this can spread spores. Call us for a professional black mold inspection and moisture investigation to determine the source of the water before planning removal."]
    ]
  }
};

const fileContent = \`import { Link } from "wouter";
import { ArrowRight, Check, ChevronDown, MapPin, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import { DISPLAY_PHONE, PHONE } from "@/components/SiteShell";

type Location = { 
  name: string; 
  path: string; 
  intro: string; 
  paragraphs: string[]; 
  neighborhoods: string[]; 
  concerns: string[]; 
  faqs: [string, string][] 
};

const locations: Record<string, Location> = \${JSON.stringify(locationsData, null, 2)};

export default function LocationPage({ slug }: { slug: string }) {
  const location = locations[slug] ?? locations.sacramento;
  const schema = { 
    "@context": "https://schema.org", 
    "@type": "Service", 
    name: \`Mold inspector in \${location.name}\`, 
    description: location.intro, 
    provider: { "@type": "ProfessionalService", name: "Sactown Mold's Inspections", telephone: DISPLAY_PHONE }, 
    areaServed: location.name 
  };
  
  return (
    <>
      <Seo title={\`Mold Inspector \${location.name} CA | Sactown Mold's Inspections\`} description={location.intro} path={location.path} schema={schema} />
      
      <section className="bg-[#19352d] text-[#f6f5f0]">
        <div className="container py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="eyebrow text-[#d9a66a]">
              <span className="h-px w-8 bg-[#d9a66a]" /> Serving nearby Sacramento communities
            </div>
            <h1 className="mt-7 font-display text-5xl font-semibold leading-[.98] tracking-[-.065em] sm:text-7xl">
              Mold Inspection & Testing in {location.name}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d5e0d5]">
              {location.intro}
            </p>
            <a href={\`tel:\${PHONE}\`} className="button-accent mt-9">
              <Phone size={17} /> Call now · {DISPLAY_PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div>
            <div className="eyebrow">
              <span className="h-px w-8 bg-[#d9683e]" /> Local context
            </div>
            <h2 className="section-title">A property-specific look, close to home.</h2>
            <div className="body-copy space-y-5">
              {location.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-[#e6ebe4] p-5 text-sm leading-6 text-[#365344]">
              <MapPin size={18} className="mt-1 shrink-0 text-[#d9683e]" /> 
              Primary location: 2848 Arden Wy, Sacramento, CA 95825
            </div>
          </div>
          <div>
            <div className="eyebrow">
              <span className="h-px w-8 bg-[#d9683e]" /> Common questions in {location.name}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {location.concerns.map((item) => (
                <div key={item} className="rounded-2xl border border-[#19352d]/10 bg-[#eef0e9] p-5 text-sm font-semibold">
                  <Check size={17} className="mb-4 text-[#d9683e]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#e6ebe4]">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow">
              <span className="h-px w-8 bg-[#d9683e]" /> Areas we know
            </div>
            <h2 className="section-title">Neighborhood context helps.</h2>
            <p className="body-copy">
              Every appointment is scoped to the property, but these are some nearby communities we think about when planning access and travel.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {location.neighborhoods.map((area) => (
              <div key={area} className="rounded-2xl bg-[#f6f5f0] px-4 py-5 text-sm font-semibold text-[#365344] shadow-sm">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="eyebrow">
              <span className="h-px w-8 bg-[#d9683e]" /> Plan the visit
            </div>
            <h2 className="section-title">Start with the question you want answered.</h2>
            <p className="body-copy">
              We serve Sacramento first and schedule nearby appointments based on property type, concern, scope, and timing.
            </p>
            <a href={\`tel:\${PHONE}\`} className="button-primary mt-8">
              <Phone size={16} /> Speak with an inspector
            </a>
          </div>
          <div className="space-y-3">
            {location.faqs.map(([question, answer]) => (
              <details key={question} className="faq-item">
                <summary>
                  {question}
                  <ChevronDown size={19} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#19352d] text-[#f6f5f0]">
        <div className="container flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow text-[#d9a66a]">
              <span className="h-px w-8 bg-[#d9a66a]" /> Explore services
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.055em] sm:text-5xl">
              Find the right {location.name} inspection.
            </h2>
          </div>
          <Link href="/mold-inspection-sacramento-ca" className="button-accent">
            View services <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

export { locations };
\`;

fs.writeFileSync("client/src/pages/LocationPage.tsx", fileContent, "utf-8");
console.log("LocationPage.tsx updated successfully.");
