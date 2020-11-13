import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
// import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>It's a Dead End, please Navigate </h1>
          <Link to="/">
            <button className="btn center-btn">Back Home</button>
          </Link>
        </div>
      </main>
    </Layout>
  )
    
}

export default Error
