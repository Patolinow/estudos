import { Fragment, PropsWithChildren } from "react"
import MainHeader from "./MainHeader"

const Layout = (props: PropsWithChildren) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout
