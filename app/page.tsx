"use client"

import { useState } from "react"
import OnboardingForm from "@/components/OnboardingForm"
import LoadingAnimation from "@/components/LoadingAnimation"
import CompletionScreen from "@/components/CompletionScreen"

export default function Home() {
  const [step, setStep] = useState("form")
  const [formData, setFormData] = useState({})

  const handleFormSubmit = (data) => {
    setFormData(data)
    setStep("loading")
    // Simulate LLM processing
    setTimeout(() => {
      setStep("complete")
    }, 5000)
  }

  return (
    <main className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Agent Onboarding</h1>
      {step === "form" && <OnboardingForm onSubmit={handleFormSubmit} />}
      {step === "loading" && <LoadingAnimation />}
      {step === "complete" && <CompletionScreen />}
    </main>
  )
}

