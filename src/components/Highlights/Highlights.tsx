import { AwsmFlexRow } from '../../atoms/AwsmLayout'
import { AwsmCard } from '../../atoms/AwsmCard'
import { AwsmText, AwsmTinyText } from '../../atoms/AwsmTypography'
import { useCallback, useEffect, useState } from 'react'
import usePennywiseContext from '../../hooks/usePennywiseContext/usePennywiseContext'
import usePennyStore from '../../store/PennyStore'
import { useShallow } from 'zustand/react/shallow'
import { queryOperations } from '../../utils/common'

const Highlights = () => {

  // @ts-ignore
  const { supabase } = usePennywiseContext()
  // const [total,setTotal] = useState(0)

  const {totalPennies, maxPennies, increaseTotalPennies, setMaxPennies} = usePennyStore(useShallow((state: any) => ({totalPennies: state.totalPennies, maxPennies: state.maxPennies, increaseTotalPennies: state.increaseTotalPennies,setMaxPennies: state.setMaxPennies})))

  const fetchExpenses = useCallback( async () => {
    const { response } = await supabase.queryData('expenses')
    // setTotal(response[0].amount)
    const max = queryOperations.totalSpent(response)
    increaseTotalPennies(max)
    setMaxPennies(response[0].amount)
  },[])

  useEffect(() => {
    fetchExpenses()
  },[fetchExpenses])
  
  return (
    <AwsmFlexRow width={100} jc='space-between' wrap>
        <AwsmCard dimensions={{w: 20, h: 15}}>
          <AwsmText size={1.5}>Total Pennies 💰</AwsmText>
          <AwsmTinyText>spent this month</AwsmTinyText>
          <AwsmFlexRow jc='flex-end'>
            <AwsmText size={5}>{totalPennies}</AwsmText>
          </AwsmFlexRow>
        </AwsmCard>
        <AwsmCard dimensions={{w: 20, h: 15}}>
          <AwsmText size={1.5}>Maximum Pennies 💵</AwsmText>
          <AwsmTinyText>spent this month</AwsmTinyText>
          <AwsmFlexRow jc='flex-end'>
            <AwsmText size={5}>{maxPennies}</AwsmText>
          </AwsmFlexRow>
        </AwsmCard>
        <AwsmCard dimensions={{w: 20, h: 15}}>
          <AwsmText size={1.5}>%age change in Pennies 💵</AwsmText>
          <AwsmTinyText>from last month</AwsmTinyText>
          <AwsmFlexRow jc='flex-end'>
            <AwsmText size={5}>{totalPennies}</AwsmText>
          </AwsmFlexRow>
        </AwsmCard>
    </AwsmFlexRow>
  )
}

export default Highlights