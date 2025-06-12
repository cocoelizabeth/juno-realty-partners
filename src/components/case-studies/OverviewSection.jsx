import React from "react"
import { OverviewSectionStyles } from "../../styles/case-studies/CaseStudyPageStyles"

export default function OverviewSection({ projectFacts, otherOverviewFacts, projectNameForCaseStudy}) {
    // const title = projectFacts.title;
    // const type = projectFacts.type;
    const units = projectFacts.units;
    const status = projectFacts.status;
    const role = projectFacts.role;

    const extraFacts = [...otherOverviewFacts]
    let retailFactLabel = null;
    let retailFactValue = null;

    const retailIndex = extraFacts.findIndex((f) =>
        f.trim().toLowerCase().startsWith("retail space")
    )

  if (retailIndex >-1) {
    const raw = extraFacts.splice(retailIndex, 1)[0]
    // split at the first colon:
    const [label,...rest] = raw.split(":")
    retailFactLabel = label.trim()
    retailFactValue = rest.join(":").trim()
  }

  let densityFactLabel = null;
  let densityFactValue = null;

  const densityIndex = extraFacts.findIndex((f) => 
    f.trim().toLowerCase().startsWith("density")
  )

  if (densityIndex >-1) {
    const raw = extraFacts.splice(densityIndex, 1)[0]
    const [label,...rest] = raw.split(":")
    densityFactLabel = label.trim();
    densityFactValue = rest.join(":").trim()
  }

  let architectFactLabel = null;
  let architectFactValue = null;

  const architectIndex = extraFacts.findIndex((f) => 
    f.trim().toLowerCase().startsWith("architect")
)

    if (architectIndex >-1) {
        const raw = extraFacts.splice(architectIndex, 1)[0]
        const [label, ...rest] = raw.split(":")
        architectFactLabel = label.trim();
        architectFactValue = rest.join(":").trim()
    }

  const overviewList = []

  if (status) {
    overviewList.push({ label: "Status", value: status})
  }

  if (units != null) {
    overviewList.push({ label: "# of Units", value: `${units}`})
  }

  if (densityFactLabel) {
    overviewList.push({ label: densityFactLabel, value: densityFactValue })
  }

  if (retailFactLabel) {
    overviewList.push({ label: retailFactLabel, value: retailFactValue})
  }

  if (role) {
    overviewList.push({ label: "Role", value: role})
  }

  if (architectFactLabel) {
    overviewList.push({ label: architectFactLabel, value: architectFactValue})
  }
  
  extraFacts.forEach((rawFact) => {
    // If the editor typed “Foo: Bar” and it didn’t match Retail Space,
    // you can parse it similarly, or just render it as one string.
    if (rawFact.includes(":")) {
      const [lbl, ...rest] = rawFact.split(":")
      overviewList.push({
        label: lbl.trim(),
        value: rest.join(":").trim(),
      })
    } else {
      // No colon → just show the whole thing
      overviewList.push({ label: rawFact.trim(), value: null })
    }
  })


   
   
  return (
      <OverviewSectionStyles>
        <h3>OVERVIEW</h3>
        <ul>
          {overviewList.map((item, i) => (
            <li key={i}>
              {item.value != null ? (
                <>
                  <span className="label">{item.label}:</span> {item.value}
                </>
              ) : (
                // if no “value” (just a rawFact string), render label alone
                item.label
              )}
            </li>
          ))}
        </ul>
      </OverviewSectionStyles>
  )
}
