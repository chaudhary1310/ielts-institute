import { BookOpen, Mic, FileText, LineChart } from "lucide-react";

export const howItWorks = [
  {
    title: "Step 1: Enroll & Get Started",
    description:
      "Register for our IELTS program and get access to study materials and resources.",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
  {
    title: "Step 2: Practice Speaking",
    description:
      "Enhance fluency and pronunciation through daily speaking practice with AI & trainers.",
    icon: <Mic className="w-8 h-8 text-primary" />,
  },
  {
    title: "Step 3: Mock Tests & Feedback",
    description:
      "Take full-length IELTS mock tests and receive instant feedback on each section.",
    icon: <FileText className="w-8 h-8 text-primary" />,
  },
  {
    title: "Step 4: Track Your Band Score",
    description:
      "Analyze your performance with progress reports and AI-predicted band scores.",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];
