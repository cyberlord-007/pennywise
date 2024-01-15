import React from 'react'
import { AwsmFlexCol, AwsmFlexContainer } from '../../atoms/AwsmLayout'
import { AwsmCard } from '../../atoms/AwsmCard'
import { AwsmInputBox } from '../../atoms/AwsmInput'

export const Authentication = () => {
  return (
    <AwsmFlexContainer>
        <AwsmCard dimensions={{h: 20,w: 30}}>
            <AwsmFlexCol>
                <AwsmInputBox/>
                <AwsmInputBox/>
            </AwsmFlexCol>
        </AwsmCard>
    </AwsmFlexContainer>
  )
}
