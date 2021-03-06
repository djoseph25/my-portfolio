import React from "react"
import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  return (
    <Helmet htmlAttribute={{ lang: "en" }} title={title}>
      <meta name="description" content={description}></meta>
    </Helmet>
  )
}

export default SEO
