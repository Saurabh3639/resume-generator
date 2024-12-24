## Getting Started

```bash
cd resume-generator
npx create-next-app@latest .
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Dependencies

```bash
npm install react-icons
npm install jspdf
npm install @google/generative-ai
```

## SQL tables

```bash
CREATE TABLE `resume_info` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  photoUrl varchar(100) DEFAULT NULL,
  fullName varchar(100) DEFAULT NULL,
  contact varchar(20) DEFAULT NULL,
  email varchar(50) DEFAULT NULL,
  city varchar(50) DEFAULT NULL,
  country varchar(50) DEFAULT NULL,
  pincode varchar(50) DEFAULT NULL,
  languagesKnown varchar(100) DEFAULT NULL,
  applicationDate date DEFAULT NULL,
  linkedInUrl varchar(100) DEFAULT NULL,
  behanceUrl varchar(100) DEFAULT NULL,
  dribbbleUrl varchar(100) DEFAULT NULL,
  githubUrl varchar(100) DEFAULT NULL,
  personalWebsiteUrl varchar(100) DEFAULT NULL,
  educations JSON DEFAULT NULL,
  experiences JSON DEFAULT NULL,
  projects JSON DEFAULT NULL,
  skills JSON DEFAULT NULL,
  certifications JSON DEFAULT NULL,
  activities JSON DEFAULT NULL,
  summary varchar(500) DEFAULT NULL,
  `templateId` int DEFAULT NULL,
  `studentId` int DEFAULT NULL,
  FOREIGN KEY (`studentId`) REFERENCES `students`(`id`),
  `createdAt` datetime,
  `updatedAt` datetime
);

CREATE TABLE `cv_info` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  photoUrl varchar(100) DEFAULT NULL,
  fullName varchar(100) DEFAULT NULL,
  contact varchar(20) DEFAULT NULL,
  email varchar(50) DEFAULT NULL,
  city varchar(50) DEFAULT NULL,
  country varchar(50) DEFAULT NULL,
  pincode varchar(50) DEFAULT NULL,
  languagesKnown varchar(100) DEFAULT NULL,
  applicationDate date DEFAULT NULL,
  jobTitle varchar(100) DEFAULT NULL,
  currentExp varchar(50) DEFAULT NULL,
  companyName varchar(100) DEFAULT NULL,
  companyLocation varchar(100) DEFAULT NULL,
  jobDescription varchar(500) DEFAULT NULL,
  coverLetterSample varchar(500) DEFAULT NULL,
  `templateId` int DEFAULT NULL,
  `studentId` int DEFAULT NULL,
  FOREIGN KEY (`studentId`) REFERENCES `students`(`id`),
  `createdAt` datetime,
  `updatedAt` datetime
);
```
