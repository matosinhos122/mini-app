export default function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold">Creating your AI Agent...</p>
    </div>
  )
}

