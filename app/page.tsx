import Link from "next/link";
import { ArrowRight, Trophy, Calendar, Award } from "lucide-react";

export default function Home() {
  const competitions = [
    {
      name: "Desain Web",
      slug: "web-design",
      description: "Buat website yang menakjubkan dan fungsional",
      participants: "",
      icon: "💻",
    },
    {
      name: "Desain Poster",
      slug: "design-poster",
      description: "Desain poster promosi yang menarik perhatian",
      participants: "",
      icon: "🎨",
    },
    {
      name: "Desain Maskot",
      slug: "design-maskot",
      description: "Buat maskot merek yang berkesan",
      participants: "",
      icon: "🦸",
    },
    {
      name: "Seni Digital",
      slug: "digital-art",
      description: "Ekspresikan kreativitas melalui media digital",
      participants: "",
      icon: "🎭",
    },
    {
      name: "Esport ML",
      slug: "esport-ml",
      description: "Kompetisi gaming Mobile Legends",
      participants: "",
      icon: "🎮",
    },
    {
      name: "Esport FF",
      slug: "esport-ff",
      description: "Kompetisi gaming Free Fire",
      participants: "",
      icon: "🎮",
    },
    {
      name: "Rumus Excel",
      slug: "rumus-excel",
      description: "Kuasai rumus dan fungsi Excel",
      participants: "",
      icon: "📊",
    },
    {
      name: "Speed Typing",
      slug: "speed-typing",
      description: "Uji kecepatan dan akurasi mengetik Anda",
      participants: "",
      icon: "⌨️",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 text-balance">
            Stibajra Technology Competition
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 text-pretty">
            Opening the Portal Of Technology To Iluminate Creativity And
            Imagination
          </p>
          <p className="text-base sm:text-lg text-white/70 mb-12 max-w-2xl mx-auto text-pretty">
            Dengan menyambut hadirnya STC atau “Stibajra Technology Competition” pada tahun 2025. SMK TI Bali Global Jimbaran menyelenggarakan ajang kompetisi untuk siswa siswi SMP/MTs dan SMA/SMK/MAN sederajat se-Bali yang diadakan setiap setahun sekali.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/competitions"
              className="glass-button px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
            >
              Lihat Kompetisi
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/register"
              className="bg-white/20 backdrop-blur-10 border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold hover:bg-white/30 transition-all duration-300"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Competition Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bidang Lomba
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Pilih dari 8 kategori kompetisi yang menarik dan tunjukkan bakat
              Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {competitions.map((competition, index) => (
              <Link
                key={competition.slug}
                href={`/competition/${competition.slug}`}
                className="glass-card rounded-2xl p-4 md:p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg md:text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {competition.name}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm mb-3 md:mb-4">
                    {competition.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-white/60 text-xs md:text-sm"></div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/competitions"
              className="glass-button px-6 md:px-8 py-3 md:py-4 rounded-xl text-white font-semibold inline-flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              Lihat Semua Kompetisi
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
