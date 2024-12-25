import ClassicCvTemplate from "./CV/ClassicCvTemplate";
import MinimalistCVTemplate from "./CV/MinimalistCVTemplate";
import ClassicResumeTemplate from "./Resume/ClassicResumeTemplate";
import CreativeResumeTemplate from "./Resume/CreativeResumeTemplate";
import TimelineResumeTemplate from "./Resume/TimelineResumeTemplate";

export const resumeTemplates = [
  { id: 1, name: "Classic Resume", component: ClassicResumeTemplate },
  { id: 2, name: "Creative Resume", component: CreativeResumeTemplate },
  { id: 3, name: "Timeline Resume", component: TimelineResumeTemplate },
];

export const cvTemplates = [
  { id: 1, name: "Classic CV", component: ClassicCvTemplate },
  { id: 2, name: "Minimalist CV", component: MinimalistCVTemplate },
];
