import { AwsmSidebarTop, AwsmNavText, AwsmSidebarBottom, AwsmSidebarContent, AwsmSidebarItem, AwsmSidebarWrap } from '../../styled/AwsmSidebar/AwsmSidebar'
import { AwsmHeading, AwsmTinyText } from '../../atoms/Typography'
import { useState } from 'react'
import { RouteState, appRoutes, initialRouteState } from '../../constants/routes'


const Sidebar = () => {

    const [active, setActive] = useState<RouteState>(initialRouteState())

  return (
    <AwsmSidebarWrap>
        <AwsmSidebarTop>
            <AwsmHeading>Pennywise</AwsmHeading>
        </AwsmSidebarTop>
        <AwsmSidebarContent>
            {
                appRoutes.map(({path,label,icon: Icon}) => {
                    return <AwsmSidebarItem key={label} onClick={() => setActive({ [label]: true})} active={active[label]} to={path}>
                        <Icon/>
                        <AwsmNavText>{label}</AwsmNavText>
                    </AwsmSidebarItem>
                })
            }
        </AwsmSidebarContent>
        <AwsmSidebarBottom>
            <AwsmTinyText>
                Made with ❤️ by Akash
            </AwsmTinyText>
        </AwsmSidebarBottom>
    </AwsmSidebarWrap>
  )
}

export default Sidebar