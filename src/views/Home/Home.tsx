import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import { AwsmFlexCol } from "../../atoms/AwsmLayout"
import useSupabase from "../../hooks/useSupabase/useSupabase"
import { AwsmInputBox, AwsmInputWrap } from "../../atoms/AwsmInput"
import { createExpenseRecord } from "../../utils/common"
import { SupabaseClient } from "../../supabase/SupabaseClient"
import { AwsmText } from "../../atoms/AwsmTypography"
import Highlights from "../../components/Highlights/Highlights"

const Home = () => {
  const [enteredExpense, setEnteredExpense] = useState<string>('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredExpense(e.target.value)
  }

  const onEnterPress = async (e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      const newEntry = createExpenseRecord(enteredExpense)
      const sb = new SupabaseClient()
      console.log(sb)
      await sb.insertRows('expenses',newEntry)
      setEnteredExpense('')
    }
  }

  return (
    <AwsmFlexCol>
      <AwsmInputWrap>
        <AwsmInputBox value={enteredExpense} onChange={handleInputChange} onKeyDown={onEnterPress} placeholder="Add an expense..."/>
      </AwsmInputWrap>
      <AwsmFlexCol height={80}>
        <AwsmText size={1.75}>Highlights</AwsmText>
        <Highlights/>
      </AwsmFlexCol>
    </AwsmFlexCol>
  )
}

export default Home