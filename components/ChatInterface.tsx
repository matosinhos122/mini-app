"use client"

import { useState, useRef, useEffect } from "react"
import { Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi there! I'm your personal AI assistant, trained on your data from connected accounts. How can I help you today? 👋",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom]) // Added scrollToBottom to dependencies

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `I understand you're asking about "${userMessage}". As your personal AI assistant, I can help you with that based on your connected accounts and data.`,
        },
      ])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <Card className="mt-8 mb-4 p-4 text-center bg-white/50 backdrop-blur-sm">
        <h1 className="text-xl font-semibold mb-2">Your Personal AI Assistant</h1>
        <p className="text-sm text-gray-600">
          Trained on your connected accounts and personal data. Note: This AI may occasionally make mistakes. All chats
          are recorded for improvement purposes.
        </p>
      </Card>

      <div className="space-y-4 mb-4">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
          >
            {message.role === "assistant" && (
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                message.role === "assistant" ? "bg-white text-gray-800" : "bg-blue-600 text-white"
              }`}
            >
              {message.content}
            </div>
            {message.role === "user" && (
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-gray-500">
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="container mx-auto max-w-3xl flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your message..."
              className="w-full p-3 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-300"
            />
            <Button type="button" variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
              <Mic className="w-5 h-5 text-gray-500" />
              <span className="sr-only">Voice input</span>
            </Button>
          </div>
          <Button type="submit" disabled={!input.trim() || isLoading}>
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

