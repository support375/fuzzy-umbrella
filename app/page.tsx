import PortfolioDashboard from '@/components/PortfolioDashboard'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            ToInvested
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your Investment Portfolio Dashboard
          </p>
        </header>
        
        <PortfolioDashboard />
      </div>
    </main>
  )
}
