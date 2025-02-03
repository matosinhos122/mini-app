"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function OnboardingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    twitter: "",
    linkedin: "",
    facebook: "",
    gmail: "",
    messageApiKey: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect Your Accounts</CardTitle>
        <CardDescription>
          Provide your social media, communication accounts, and message API key to personalize your AI Agent.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="twitter">Twitter Profile</Label>
            <Input
              id="twitter"
              name="twitter"
              placeholder="@username"
              value={formData.twitter}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile</Label>
            <Input
              id="linkedin"
              name="linkedin"
              placeholder="linkedin.com/in/username"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="facebook">Facebook Profile</Label>
            <Input
              id="facebook"
              name="facebook"
              placeholder="facebook.com/username"
              value={formData.facebook}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gmail">Gmail Address</Label>
            <Input
              id="gmail"
              name="gmail"
              type="email"
              placeholder="you@gmail.com"
              value={formData.gmail}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="messageApiKey">Message API Key</Label>
            <Textarea
              id="messageApiKey"
              name="messageApiKey"
              placeholder="Enter your API key or authorization token for accessing messages"
              value={formData.messageApiKey}
              onChange={handleChange}
            />
            <p className="text-sm text-gray-500">
              This key should provide authorized access to your messaging data. Please ensure you have the necessary
              permissions.
            </p>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" onClick={handleSubmit}>
          Create My AI Agent
        </Button>
      </CardFooter>
    </Card>
  )
}

