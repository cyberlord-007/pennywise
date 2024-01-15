import { Navigate, Outlet, useNavigate } from "react-router"
import usePennywiseContext from "../../hooks/usePennywiseContext/usePennywiseContext"
import { useEffect } from "react"
import { AwsmLayout, AwsmRouteElement } from "../../atoms/AwsmLayout"
import Sidebar from "../Sidebar/Sidebar"
import { Authentication } from "./Authentication"

const Protected = () => {
  const navigate = useNavigate()
  // @ts-ignore
  const { isAuthenticated } = usePennywiseContext()

  return (
    <>
      {
        isAuthenticated ?       
        <AwsmLayout>
          <Sidebar/>
          <AwsmRouteElement>
            <Outlet/>
          </AwsmRouteElement>
        </AwsmLayout> :
        <Authentication />
      }
    </>
  )
}

export default Protected