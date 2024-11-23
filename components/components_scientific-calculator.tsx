"use client"

import React, { useState } from 'react'
import * as math from 'mathjs'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ScientificCalculator: React.FC = () => {
  const [display, setDisplay] = useState('')

  const handleClick = (value: string) => {
    setDisplay(prev => prev + value)
  }

  const handleClear = () => {
    setDisplay('')
  }

  const handleDelete = () => {
    setDisplay(prev => prev.slice(0, -1))
  }

  const handleCalculate = () => {
    try {
      const result = math.evaluate(display)
      setDisplay(result.toString())
    } catch (error) {
      setDisplay('Error')
    }
  }

  const buttons = [
    'sin', 'cos', 'tan', 'log',
    '(', ')', '^', '√',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ]

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <Input
        type="text"
        value={display}
        readOnly
        className="w-full mb-4 text-right text-2xl p-2 rounded"
        aria-label="Calculator display"
      />
      <div className="grid grid-cols-4 gap-2">
        <Button onClick={handleClear} className="col-span-2 bg-red-500 hover:bg-red-600">AC</Button>
        <Button onClick={handleDelete} className="bg-yellow-500 hover:bg-yellow-600">DEL</Button>
        {buttons.map((btn) => (
          <Button
            key={btn}
            onClick={() => btn === '=' ? handleCalculate() : handleClick(btn)}
            className={`${btn === '=' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default ScientificCalculator

