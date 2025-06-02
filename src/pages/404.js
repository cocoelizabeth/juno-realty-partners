import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Link } from "gatsby"
import { NotFoundPageStyles } from "../styles/NotFoundPageStyles"

const NotFoundPage = () => (
  <Layout>
    <NotFoundPageStyles>

          <h1>404: Page Not Found</h1>
       <Link to="/">Go Back to Home</Link>
    </NotFoundPageStyles>

  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
