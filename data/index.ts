const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const workExperience = [
  {
    id: 1,
    title: "Developer / Tech Lead",
    desc: "<ul><li><strong>Innovative Feature Development</strong>: Designed and implemented 60+ features using Java (Spring Boot/MVC) for Swiss Re, enhancing premium calculations, coverage management, and system reliability.</li>      <li><strong>Exemplary Code Quality</strong>: Achieved 80% code coverage with JUnit/Mockito in a TDD environment. Managed workflows with JIRA and improved development with CI/CD integration via BitBucket and Bamboo.</li>      <li><strong>Cloud Transition Expertise</strong>: Orchestrated the transition to Microsoft Azure and optimized databases, reducing downtime by 40% and boosting performance.</li>      <li><strong>Leadership in Action</strong>: Led a cross-functional team of 7, ensuring effective communication and timely feature delivery within 3 months.</li>      <li><strong>Award-Winning Performance</strong>: Earned 'Best Performer' accolades for two consecutive years, recognized for outstanding performance and leadership.</li>    </ul>",
    className: "md:col-span-2",
    thumbnail: `${basePath}/Infosys_logo.svg`,
    skills: [
      {
        "id": 1,
        "name": "Java",
        "icon": `${basePath}/java-icon.svg`
      },
      {
        "id": 2,
        "name": "Spring Boot",
        "icon": `${basePath}/springio-icon.svg`
      },
      {
        "id": 3,
        "name": "Oracle",
        "icon": `${basePath}/oracle.svg`
      },
      {
        "id": 4,
        "name": "SQL",
        "icon": `${basePath}/database-generic-svgrepo-com.svg`
      },
      {
        "id": 5,
        "name": "Azure",
        "icon": `${basePath}/azure-2.svg`
      }
    ]
  },
  {
    id: 2,
    title: "Research Intern",
    desc: "  <ul><li><strong>Test Case Migration</strong>: Migrated 80+ test cases to a proprietary Java-based framework, enhancing efficiency and reliability with design patterns, replacing traditional TTCN.</li>      <li><strong>Automation Efficiency</strong>: Automated test case execution, reducing manual execution time by 3 hours, and deployed tests seamlessly in Linux Container.</li>      <li><strong>Strategic Enhancements</strong>: Improved test case management, boosting efficiency and accuracy in testing processes.</li>    </ul>",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: `${basePath}/Ericsson_logo.svg`,
    skills: [
      {
        "id": 1,
        "name": "Java",
        "icon": `${basePath}/java-icon.svg`
      },
      {
        "id": 2,
        "name": "JUnit",
        "icon": `${basePath}/JUnit.svg`
      },
      {
        "id": 3,
        "name": "Python",
        "icon": `${basePath}/python.svg`
      },
      {
        "id": 4,
        "name": "Automation",
        "icon": `${basePath}/automation.svg`
      }
    ]
  },
];

export const projects = [
  {
    id: 1,
    title: "🤑 Tracker",
    des: "A Basic Next.js Based Expense Tracker (Budget) for overlooking where your money is coming/going 😈",
    image: `${basePath}/pj-1.png`,
    iconLists: [`${basePath}/next.svg`, `${basePath}/c.svg`, `${basePath}/ts.svg`, `${basePath}/neon.svg`, `${basePath}/postgresql.svg`],
    link: "https://github.com/alien-droid/expense-tracker-next",
  },
  {
    id: 2,
    title: "StreamLine 📓",
    des: "A dynamic React blogging platform for crafting and sharing content across diverse categories, with options to allow users to comment on different posts. 📝",
    image: `${basePath}/pj-2.png`,
    iconLists: [`${basePath}/re.svg`, `${basePath}/express.svg`, `${basePath}/node-js.svg`, `${basePath}/mongodb.svg`, ],
    link: "https://github.com/alien-droid/StreamLine---Blogging-Platform",
  },
  {
    id: 3,
    title: "PayLess 📫",
    des: "A Simple Next.js Application used for Tracking Prices of your favorite 'Amazon' Prices and helping you find the lowest prices so you have to 'pay less' 💹",
    image: `${basePath}/pj-3.png`,
    iconLists: [`${basePath}/next.svg`, `${basePath}/tail.svg`, `${basePath}/ts.svg`, `${basePath}/mongodb.svg`, `${basePath}/cheerio.svg`],
    link: "https://github.com/alien-droid/PayLess",
  },
  {
    id: 4,
    title: "Codita 🖥️",
    des: "GPT-Clone using Google Generative-AI (Gemini-Pro Model) 🤖",
    "image": `${basePath}/pj-4.png`,
    iconLists: [`${basePath}/logo-javascript.svg`, `${basePath}/tail.svg`, `${basePath}/node-js.svg`, `${basePath}/express.svg`, `${basePath}/vercel.svg`],
    link: "https://github.com/alien-droid/gpt-clone-codita",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: `${basePath}/git.svg`,
    link: "https://github.com/alien-droid"
  },
  {
    id: 3,
    img: `${basePath}/link.svg`,
    link: "https://www.linkedin.com/in/aditya-swe-sharma/"
  },
];