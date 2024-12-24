import ClassicResumeTemplate from "./Template/ClassicResumeTemplate";
import CreativeResumeTemplate from "./Template/CreativeResumeTemplate";
import TimelineResumeTemplate from "./Template/TimelineResumeTemplate";

export const resumeTemplates = [
  { id: 1, name: "Classic Resume", component: ClassicResumeTemplate },
  { id: 2, name: "Creative Resume", component: CreativeResumeTemplate },
  { id: 3, name: "Timeline Resume", component: TimelineResumeTemplate },
];
