import type { Metadata } from "next"
import ChatInterface from "@/components/ChatInterface"

export const metadata: Metadata = {
  title: "Your Personal AI Agent",
  description: "Chat with your personalized AI agent",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 border-b bg-white z-10">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="font-semibold">Your AI Agent</div>
          <a href="/login" className="text-blue-600 hover:text-blue-700 text-sm">
            Login / Signup
          </a>
        </div>
      </header>
      <main className="pt-14 pb-20 min-h-screen">
        <ChatInterface />
      </main>
    </div>
  )
}

