import { AwsmFlexRow } from '../../atoms/AwsmLayout'
import { AwsmCard } from '../../atoms/AwsmCard'
import { AwsmText, AwsmTinyText } from '../../atoms/AwsmTypography'
import { useEffect } from 'react'
import { SupabaseClient } from '../../supabase/SupabaseClient'

const Highlights = () => {

  // const fetchExpenses = async (sb: SupabaseClient) => {
  //   const { response } = await sb.queryData('expenses')
  //   console.log(response)
  //   let arr = []
  //   response.map(el => arr.push(el.amount))
  //   const maxTillNow = Math.max(...arr)
  //   console.log(maxTillNow)
  // }
  useEffect(() => {
    const sb = new SupabaseClient()
    // fetchExpenses(sb)
  })
  return (
    <AwsmFlexRow width={100} jc='space-between' wrap>
        <AwsmCard dimensions={{w: 20, h: 15}}>
          <AwsmText size={1.5}>Total Pennies 💰</AwsmText>
          <AwsmTinyText>spent this month</AwsmTinyText>
          <AwsmFlexRow jc='flex-end'>
            <AwsmText size={5}>200</AwsmText>
          </AwsmFlexRow>
        </AwsmCard>
        <AwsmCard dimensions={{w: 20, h: 15}}></AwsmCard>
        <AwsmCard dimensions={{w: 20, h: 15}}></AwsmCard>
    </AwsmFlexRow>
  )
}

export default Highlights