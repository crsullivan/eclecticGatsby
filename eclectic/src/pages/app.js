import React from "react"
import { Layout } from "../components/layout"
import { Router as MyRouter } from "@reach/router"

const Router = () => {
  return (
    <MyRouter>
      <Layout path="/app/random-person/" />
      <div>ahhhhhhhhhhhhhh</div>
    </MyRouter>
  )
}

export default Router