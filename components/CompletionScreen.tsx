import { Button } from "@/components/ui/button"

export default function CompletionScreen() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Ok, it's complete!</h2>
      <p className="mb-6">Your AI Agent is ready to assist you.</p>
      <div className="space-x-4">
        <Button onClick={() => alert("Trying out the AI Agent...")}>Try it out</Button>
        <Button variant="outline" onClick={() => alert("Exiting...")}>
          Exit
        </Button>
      </div>
    </div>
  )
}

