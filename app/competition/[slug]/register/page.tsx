"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, User, Trophy, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

const competitionNames = {
  "web-design": "Web Design",
  "design-poster": "Design Poster",
  "design-maskot": "Design Maskot",
  "digital-art": "Digital Art",
  "esport-ml": "Esport ML",
  "esport-ff": "Esport FF",
  "rumus-excel": "Rumus Excel",
  "speed-typing": "Speed Typing",
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  experience: string
  emergencyContact: string
  emergencyPhone: string
  medicalConditions: string
  tshirtSize: string
  teamName?: string
  teamMembers?: string
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  experience: "",
  emergencyContact: "",
  emergencyPhone: "",
  medicalConditions: "",
  tshirtSize: "",
  teamName: "",
  teamMembers: "",
}

export default function CompetitionRegisterPage({ params }: { params: { slug: string } }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const competitionName = competitionNames[params.slug as keyof typeof competitionNames] || "Competition"
  const isTeamCompetition = params.slug === "esport-ml" || params.slug === "esport-ff"

  const steps = [
    { number: 1, title: "Personal Information", icon: User },
    { number: 2, title: "Competition Details", icon: Trophy },
    { number: 3, title: "Emergency & Medical", icon: Calendar },
    { number: 4, title: "Review & Submit", icon: CheckCircle },
  ]

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
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
      <main className="min-h-screen py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href={`/competition/${params.slug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {competitionName}
          </Link>

          <Card className="text-center glass-card border-white/30">
            <CardContent className="pt-8 pb-8">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-white">Registration Successful!</h2>
              <p className="text-white/80 mb-6">
                Thank you for registering for {competitionName}. You will receive a confirmation email shortly with
                further details.
              </p>
              <Badge variant="secondary" className="text-sm glass bg-white/20 text-white border-white/30">
                Registration ID: #{params.slug.toUpperCase()}
                {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </Badge>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href={`/competition/${params.slug}`}
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {competitionName}
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-bold text-balance text-white">Register for {competitionName}</h1>
          </div>
          <p className="text-white/80 text-lg">
            Complete your registration to participate in this exciting competition.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep === step.number
            const isCompleted = currentStep > step.number

            return (
              <div key={step.number} className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    isCompleted
                      ? "glass-button bg-white/30 text-white border-white/40"
                      : isActive
                        ? "glass-button bg-white/25 text-white border-white/40"
                        : "glass bg-white/10 text-white/60 border-white/20"
                  }`}
                >
                  {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                </div>
                <span className={`text-sm font-medium text-center ${isActive ? "text-white" : "text-white/70"}`}>
                  {step.title}
                </span>
              </div>
            )
          })}
        </div>

        {/* Form Content */}
        <Card className="glass-card border-white/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <span className="bg-white/20 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border border-white/30">
                {currentStep}
              </span>
              {steps[currentStep - 1].title}
            </CardTitle>
            <CardDescription className="text-white/80">
              {currentStep === 1 && "Please provide your basic personal information"}
              {currentStep === 2 && `Specific details for ${competitionName} registration`}
              {currentStep === 3 && "Emergency contact and medical information"}
              {currentStep === 4 && "Review your information before submitting"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter your first name"
                    className="glass border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter your last name"
                    className="glass border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    className="glass border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    className="glass border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-white">
                    Date of Birth *
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    className="glass border-white/30 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-white">
                    Gender *
                  </Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger className="glass border-white/30 text-white">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-white/30">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 2: Competition Details */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-white">
                    Experience Level *
                  </Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className="glass border-white/30 text-white">
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-white/30">
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="professional">Professional/Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Team fields for esports competitions */}
                {isTeamCompetition && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="teamName" className="text-white">
                        Team Name *
                      </Label>
                      <Input
                        id="teamName"
                        value={formData.teamName}
                        onChange={(e) => handleInputChange("teamName", e.target.value)}
                        placeholder="Enter your team name"
                        className="glass border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teamMembers" className="text-white">
                        Team Members (Names and Contact Info) *
                      </Label>
                      <Textarea
                        id="teamMembers"
                        value={formData.teamMembers}
                        onChange={(e) => handleInputChange("teamMembers", e.target.value)}
                        placeholder="List all team members with their names and contact information"
                        rows={4}
                        className="glass border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="tshirtSize" className="text-white">
                    T-Shirt Size *
                  </Label>
                  <Select value={formData.tshirtSize} onValueChange={(value) => handleInputChange("tshirtSize", value)}>
                    <SelectTrigger className="glass border-white/30 text-white">
                      <SelectValue placeholder="Select t-shirt size" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-white/30">
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                      <SelectItem value="xxl">XXL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Emergency & Medical */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact" className="text-white">
                      Emergency Contact Name *
                    </Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      placeholder="Full name of emergency contact"
                      className="glass border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone" className="text-white">
                      Emergency Contact Phone *
                    </Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                      placeholder="Emergency contact phone number"
                      className="glass border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicalConditions" className="text-white">
                    Medical Conditions or Allergies
                  </Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                    placeholder="Please list any medical conditions, allergies, or medications that medical staff should be aware of. Leave blank if none."
                    rows={4}
                    className="glass border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-white">Personal Information</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-white">
                        <span className="text-white/70">Name:</span> {formData.firstName} {formData.lastName}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Email:</span> {formData.email}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Phone:</span> {formData.phone}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Date of Birth:</span> {formData.dateOfBirth}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Gender:</span> {formData.gender}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-white">Competition Details</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-white">
                        <span className="text-white/70">Competition:</span> {competitionName}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Experience:</span> {formData.experience}
                      </p>
                      {isTeamCompetition && (
                        <>
                          <p className="text-white">
                            <span className="text-white/70">Team Name:</span> {formData.teamName}
                          </p>
                          <p className="text-white">
                            <span className="text-white/70">Team Members:</span> {formData.teamMembers}
                          </p>
                        </>
                      )}
                      <p className="text-white">
                        <span className="text-white/70">T-Shirt Size:</span> {formData.tshirtSize}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-white">Emergency Contact</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-white">
                        <span className="text-white/70">Contact:</span> {formData.emergencyContact}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Phone:</span> {formData.emergencyPhone}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-white">Medical Information</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-white">
                        <span className="text-white/70">Conditions:</span>{" "}
                        {formData.medicalConditions || "None specified"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-white/20">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="glass-button border-white/30 text-white hover:text-gray-900 bg-transparent"
              >
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  className="glass-button bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="glass-button bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
