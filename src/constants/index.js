import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  pwc,
  gramiksha,
  philips,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aws,
  python,
  matlab,
  sql,
  tableau,
  iotiot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: mle,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Cloud Associate",
    icon: web,
  },
  {
    title: "BlockChain and Quantum Computing Ethusiast",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Matlab",
    icon: matlab,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Aws",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "tableau",
    icon: tableau,
  },
];

const experiences = [
  {
    title: "Machine Learning Engineer",
    company_name: "SeemaS",
    icon: seemas,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      "Developed and deployed RAG workflows with FinGPT using Python and LangChain to automate company valuation reports, fine-tune transformer models, and improve reporting accuracy by 18%, showcasing expertise in quantitative research, analytics, and business-focused communication.",
      "Built a microservices-based comparable company analysis platform with Django Ninja, Flask APIs, and Docker, leveraging Perplexity API for real-time quantitative filtering; reduced analyst effort by 60% and scaled throughput to 4K+ companies/month with sub-2s latency, aligning with business strategy and performance optimization.",
      "Designed and deployed a YouTube summarization system integrating Whisper Large V3 Turbo, Llama 3.1, LangChain, and OpenSearch in AWS EKS (Kubernetes), achieving 92% summary accuracy and reducing transcript review time by 50%, demonstrating ability to rapidly prototype and deploy scalable cloud-based solutions.",
      "Implemented voice cloning solutions with ElevenLabs API, asynchronous REST APIs, and streaming microservices, achieving 90% user satisfaction in voice realism and reducing text-to-speech latency by 40%; highlights critical problem-solving and stakeholder-focused delivery.",
      "Architected an automated financial data pipeline with Apache Airflow, Pandas, NumPy, and SQL for SEC filings and Morningstar datasets; improved data reliability by 30%, halved reporting cycles, and ensured scalable parallel processing for large datasets, reflecting strong SQL optimization and data management skills.",
      "Prototyped interactive analytics dashboards with Tableau and Streamlit to visualize financial KPIs, model outputs, and executive-ready insights, enabling faster decision-making and improving stakeholder communication.",
      "Deployed scalable user management and access control with Auth0, Fine-Grained Authorization (FGA), and RBAC to enable hierarchical multi-tenant security models; reduced onboarding time by 70% and decreased support tickets by 35%, demonstrating collaboration across technical and business stakeholders.",
      "Optimized ingestion and processing of NoSQL datasets (MongoDB, OpenSearch) and implemented Spark-based workflows for distributed financial data analysis, improving scalability and compliance reporting efficiency; integrated with Snowflake for query optimization and cloud-based analytics.",
    ],
  },
  {
    title: "Data Scientist",
    company_name: "Trulogik",
    icon: trulogik,
    iconBg: "#383E56",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Built and deployed a scalable record matching and semantic search system using Solr and Pinecone, leveraging BERT embeddings and NLP techniques to match claims and EHR data with 78%+ accuracy, reducing manual review workload by 60% and improving search relevance.",
      "Developed and productionized supervised entity matching models using DeepMatcher and Siamese networks with clustering algorithms to deduplicate claims records, improving data integrity by 30% and reducing processing time by 25%, while integrating with APIs for seamless GenAI workflows.",
      "Implemented a K-nearest neighbors (KNN) recommendation engine integrated with backend APIs, enhancing personalized content and user engagement by 25%, while optimizing semantic retrieval pipelines for large-scale datasets.",
      "Orchestrated end-to-end ML pipelines with ZenML, MLflow, and Kubernetes, managing model metadata in PostgreSQL and deploying reproducible, scalable AI models to production with Terraform, reducing deployment time by 50%.",
    ],
  },
  {
    title: "Graduate Research Assistant",
    company_name: "Ohio State University",
    icon: osu,
    iconBg: "#383E56",
    date: "Jan 2023 - Jun 2024",
    points: [
      "Spearheaded the development of a web-based platform for seamless audio data collection, leveraging React, Django, and Firebase to deliver a user-friendly interface and enhance accessibility for users.",
      "Led the development of speech segmentation models utilizing TensorFlow, PyTorch, and Transformer architectures, achieving over 75% accuracy in identifying speech boundaries.",
      "Utilized Docker for web application development, streamlining development processes and ensuring consistent, efficient, and scalable project deployment.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "PriceWaterhouseCoopers",
    icon: pwc,
    iconBg: "#383E56",
    date: "Jan 2021 - Jul 2022",
    points: [
      "Improved ETL data processing methodologies—including profiling, cleansing, and validation—using AWS Glue, RedShift, PySpark, and Java-based Spark jobs; leveraged processed data to build predictive maintenance models, achieving early detection of potential equipment failures and resolving 45% of identified anomalies.",
      "Developed SQL queries and scripts for data analysis, reporting, and data visualization on MS SQL Server, streamlining decision-making processes for stakeholders and achieving a 5% decrease in average query execution time.",
      "Developed an automated report creation process using Power Automate, Power BI, and Excel, reducing manual effort by 15%.",
      "Adhered to an AGILE environment and implemented CI/CD workflows with Jira and Bitbucket, streamlining integration, testing, and deployment for accelerated project delivery and improved collaboration.",
    ],
  },
  {
    title: "Intern",
    company_name: "Philips",
    icon: philips,
    iconBg: "#383E56",
    date: "May 2020 - Dec 2020",
    points: [
      "Developed algorithm to segment plasma cancer cells,namely myeloma, by implementing various Unet models and transfer learning techniques.The model was trained on small dataset and for different scenarios of plasma cells. The model developed was 5% efficient and produced an accuracy of 87%.",
      "Worked on Monai Framework to develop a Unet model to segment a liver from CT or MRI scans. Performed visualization and annotation using tools like 3D slicer and ITK snap.",
    ],
  },
  {
    title: "React Developer | Team Lead",
    company_name: "Gramiksha",
    icon: gramiksha,
    iconBg: "#E6DEDD",
    date: "Sep 2019 - Jan 2020",
    points: [
      "Led multi-disciplinary 5 person team to design, develop, and launch online website; prioritized and resolved 45+ new features and bug fixes.",
      "Improved outreach of the company which accelerated revenue growth by 25% and redesigned admin processes.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "IoTIoT",
    icon: iotiot,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Jun 2019",
    points: [
      "Developed a responsive and user-friendly website using React JS and Node JS and hosted Machine learning models which was deployed on an edge computing device, reducing latency and increased performance, resulting in 20% decrease in response time.",
      "Collaborated with cross-functional teams to ensure the smooth functioning of the website and resolve any issues that arose, resulting in zero downtime during my tenure.",
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
