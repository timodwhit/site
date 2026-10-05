import type { ReactNode } from "react"
import Header from "./header"

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
