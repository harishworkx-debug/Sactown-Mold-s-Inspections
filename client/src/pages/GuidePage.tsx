import { Link } from "wouter";
import { ArrowRight, BookOpen, Check, ChevronRight, HelpCircle, Phone, ShieldCheck } from "lucide-react";
import Seo from "@/components/Seo";
import { DISPLAY_PHONE, PHONE } from "@/components/SiteShell";

export type Guide = {
  slug: string;
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intent: string;
  intro: string;
  sections: { title: string; content: string[] }[];
  takeaways: string[];
  ctaText: string;
  ctaHref: string;
  relatedGuides: [string, string][];
};

export const guides: Record<string, Guide> = {
  "mold-inspection-cost-sacramento": {
    slug: "mold-inspection-cost-sacramento",
    path: "/guides/mold-inspection-cost-sacramento",
    title: "How Much Does a Mold Inspection Cost in Sacramento? | Price Guide",
    metaDescription: "Understand professional mold inspection costs in Sacramento, CA. Learn what factors influence pricing, lab fees, and what is included in a thorough assessment.",
    h1: "How Much Does a Mold Inspection Cost in Sacramento, CA?",
    eyebrow: "Commercial Investigation & Pricing Guide",
    intent: "Commercial Investigation",
    intro: "Understanding mold inspection pricing helps property owners make informed decisions without unexpected surprises. In Sacramento, standard residential mold inspection costs depend on property size, structural complexity, and whether laboratory sampling is required.",
    sections: [
      {
        title: "Key Factors That Influence Mold Inspection Costs",
        content: [
          "Property Square Footage & Layout: Larger homes or multi-family properties require more time to systematically inspect living areas, basements, attics, and crawl spaces.",
          "Crawl Space and Attic Accessibility: Accessing tight subfloor crawl spaces or high-pitch attic spaces requires specialized protective equipment and thorough physical inspection time.",
          "Laboratory Air & Surface Sampling: While a visual moisture inspection provides essential physical findings, optional air cassette or surface swab samples sent to an accredited third-party laboratory involve separate per-sample analytical fees.",
          "Thermal Imaging & Moisture Mapping: Professional inspectors use calibrated moisture meters and FLIR thermal imaging cameras to locate hidden moisture behind drywall without invasive teardown."
        ]
      },
      {
        title: "What is Included in a Professional Inspection Fee?",
        content: [
          "A comprehensive mold inspection includes a full property walkthrough, surface moisture reading logs, environmental humidity measurements, digital photo documentation, and a detailed written inspection report with recommended next steps.",
          "Beware of low-cost inspections that act primarily as sales funnels for costly remediation services. Independent inspectors who do not perform remediation offer unbiased, objective evaluations."
        ]
      }
    ],
    takeaways: [
      "Standard residential inspections range based on property size and access requirements.",
      "Laboratory testing is optional and billed per sample location.",
      "Independent inspectors deliver unbiased findings free from remediation conflicts of interest."
    ],
    ctaText: "Explore Mold Inspection Services",
    ctaHref: "/mold-inspection-sacramento-ca",
    relatedGuides: [
      ["Mold Inspection vs. Mold Testing", "/guides/mold-inspection-vs-mold-testing"],
      ["Does Insurance Cover Mold Inspection?", "/guides/does-insurance-cover-mold-inspection"]
    ]
  },
  "signs-of-hidden-mold-sacramento": {
    slug: "signs-of-hidden-mold-sacramento",
    path: "/guides/signs-of-hidden-mold-sacramento",
    title: "7 Signs of Hidden Mold in Sacramento Homes | Warning Signs",
    metaDescription: "Discover key warning signs of hidden mold in Sacramento homes, from persistent musty odors to wall discoloration and window condensation.",
    h1: "Signs of Hidden Mold in Sacramento Homes",
    eyebrow: "Informational & Early Detection Guide",
    intent: "Informational",
    intro: "Mold often grows out of plain sight—behind drywall, beneath custom cabinetry, inside HVAC ductwork, or within shaded crawl spaces. Recognizing early warning signs protects both indoor air quality and structural materials.",
    sections: [
      {
        title: "Top Indicators of Concealed Moisture & Mold",
        content: [
          "Persistent Musty Odor: An earthy, musty smell that lingers even after deep cleaning is one of the most reliable indicators of hidden fungal growth in wall cavities or subflooring.",
          "Drywall Discoloration & Bubbling: Water intrusion behind walls causes paint to bubble, wallpaper to peel, or drywall paper to develop subtle yellow/brown staining.",
          "Unexplained Humidity Spikes: Indoor relative humidity consistently above 60% creates ideal conditions for condensation and non-visible mold activity.",
          "Past Uncorrected Plumbing Leaks: Even minor supply line weeping under sinks or behind washing machines can support hidden growth over time if structural drying was incomplete."
        ]
      },
      {
        title: "Non-Destructive Detection Methods",
        content: [
          "Identifying hidden mold does not require tearing open walls prematurely. Certified inspectors use infrared thermal imaging to map temperature anomalies indicative of moisture, paired with moisture meters to pinpoint damp materials."
        ]
      }
    ],
    takeaways: [
      "Musty odors and bubbling drywall signal active concealed moisture.",
      "Thermal imaging detects dampness behind walls non-destructively.",
      "Early detection prevents extensive material decay."
    ],
    ctaText: "Learn About Hidden Mold Detection",
    ctaHref: "/mold-detection-sacramento-ca",
    relatedGuides: [
      ["What Happens During a Mold Inspection?", "/guides/what-happens-during-mold-inspection"],
      ["When to Get an Air Quality Test", "/guides/when-to-get-indoor-air-quality-test"]
    ]
  },
  "mold-inspection-vs-mold-testing": {
    slug: "mold-inspection-vs-mold-testing",
    path: "/guides/mold-inspection-vs-mold-testing",
    title: "Mold Inspection vs. Mold Testing: What's the Difference?",
    metaDescription: "Understand the key differences between a visual mold inspection and laboratory mold testing in Sacramento, CA. Choose the right service for your needs.",
    h1: "Mold Inspection vs. Mold Testing: What's the Difference?",
    eyebrow: "Service Comparison Guide",
    intent: "Comparison",
    intro: "Homeowners often use the terms 'mold inspection' and 'mold testing' interchangeably, but they serve distinct diagnostic functions. Knowing the difference ensures you choose the appropriate service for your situation.",
    sections: [
      {
        title: "What is a Mold Inspection?",
        content: [
          "A mold inspection is a comprehensive physical examination of accessible property areas. The inspector investigates building materials, measures moisture levels, checks ventilation, identifies water pathways, and documents visible growth and structural conditions."
        ]
      },
      {
        title: "What is Mold Testing?",
        content: [
          "Mold testing involves collecting physical samples—such as airborne spore trap samples, surface swabs, or tape lifts—and submitting them to an accredited microbiological laboratory for species identification and spore concentration quantification."
        ]
      },
      {
        title: "Which Service Do You Need?",
        content: [
          "If you have a visible water leak or damp spot, a visual moisture inspection is usually the primary starting point. If you need baseline air quality data for medical, legal, or real estate clearance purposes, targeted lab testing provides verifiable quantitative metrics."
        ]
      }
    ],
    takeaways: [
      "Inspection evaluates property conditions, building materials, and moisture sources.",
      "Testing measures airborne spore levels and identifies specific fungal species.",
      "Combining both gives the complete physical and environmental picture."
    ],
    ctaText: "Compare Inspection & Testing Options",
    ctaHref: "/mold-testing-sacramento-ca",
    relatedGuides: [
      ["How Much Does Mold Inspection Cost?", "/guides/mold-inspection-cost-sacramento"],
      ["What Happens During a Mold Inspection?", "/guides/what-happens-during-mold-inspection"]
    ]
  },
  "what-to-do-after-discovering-black-mold": {
    slug: "what-to-do-after-discovering-black-mold",
    path: "/guides/what-to-do-after-discovering-black-mold",
    title: "What to Do After Discovering Black Mold | Step-by-Step Action Plan",
    metaDescription: "Found dark or suspected black mold in your Sacramento property? Follow these practical, safe action steps before scheduling an independent inspection.",
    h1: "What to Do After Discovering Black Mold in Your Property",
    eyebrow: "Safety & Action Guide",
    intent: "Informational",
    intro: "Discovering dark or suspicious discoloration in your kitchen, bathroom, attic, or crawl space can be alarming. Taking calm, methodical safety steps prevents cross-contamination and ensures proper documentation.",
    sections: [
      {
        title: "Immediate Action Steps",
        content: [
          "1. Avoid Disturbing the Material: Do not scrub, scrape, or blow air directly across suspected mold growth. Disturbing dry mold spores releases them into the air, spreading contamination to un-affected rooms.",
          "2. Stop Active Water Sources: If the mold is near a leaking pipe or valve, shut off the water supply to prevent ongoing dampness.",
          "3. Control Air Movement: Close doors to the affected area and turn off localized fans or HVAC vents if growth is near air returns.",
          "4. Schedule an Independent Assessment: Document visible conditions with a professional inspection before hiring a remediation contractor."
        ]
      },
      {
        title: "Can Fungal Species Be Confirmed by Color Alone?",
        content: [
          "No. Many mold species—including Cladosporium, Aspergillus, and Stachybotrys—can appear dark brown or black. Only laboratory analysis can definitively identify the specific organism."
        ]
      }
    ],
    takeaways: [
      "Never scrub or disturb dry dark mold material without containment.",
      "Address active moisture sources immediately.",
      "Color alone cannot confirm species—professional documentation is essential."
    ],
    ctaText: "Schedule a Black Mold Inspection",
    ctaHref: "/black-mold-inspection-sacramento-ca",
    relatedGuides: [
      ["Does Insurance Cover Mold Inspection?", "/guides/does-insurance-cover-mold-insurance"],
      ["Signs of Hidden Mold in Sacramento", "/guides/signs-of-hidden-mold-sacramento"]
    ]
  },
  "does-insurance-cover-mold-inspection": {
    slug: "does-insurance-cover-mold-inspection",
    path: "/guides/does-insurance-cover-mold-inspection",
    title: "Does Homeowners Insurance Cover Mold Inspection in CA?",
    metaDescription: "Learn how California homeowners insurance policy guidelines handle mold inspection, testing, and water damage documentation.",
    h1: "Does Homeowners Insurance Cover Mold Inspection in California?",
    eyebrow: "Policy & Insurance Coverage Guide",
    intent: "Informational",
    intro: "Coverage for mold inspections and moisture evaluations depends heavily on your specific insurance policy terms and the underlying cause of the water intrusion.",
    sections: [
      {
        title: "Sudden & Accidental Perils vs. Maintenance Issues",
        content: [
          "Covered Perils: Insurance policies typically cover mold inspections and resulting moisture damage if the mold stems directly from a sudden, accidental water event—such as a burst pipe, water heater failure, or appliance discharge.",
          "Excluded Claims: Mold resulting from long-term unresolved maintenance, deferred roof repairs, or chronic ground moisture accumulation is generally excluded from standard homeowners coverage."
        ]
      },
      {
        title: "The Role of Independent Third-Party Documentation",
        content: [
          "Insurance adjusters require clear, objective proof of water damage scope and affected material boundaries. An independent assessment report with moisture readings and photo documentation provides unbiased evidence for your claim record."
        ]
      }
    ],
    takeaways: [
      "Sudden, accidental plumbing bursts are often covered perils.",
      "Chronic leak maintenance is typically excluded.",
      "Independent inspection reports support accurate claim documentation."
    ],
    ctaText: "View Mold Assessment Details",
    ctaHref: "/mold-assessment-sacramento-ca",
    relatedGuides: [
      ["How Much Does Mold Inspection Cost?", "/guides/mold-inspection-cost-sacramento"],
      ["Water Damage Mold Inspection Protocol", "/water-damage-mold-inspection-sacramento-ca"]
    ]
  },
  "how-long-does-mold-inspection-take": {
    slug: "how-long-does-mold-inspection-take",
    path: "/guides/how-long-does-mold-inspection-take",
    title: "How Long Does a Professional Mold Inspection Take?",
    metaDescription: "Find out how long a professional mold inspection takes for Sacramento homes and commercial properties, including report delivery timelines.",
    h1: "How Long Does a Professional Mold Inspection Take?",
    eyebrow: "Timeline & Expectations Guide",
    intent: "Informational",
    intro: "Knowing what to expect during your appointment helps you plan your schedule effectively. Inspection duration depends on home size, property access, and evaluation scope.",
    sections: [
      {
        title: "Average Inspection Timeframes",
        content: [
          "Standard Residential Home (1,500 – 2,500 sq ft): 1.5 to 2.5 hours.",
          "Large Estates or Custom Properties: 2.5 to 4 hours.",
          "Commercial Buildings & Business Parks: Scaled according to square footage and HVAC complexity."
        ]
      },
      {
        title: "Report Delivery & Lab Turnaround",
        content: [
          "Inspection Written Report: Detailed photo summary and moisture logs delivered within 24 business hours.",
          "Laboratory Mold Samples: Accredited laboratory air and surface analysis results are returned in 24 to 48 business hours when sampling is included."
        ]
      }
    ],
    takeaways: [
      "Standard residential visits take 1.5 to 2.5 hours.",
      "Written inspection reports are delivered within 24 hours.",
      "Lab sample analysis takes 24 to 48 business hours."
    ],
    ctaText: "Schedule a Residential Inspection",
    ctaHref: "/residential-mold-inspection-sacramento-ca",
    relatedGuides: [
      ["What Happens During a Mold Inspection?", "/guides/what-happens-during-mold-inspection"],
      ["Mold Inspection vs. Mold Testing", "/guides/mold-inspection-vs-mold-testing"]
    ]
  },
  "what-happens-during-mold-inspection": {
    slug: "what-happens-during-mold-inspection",
    path: "/guides/what-happens-during-mold-inspection",
    title: "What Happens During a Professional Mold Inspection?",
    metaDescription: "Step-by-step guide explaining what happens during a professional mold inspection in Sacramento, from initial walkthrough to final written report.",
    h1: "What Happens During a Professional Mold Inspection?",
    eyebrow: "Step-by-Step Inspection Process",
    intent: "Informational",
    intro: "A professional mold inspection is a methodical, non-destructive investigation of your property's accessible building components, moisture patterns, and indoor environment.",
    sections: [
      {
        title: "The 5-Step Inspection Walkthrough",
        content: [
          "1. Initial Intake & Property History: The inspector reviews your specific concerns, past water leaks, renovation history, and room observations.",
          "2. Visual & Thermal Surface Investigation: Systematic review of living spaces, bathrooms, kitchens, attics, crawl spaces, and utility rooms using infrared thermal cameras.",
          "3. Moisture & Relative Humidity Readings: Moisture meters measure water content in drywall, wood, and subfloors, paired with ambient indoor relative humidity logs.",
          "4. Optional Sampling Plan (If Needed): If hidden fungal activity or spore baseline verification is necessary, targeted air or surface samples are collected.",
          "5. Written Summary & Recommendation Report: A clean, photo-supported summary organizing factual observations for repair or remediation planning."
        ]
      }
    ],
    takeaways: [
      "Visual assessment is paired with thermal imaging and moisture meters.",
      "Attic, crawl space, and living areas are systematically checked.",
      "You receive a clear, photo-supported written report."
    ],
    ctaText: "Book Your Mold Inspection",
    ctaHref: "/mold-inspection-sacramento-ca",
    relatedGuides: [
      ["How Long Does Mold Inspection Take?", "/guides/how-long-does-mold-inspection-take"],
      ["Signs of Hidden Mold in Sacramento", "/guides/signs-of-hidden-mold-sacramento"]
    ]
  },
  "when-to-get-indoor-air-quality-test": {
    slug: "when-to-get-indoor-air-quality-test",
    path: "/guides/when-to-get-indoor-air-quality-test",
    title: "When Should You Get an Indoor Air Quality Test? | Key Indicators",
    metaDescription: "Learn when to schedule an indoor air quality test in Sacramento. Discover key triggers like unexplained odors, post-renovation dust, or property transactions.",
    h1: "When Should You Get an Indoor Air Quality Test?",
    eyebrow: "Environmental Air Quality Guide",
    intent: "Informational",
    intro: "Indoor air quality directly impacts comfort and property environment. Knowing when to test ensures you collect actionable environmental data when it matters most.",
    sections: [
      {
        title: "Top Scenarios for Air Quality Testing",
        content: [
          "Unexplained Musty Odors: When rooms exhibit a persistent odor but surface inspections show no visible mold.",
          "Post-Renovation or Water Restoration: Verifying that dust, drywall particulates, or airborne mold spores have been properly contained following major construction.",
          "Real Estate Transactions: Prospective buyers seeking documented indoor air quality baselines prior to completing a home purchase.",
          "HVAC Contamination Concerns: Inspecting supply vents and duct returns after noticing dust buildup or dampness in air handling units."
        ]
      }
    ],
    takeaways: [
      "Test when unexplained musty odors persist without visible growth.",
      "Verify air health post-renovation or water restoration.",
      "Establish baseline environmental metrics before real estate purchases."
    ],
    ctaText: "Explore Indoor Air Quality Services",
    ctaHref: "/indoor-air-quality-sacramento-ca",
    relatedGuides: [
      ["Mold Inspection vs. Mold Testing", "/guides/mold-inspection-vs-mold-testing"],
      ["Signs of Hidden Mold in Sacramento", "/guides/signs-of-hidden-mold-sacramento"]
    ]
  }
};

