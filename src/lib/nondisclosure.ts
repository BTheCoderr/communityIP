export const NDA_TITLE = "Nondisclosure Agreement";

export const NDA_AGREE_LABEL =
  'By clicking "AGREE" I understand that I am entering into a legally binding Agreement with Keeley DeAngelo, LLP to protect the confidentiality of my invention idea under review.';

export const ndaSections = [
  {
    type: "intro" as const,
    text: "This Nondisclosure Agreement is made and entered into by and between you, the discloser of an invention idea (\"Inventor\") and Keeley DeAngelo, LLP, a Rhode Island patent agency, its advisers and affiliates, together called \"Patent Agent.\"",
  },
  {
    type: "numbered" as const,
    number: 1,
    text: "Inventors develop and own all rights to their idea (\"Invention\") and wish to disclose the invention to Patent Agent for evaluation of patentability. Both Inventor and Patent Agent want the Disclosure to remain confidential and proprietary to Inventor as described here.",
  },
  {
    type: "numbered" as const,
    number: 2,
    text: "Patent Agent will hold in confidence all information about the invention that Inventor discloses to Patent Agent hereafter, and shall not directly or indirectly disclose to others such information except as expressly allowed by Inventor. Patent Agent will protect the Disclosure as carefully as it protects its own trade secret information. All Disclosure information shall be written (either by text or graphic) or tangible; orally transmitted information is not included by this Agreement. Inventor will make clear and keep a record of what information Inventor has disclosed to Patent Agent.",
  },
  {
    type: "numbered" as const,
    number: 3,
    text: "Inventor retains all rights to their invention and Disclosure.",
  },
  {
    type: "numbered" as const,
    number: 4,
    text: "This Agreement does not apply to any information that was already known by Patent Agent at the time of Disclosure or was publicly available at the time of Disclosure. This Agreement will cease to apply if:",
    subItems: [
      "Disclosed information becomes publicly available through no fault of Patent Agent",
      "is publicly disclosed by Inventor",
      "is independently disclosed to Patent Agent by an unrelated third party, or",
      "three years from the date of entering into this Agreement.",
    ],
  },
  {
    type: "numbered" as const,
    number: 5,
    text: "Both Inventor and Patent Agent agree that this Agreement does not give either of them any rights to information or property owned by the other. Improvements or modifications to the Disclosure shall be protected under this Agreement when Disclosed as described under part 2.",
  },
  {
    type: "numbered" as const,
    number: 6,
    text: "This Nondisclosure Agreement may change in the future. In such event, the version of Agreement in place at the time of your submission and Disclosure shall remain in effect.",
  },
  {
    type: "numbered" as const,
    number: 7,
    text: "This Agreement is governed only by Rhode Island law. Any dispute under this Agreement that cannot be settled by the parties themselves or with the assistance of a mediator within one month of notice of the dispute (except for the issuance of an injunction) will be settled by arbitration on an accelerated basis by a single arbitrator in accordance with the rules of the American Arbitration Association, both mediation and arbitration to be held in Providence, Rhode Island. Each party will pay its own expenses of mediation and arbitration and equally share the mediator/arbitrator's fee and facility rental (if needed), unless the arbitrator chooses to require one party to pay all or a portion of the other party's expenses.",
  },
];
