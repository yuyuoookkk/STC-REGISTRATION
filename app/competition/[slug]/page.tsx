import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Clock,
  Trophy,
  Calendar,
  CheckCircle,
  Award,
  Target,
  BookOpen,
} from "lucide-react";
import { notFound } from "next/navigation";

const competitionData = {
  "web-design": {
    name: "Web Design",
    description:
      "Create stunning and functional websites using modern technologies. Showcase your skills in HTML, CSS, JavaScript, and popular frameworks.",
    fullDescription:
      "The Web Design competition challenges participants to create innovative, responsive, and user-friendly websites. You'll be judged on creativity, functionality, code quality, and user experience. This competition is perfect for developers who want to showcase their front-end skills and design sensibilities.",
    participants: "120+",
    duration: "3 days",
    prize: "$5,000",
    deadline: "March 15, 2024",
    grade: "SMA/SMK",
    icon: "💻",
    requirements: [
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with responsive design",
      "Knowledge of modern frameworks (React, Vue, Angular)",
      "Understanding of web accessibility standards",
      "Basic knowledge of version control (Git)",
    ],
    judging: [
      "Design creativity and visual appeal (25%)",
      "Code quality and structure (25%)",
      "Functionality and user experience (25%)",
      "Responsive design implementation (25%)",
    ],
    timeline: [
      {
        phase: "Registration",
        date: "March 1-10",
        description: "Register and submit your team information",
      },
      {
        phase: "Preparation",
        date: "March 11-14",
        description: "Prepare your development environment and tools",
      },
      {
        phase: "Competition",
        date: "March 15-17",
        description: "3 days of intensive development",
      },
      {
        phase: "Judging",
        date: "March 18-20",
        description: "Expert panel reviews all submissions",
      },
      {
        phase: "Results",
        date: "March 21",
        description: "Winners announced and prizes awarded",
      },
    ],
    prizes: [
      {
        place: "1st Place",
        amount: "$2,500",
        description: "Gold medal + Certificate",
      },
      {
        place: "2nd Place",
        amount: "$1,500",
        description: "Silver medal + Certificate",
      },
      {
        place: "3rd Place",
        amount: "$1,000",
        description: "Bronze medal + Certificate",
      },
    ],
  },
  "design-poster": {
    name: "Design Poster",
    description:
      "Design eye-catching promotional posters that communicate effectively. Use your creativity with tools like Photoshop, Illustrator, or Canva.",
    fullDescription:
      "The Design Poster competition focuses on creating compelling visual communications. Participants will design promotional posters for various themes, demonstrating their ability to combine typography, imagery, and color theory to create impactful designs.",
    participants: "85+",
    duration: "2 days",
    prize: "$3,000",
    deadline: "March 12, 2024",
    grade: "SMP",
    icon: "🎨",
    requirements: [
      "Proficiency in design software (Photoshop, Illustrator, Canva)",
      "Understanding of typography and color theory",
      "Knowledge of composition and layout principles",
      "Ability to work with high-resolution graphics",
      "Creative thinking and conceptual skills",
    ],
    judging: [
      "Visual impact and creativity (30%)",
      "Typography and layout (25%)",
      "Color usage and harmony (25%)",
      "Message clarity and effectiveness (20%)",
    ],
    timeline: [
      {
        phase: "Registration",
        date: "March 1-8",
        description: "Register and submit portfolio samples",
      },
      {
        phase: "Brief Release",
        date: "March 9",
        description: "Competition brief and themes announced",
      },
      {
        phase: "Competition",
        date: "March 12-13",
        description: "2 days of design creation",
      },
      {
        phase: "Judging",
        date: "March 14-15",
        description: "Design experts evaluate submissions",
      },
      {
        phase: "Results",
        date: "March 16",
        description: "Winners announced and exhibition opens",
      },
    ],
    prizes: [
      {
        place: "1st Place",
        amount: "$1,500",
        description: "Gold medal + Design software license",
      },
      {
        place: "2nd Place",
        amount: "$1,000",
        description: "Silver medal + Certificate",
      },
      {
        place: "3rd Place",
        amount: "$500",
        description: "Bronze medal + Certificate",
      },
    ],
  },
  "esport-ml": {
    name: "Esport ML",
    description:
      "Mobile Legends competitive gaming tournament. Form teams and compete in strategic MOBA gameplay.",
    fullDescription:
      "The Mobile Legends esports tournament brings together the best MOBA players in the region. Teams of 5 players will compete in intense strategic battles, showcasing their teamwork, individual skills, and game knowledge in this popular mobile game.",
    participants: "200+",
    duration: "1 day",
    prize: "$8,000",
    deadline: "March 10, 2024",
    grade: "SMP",
    icon: "🎮",
    requirements: [
      "Team of 5 players (+ 1 substitute allowed)",
      "All players must be rank Epic or above",
      "Stable internet connection for online matches",
      "Discord for team communication",
      "Updated Mobile Legends game version",
    ],
    judging: [
      "Tournament bracket elimination system",
      "Best of 3 matches in early rounds",
      "Best of 5 matches in finals",
      "Standard Mobile Legends tournament rules apply",
    ],
    timeline: [
      {
        phase: "Team Registration",
        date: "March 1-8",
        description: "Register your 5-player team",
      },
      {
        phase: "Seeding Matches",
        date: "March 9",
        description: "Determine tournament bracket positions",
      },
      {
        phase: "Tournament Day",
        date: "March 10",
        description: "Full day tournament with live streaming",
      },
      {
        phase: "Finals",
        date: "March 10 Evening",
        description: "Championship match with live audience",
      },
    ],
    prizes: [
      {
        place: "1st Place",
        amount: "$4,000",
        description: "Championship trophy + team medals",
      },
      {
        place: "2nd Place",
        amount: "$2,500",
        description: "Runner-up trophy + medals",
      },
      {
        place: "3rd Place",
        amount: "$1,500",
        description: "Third place trophy + medals",
      },
    ],
  },
  "esport-ff": {
    name: "Esport FF",
    description:
      "Free Fire competitive gaming tournament. Form teams and compete in strategic battle royale gameplay.",
    fullDescription:
      "The Free Fire esports tournament brings together the best battle royale players in the region. Teams of 4 players will compete in intense strategic battles, showcasing their teamwork, individual skills, and game knowledge in this popular mobile game.",
    participants: "",
    duration: "",
    prize: "",
    deadline: "",
    grade: "SMP",
    icon: "🎮",
    requirements: [
      "Team of 5 players (+ 1 substitute allowed)",
      "All players must be rank Epic or above",
      "Stable internet connection for online matches",
      "Discord for team communication",
      "Updated Mobile Legends game version",
    ],
    judging: [
      "Tournament bracket elimination system",
      "Best of 3 matches in early rounds",
      "Best of 5 matches in finals",
      "Standard Mobile Legends tournament rules apply",
    ],
    timeline: [
      {
        phase: "Team Registration",
        date: "March 1-8",
        description: "Register your 5-player team",
      },
      {
        phase: "Seeding Matches",
        date: "March 9",
        description: "Determine tournament bracket positions",
      },
      {
        phase: "Tournament Day",
        date: "March 10",
        description: "Full day tournament with live streaming",
      },
      {
        phase: "Finals",
        date: "March 10 Evening",
        description: "Championship match with live audience",
      },
    ],
    prizes: [
      {
        place: "1st Place",
        amount: "$4,000",
        description: "Championship trophy + team medals",
      },
      {
        place: "2nd Place",
        amount: "$2,500",
        description: "Runner-up trophy + medals",
      },
      {
        place: "3rd Place",
        amount: "$1,500",
        description: "Third place trophy + medals",
      },
    ],
  },
};