export default function GuidePage({ slug }: { slug?: string }) {
  if (!slug || !guides[slug]) {
    return (
      <>
        <Seo
          title="Sacramento Mold & Indoor Environment Guides | Sactown Mold Inspections"
          description="Explore educational guides on mold inspection costs, hidden mold detection, insurance coverage, testing vs inspection, and air quality in Sacramento, CA."
          path="/guides"
        />
        <section className="bg-[#19352d] text-[#f6f5f0]">
          <div className="container py-20 sm:py-28">
            <div className="max-w-3xl">
              <div className="eyebrow text-[#d9a66a]">
                <span className="h-px w-8 bg-[#d9a66a]" /> Educational Resource Center
              </div>
              <h1 className="mt-7 font-display text-5xl font-semibold leading-[.98] tracking-[-.065em] sm:text-7xl">
                Sacramento Mold & Air Quality Guides
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d5e0d5]">
                Factual, evidence-based answers to common customer questions about mold inspection pricing, hidden leak detection, insurance policies, and air quality testing.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.values(guides).map((guide) => (
                <Link
                  key={guide.slug}
                  href={guide.path}
                  className="group flex flex-col justify-between rounded-3xl border border-[#19352d]/10 bg-white p-7 shadow-sm transition hover:border-[#d9683e] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#d9683e]">
                      <BookOpen size={15} /> {guide.intent}
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-semibold text-[#19352d] group-hover:text-[#d9683e]">
                      {guide.h1}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[#627269]">
                      {guide.metaDescription}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#19352d] group-hover:text-[#d9683e]">
                    Read guide <ChevronRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  const guide = guides[slug];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.metaDescription,
    author: { "@type": "Organization", name: "Sactown Mold Inspections" },
    publisher: {
      "@type": "Organization",
      name: "Sactown Mold Inspections",
      telephone: DISPLAY_PHONE
    }
  };

  return (
    <>
      <Seo
        title={guide.title}
        description={guide.metaDescription}
        path={guide.path}
        schema={articleSchema}
      />

      <section className="bg-[#19352d] text-[#f6f5f0]">
        <div className="container py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="eyebrow text-[#d9a66a]">
              <span className="h-px w-8 bg-[#d9a66a]" /> {guide.eyebrow}
            </div>
            <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-6xl">
              {guide.h1}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d5e0d5]">
              {guide.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="button-accent">
                <Phone size={16} /> Call now · {DISPLAY_PHONE}
              </a>
              <Link href={guide.ctaHref} className="button-ghost">
                {guide.ctaText} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid gap-14 lg:grid-cols-[1fr_.45fr]">
          <div className="space-y-12">
            {guide.sections.map((sec, idx) => (
              <div key={idx} className="rounded-3xl border border-[#19352d]/10 bg-white p-8 shadow-sm">
                <h2 className="font-display text-2xl font-semibold text-[#19352d]">
                  {sec.title}
                </h2>
                <div className="mt-5 space-y-4 body-copy">
                  {sec.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-3xl bg-[#e6ebe4] p-8">
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[.18em] text-[#d9683e]">
                <ShieldCheck size={18} /> Essential Key Takeaways
              </div>
              <div className="mt-5 space-y-3">
                {guide.takeaways.map((item, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-3 text-sm font-semibold text-[#365344]">
                    <Check size={17} className="mt-0.5 shrink-0 text-[#d9683e]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl bg-[#19352d] p-8 text-[#f6f5f0]">
                <div className="eyebrow text-[#d9a66a]">
                  <span className="h-px w-8 bg-[#d9a66a]" /> Take the next step
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold">
                  Need a professional inspection?
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#c7d4ca]">
                  Speak with an independent inspector to discuss your property, symptoms, and timeline.
                </p>
                <a href={`tel:${PHONE}`} className="button-accent mt-6 w-full justify-center">
                  <Phone size={16} /> Call {DISPLAY_PHONE}
                </a>
                <Link href={guide.ctaHref} className="button-ghost mt-3 w-full justify-center text-center">
                  {guide.ctaText}
                </Link>
              </div>

              <div className="rounded-3xl border border-[#19352d]/10 bg-white p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#809187]">
                  <HelpCircle size={15} /> Related Guides
                </div>
                <div className="mt-4 space-y-2">
                  {guide.relatedGuides.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="block rounded-xl p-3 text-sm font-semibold text-[#365344] transition hover:bg-[#e6ebe4] hover:text-[#d9683e]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
