'use client'

import { useState } from 'react'

interface Investment {
  id: string
  name: string
  symbol: string
  shares: number
  purchasePrice: number
  currentPrice: number
}

export default function PortfolioDashboard() {
  const [investments, setInvestments] = useState<Investment[]>([
    {
      id: '1',
      name: 'Apple Inc.',
      symbol: 'AAPL',
      shares: 10,
      purchasePrice: 150.00,
      currentPrice: 175.50,
    },
    {
      id: '2',
      name: 'Microsoft Corporation',
      symbol: 'MSFT',
      shares: 5,
      purchasePrice: 300.00,
      currentPrice: 325.75,
    },
    {
      id: '3',
      name: 'Amazon.com Inc.',
      symbol: 'AMZN',
      shares: 8,
      purchasePrice: 140.00,
      currentPrice: 155.25,
    },
  ])

  const calculateValue = (investment: Investment) => {
    return investment.shares * investment.currentPrice
  }

  const calculateGainLoss = (investment: Investment) => {
    const currentValue = calculateValue(investment)
    const purchaseValue = investment.shares * investment.purchasePrice
    return currentValue - purchaseValue
  }

  const calculateGainLossPercentage = (investment: Investment) => {
    const gainLoss = calculateGainLoss(investment)
    const purchaseValue = investment.shares * investment.purchasePrice
    return (gainLoss / purchaseValue) * 100
  }

  const totalValue = investments.reduce((acc, inv) => acc + calculateValue(inv), 0)
  const totalGainLoss = investments.reduce((acc, inv) => acc + calculateGainLoss(inv), 0)
  const totalInvested = investments.reduce(
    (acc, inv) => acc + inv.shares * inv.purchasePrice,
    0
  )

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Total Value
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            ${totalValue.toFixed(2)}
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Total Invested
          </h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            ${totalInvested.toFixed(2)}
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Total Gain/Loss
          </h3>
          <p
            className={`text-3xl font-bold ${
              totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {totalGainLoss >= 0 ? '+' : ''}${totalGainLoss.toFixed(2)}
          </p>
          <p
            className={`text-sm ${
              totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {totalGainLoss >= 0 ? '+' : ''}
            {((totalGainLoss / totalInvested) * 100).toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Your Holdings
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Symbol
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Shares
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Purchase Price
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Current Price
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Market Value
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Gain/Loss
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {investments.map((investment) => {
                const gainLoss = calculateGainLoss(investment)
                const gainLossPercentage = calculateGainLossPercentage(investment)
                
                return (
                  <tr key={investment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {investment.symbol}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {investment.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {investment.shares}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900 dark:text-white">
                        ${investment.purchasePrice.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm text-gray-900 dark:text-white">
                        ${investment.currentPrice.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        ${calculateValue(investment).toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div
                        className={`text-sm font-medium ${
                          gainLoss >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {gainLoss >= 0 ? '+' : ''}${gainLoss.toFixed(2)}
                        <br />
                        <span className="text-xs">
                          ({gainLoss >= 0 ? '+' : ''}
                          {gainLossPercentage.toFixed(2)}%)
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
            Add Investment
          </button>
          <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors">
            View Analytics
          </button>
          <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors">
            Export Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}
