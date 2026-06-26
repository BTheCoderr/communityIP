export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  author?: string;
  /** Legacy WordPress path for redirects */
  legacyPath?: string;
}

export const newsPosts: NewsPost[] = [
  {
    slug: "seg-microgrant-2025",
    title: "Community IP awarded microgrant from Social Enterprise Greenhouse",
    date: "2025-12-10",
    legacyPath:
      "/2025/12/10/community-ip-awarded-microgrant-from-social-enterprise-greenhouse",
    excerpt:
      "Community IP received a microgrant from Social Enterprise Greenhouse for entrepreneurs with a social-impact focus.",
    body: [
      "This award is for entrepreneurs with a social-impact focus. SEG invests in entrepreneurs making transformational social impact. Like Community IP, they work toward a just, equitable and resilient economy achieved through social entrepreneurship.",
      "Each year, SEG supports about 300 social entrepreneurs. \"Social enterprise\" is a business model that puts social and environmental impact on equal footing with financial sustainability. These ventures can be mission-driven businesses, nonprofits with earned income, or worker-owned cooperatives, all aiming to create shared prosperity.",
    ],
  },
  {
    slug: "seg-accelerator-2025",
    title:
      "Community IP Accepted to Social Enterprise Greenhouse (SEG)'s 2025 Accelerator",
    date: "2025-03-03",
    legacyPath: "/2025/03/03/new-post",
    excerpt:
      "Community IP joined SEG's 2025 Spring Accelerator Program to grow impact for underserved inventors.",
    body: [
      "Community IP has just been accepted into the Social Enterprise Greenhouse (SEG) 2025 Spring Accelerator Program. This program works with social enterprises that understand the needs of their beneficiaries and have high potential for impact.",
      "With this course, Community IP will work with Brown University and receive guidance from experienced social entrepreneurs, business leaders and community mentors. We will also compete for sector grants, and have priority access to SEG's loan fund.",
      "The program will require 6–8 hours of work for 12 weeks starting this month. We are ready and excited to participate!",
    ],
  },
  {
    slug: "lost-einsteins",
    title: "Lost Einsteins: It's Not Enough to Be Smart",
    date: "2025-03-03",
    author: "Regina DeAngelo",
    legacyPath: "/2025/03/03/current-post",
    excerpt:
      "Access and exposure matter as much as talent — why Community IP exists to close the IP gap.",
    body: [
      "One of the most inspiring speeches I ever heard was delivered at a banquet for a nonprofit where I worked years ago. The keynote speaker was Chef Jeff Henderson, and he was telling us, from experience, why some young people reach their potential and others don't.",
      "One thing stood out: he said that if a young person is going to get anywhere, they're going to need three things: education, access, and exposure. That was about 12 years ago, and I haven't forgotten it because it hit home. I grew up in a low-income household, and despite good intentions, my siblings and I lacked two of the three things Chef Jeff pointed out: access and exposure.",
      "Working with inventors over the last fifteen years, I learned that they were of a type: white, male, middle- and upper-class. Few were women, and even fewer were people of color. While I applaud their successes, I wonder where the rest of the population is. I understood that what Chef Jeff said is true: while income and gender don't determine intelligence, without access, exposure and education, an inventor may not even know where to start.",
      "The USPTO recently pointed out that opportunities to participate in the U.S. innovation system have been historically unequal. Only 12.8% of all inventors named on U.S. patents are women. White Americans are three times more likely to invent than Black Americans, and children born to parents in the top 1% of income earners are 10 times more likely to become inventors than those from families with below-median income.",
      "A 2017 paper by Stanford University's Equality of Opportunity Project found that the top 5% highest-scoring low-income kids were less likely to eventually become inventors than below-average math students from affluent families. The study's authors called these kids \"Lost Einsteins.\" The data confirmed what Chef Jeff knew: that access and exposure to achievement has more influence on a kid's success than raw talent does.",
      "The USPTO's National Strategy for Inclusive Innovation began to address educational disparities, promote inclusiveness in organizations, and increase commercialization opportunities for innovations. Without access to business conduits, too many inventors let their innovations die because they don't know what to do next.",
      "One way to equalize opportunity is to volunteer with business incubators. We work with E for All, the Social Enterprise Greenhouse (SEG), and our local high school advising potential inventors. This is part of Community IP's work.",
    ],
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((p) => p.slug === slug);
}

export function formatNewsDate(date: string) {
  return new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
