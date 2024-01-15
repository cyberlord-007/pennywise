import { ChangeEvent, KeyboardEvent, useState } from "react"
import { AwsmFlexCol } from "../../atoms/AwsmLayout"
import { AwsmInputBox, AwsmInputWrap } from "../../atoms/AwsmInput"
import { createExpenseRecord, queryOperations } from "../../utils/common"
import { AwsmText } from "../../atoms/AwsmTypography"
import Highlights from "../../components/Highlights/Highlights"
import usePennywiseContext from "../../hooks/usePennywiseContext/usePennywiseContext"
import usePennyStore from "../../store/PennyStore"
import { useShallow } from "zustand/react/shallow"

const Home = () => {
  // @ts-ignore
  const {supabase} = usePennywiseContext() 
  const [enteredExpense, setEnteredExpense] = useState<string>('')
  const { increaseTotalPennies, setMaxPennies } = usePennyStore(useShallow((state: any) => ({totalPennies: state.totalPennies, maxPennies: state.maxPennies, increaseTotalPennies: state.increaseTotalPennies,setMaxPennies: state.setMaxPennies})))
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredExpense(e.target.value)
  }

  const onEnterPress = async (e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      const newEntry = createExpenseRecord(enteredExpense)
      // const sb = new SupabaseClient()
      // console.log(sb)
      const { success, response } = await supabase.insertRows('expenses',newEntry)
      if(success) {
        const total = queryOperations.totalSpent(response)
        increaseTotalPennies(total)
        setMaxPennies(response[0].amount)
      }
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