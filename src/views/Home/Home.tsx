import { AwsmFlexCol } from "../../atoms/Layout"
import { AwsmInputBox, AwsmInputWrap } from "../../styled/AwsmInput/AwsmInput"

const Home = () => {
  return (
    <AwsmFlexCol>
      <AwsmInputWrap>
        <AwsmInputBox placeholder="Add an expense..."/>
      </AwsmInputWrap>
    </AwsmFlexCol>
  )
}

export default Home