const getGradeColor = (Grade: string) => {
  switch (Grade) {
    case "SMP":
      return "text-orange-300 bg-orange-500/20";
    case "SMA/SMK":
      return "text-red-300 bg-red-500/20";
    default:
      return "text-gray-300 bg-gray-500/20";
  }
};

export default function CompetitionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const competition =
    competitionData[params.slug as keyof typeof competitionData];

  if (!competition) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/competitions"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Competitions
        </Link>

        {/* Header */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
              {competition.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-4xl font-bold text-white">
                  {competition.name}
                </h1>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${getGradeColor(
                    competition.grade
                  )}`}
                >
                  {competition.grade}
                </span>
              </div>
              <p className="text-xl text-white/70 mb-6">
                {competition.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                About This Competition
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {competition.fullDescription}
              </p>
            </div>

            {/* Requirements */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Requirements
              </h2>
              <ul className="space-y-3">
                {competition.requirements.map((req, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/70"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Judging Criteria */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Judging Criteria
              </h2>
              <ul className="space-y-3">
                {competition.judging.map((criteria, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/70"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration CTA */}
            <div className="glass-card rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Compete?
              </h3>
              <p className="text-white/70 mb-6">
                Join this exciting competition and showcase your skills!
              </p>
              <Link
                href={`/competition/${params.slug}/register`}
                className="glass-button w-full py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 block text-center"
              >
                Register Now
              </Link>
            </div>

            {/* Timeline */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Timeline</h3>
              <div className="space-y-4">
                {competition.timeline.map((phase, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-purple-400 pl-4"
                  >
                    <h4 className="font-semibold text-white">{phase.phase}</h4>
                    <p className="text-sm text-purple-300 mb-1">{phase.date}</p>
                    <p className="text-sm text-white/60">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
