'use client'
import { formatter } from '@/lib/utlis'
import { FC } from 'react'

interface CurrencyProps {
  value: string | number
}

export const Currency: FC<CurrencyProps> = ({ value }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>
}
