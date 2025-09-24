"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, User, Trophy, Calendar, MapPin } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  category: string
  experience: string
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  category: "",
  experience: "",
}

export function CompetitionRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const steps = [
    { number: 1, title: "Informasi Pribadi", icon: User },
    { number: 2, title: "Detail Kompetisi", icon: Trophy },
    { number: 3, title: "Tinjau & Kirim", icon: CheckCircle },
  ]

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <Card className="text-center glass-card border-white/30">
          <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-3 sm:mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Pendaftaran Berhasil!</h2>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
              Terima kasih telah mendaftar untuk STC. Anda akan menerima email konfirmasi segera dengan detail lebih
              lanjut.
            </p>
            <Badge variant="secondary" className="text-xs sm:text-sm glass bg-white/20 text-white border-white/30">
              ID Pendaftaran: #STC{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </Badge>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-balance text-white">Pendaftaran STC</h1>
        </div>
        <p className="text-white/80 text-sm sm:text-base md:text-lg px-2">
          Bergabunglah dengan Saudi Technology Championship. Daftar sekarang untuk mengamankan tempat Anda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm text-white/70">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>15-17 Maret 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Riyadh Tech Hub</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-6 sm:mb-8 relative px-2">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = currentStep === step.number
          const isCompleted = currentStep > step.number

          return (
            <div key={step.number} className="flex flex-col items-center flex-1 relative">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 transition-all duration-300 ${
                  isCompleted
                    ? "glass-button bg-white/30 text-white border-white/40"
                    : isActive
                      ? "glass-button bg-white/25 text-white border-white/40"
                      : "glass bg-white/10 text-white/60 border-white/20"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                ) : (
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                )}
              </div>
              <span
                className={`text-xs sm:text-sm font-medium text-center px-1 leading-tight ${isActive ? "text-white" : "text-white/70"}`}
              >
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-4 sm:top-5 md:top-6 left-1/2 w-full h-0.5 -z-10 ${isCompleted ? "bg-white/40" : "bg-white/20"}`}
                  style={{ transform: "translateX(50%)" }}
                />
              )}
            </div>
          )
        })}
      </div>

      <Card className="glass-card border-white/30">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-white text-base sm:text-lg md:text-xl">
            <span className="bg-white/20 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border border-white/30">
              {currentStep}
            </span>
            {steps[currentStep - 1].title}
          </CardTitle>
          <CardDescription className="text-white/80 text-xs sm:text-sm md:text-base">
            {currentStep === 1 && "Silakan berikan informasi pribadi dasar Anda"}
            {currentStep === 2 && "Pilih kategori kompetisi dan tingkat pengalaman Anda"}
            {currentStep === 3 && "Tinjau informasi Anda sebelum mengirim"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white text-sm">
                  Nama Depan *
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Masukkan nama depan Anda"
                  className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white text-sm">
                  Nama Belakang *
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Masukkan nama belakang Anda"
                  className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm">
                  Alamat Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Masukkan alamat email Anda"
                  className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-sm">
                  Nomor Telepon *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Masukkan nomor telepon Anda"
                  className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-white text-sm">
                  Tanggal Lahir *
                </Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className="glass border-white/30 text-white text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-white text-sm">
                  Jenis Kelamin *
                </Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger className="glass border-white/30 text-white text-sm sm:text-base">
                    <SelectValue placeholder="Pilih jenis kelamin" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-white/30">
                    <SelectItem value="male">Laki-laki</SelectItem>
                    <SelectItem value="female">Perempuan</SelectItem>
                    <SelectItem value="other">Lainnya</SelectItem>
                    <SelectItem value="prefer-not-to-say">Lebih baik tidak disebutkan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 2: Competition Details */}
          {currentStep === 2 && (
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category" className="text-white text-sm">
                  Kategori Kompetisi *
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger className="glass border-white/30 text-white text-sm sm:text-base">
                    <SelectValue placeholder="Pilih kategori Anda" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-white/30">
                    <SelectItem value="web-design">Desain Web</SelectItem>
                    <SelectItem value="design-poster">Desain Poster</SelectItem>
                    <SelectItem value="design-maskot">Desain Maskot</SelectItem>
                    <SelectItem value="digital-art">Seni Digital</SelectItem>
                    <SelectItem value="esport-ml">Esport Mobile Legends</SelectItem>
                    <SelectItem value="esport-ff">Esport Free Fire</SelectItem>
                    <SelectItem value="rumus-excel">Rumus Excel</SelectItem>
                    <SelectItem value="speed-typing">Speed Typing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience" className="text-white text-sm">
                  Tingkat Pengalaman *
                </Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger className="glass border-white/30 text-white text-sm sm:text-base">
                    <SelectValue placeholder="Pilih tingkat pengalaman Anda" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-white/30">
                    <SelectItem value="beginner">Pemula (0-1 tahun)</SelectItem>
                    <SelectItem value="intermediate">Menengah (2-5 tahun)</SelectItem>
                    <SelectItem value="advanced">Lanjutan (5+ tahun)</SelectItem>
                    <SelectItem value="professional">Profesional/Ahli</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {currentStep === 3 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h3 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Informasi Pribadi</h3>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <p className="text-white">
                      <span className="text-white/70">Nama:</span> {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-white">
                      <span className="text-white/70">Email:</span> {formData.email}
                    </p>
                    <p className="text-white">
                      <span className="text-white/70">Telepon:</span> {formData.phone}
                    </p>
                    <p className="text-white">
                      <span className="text-white/70">Tanggal Lahir:</span> {formData.dateOfBirth}
                    </p>
                    <p className="text-white">
                      <span className="text-white/70">Jenis Kelamin:</span> {formData.gender}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Detail Kompetisi</h3>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <p className="text-white">
                      <span className="text-white/70">Kategori:</span> {formData.category}
                    </p>
                    <p className="text-white">
                      <span className="text-white/70">Pengalaman:</span> {formData.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/20">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="glass-button border-white/30 text-white hover:text-gray-900 bg-transparent order-2 sm:order-1 text-sm sm:text-base py-2 sm:py-3"
            >
              Sebelumnya
            </Button>

            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                className="glass-button bg-white/20 hover:bg-white/30 text-white border-white/30 order-1 sm:order-2 text-sm sm:text-base py-2 sm:py-3"
              >
                Langkah Selanjutnya
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="glass-button bg-white/20 hover:bg-white/30 text-white border-white/30 order-1 sm:order-2 text-sm sm:text-base py-2 sm:py-3"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
