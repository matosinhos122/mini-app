"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Twitter, Linkedin, Facebook, Mail, MessageCircle } from "lucide-react"

export default function OnboardingForm({ onSubmit }) {
  const [connectedAccounts, setConnectedAccounts] = useState({
    twitter: false,
    linkedin: false,
    facebook: false,
    gmail: false,
    messages: false,
  })

  const handleConnect = (account) => {
    // Here you would typically initiate the OAuth flow for the selected account
    // For this example, we'll just toggle the connection state
    setConnectedAccounts((prev) => ({ ...prev, [account]: !prev[account] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(connectedAccounts)
  }

  const accountButtons = [
    { name: "twitter", icon: Twitter },
    { name: "linkedin", icon: Linkedin },
    { name: "facebook", icon: Facebook },
    { name: "gmail", icon: Mail },
    { name: "messages", icon: MessageCircle },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect Your Accounts</CardTitle>
        <CardDescription>Click on the icons to connect your accounts and personalize your AI Agent.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-4 mb-6">
          {accountButtons.map(({ name, icon: Icon }) => (
            <Button
              key={name}
              onClick={() => handleConnect(name)}
              variant={connectedAccounts[name] ? "default" : "outline"}
              size="icon"
              className="w-12 h-12"
            >
              <Icon className="h-6 w-6" />
              <span className="sr-only">Connect {name}</span>
            </Button>
          ))}
        </div>
        <div className="text-center text-sm text-gray-500">
          {Object.entries(connectedAccounts).filter(([_, v]) => v).length} of {accountButtons.length} accounts connected
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full">
          Create My AI Agent
        </Button>
      </CardFooter>
    </Card>
  )
}

