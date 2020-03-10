import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <center>
      <p>Beta App downloads</p>
      <div style={{ maxWidth: `800px`, marginBottom: `2.45rem` }}>
        <a href="https://github.com/mocioun/servicehub/releases/latest/download/ServiceHub.exe">
          <button style={{ maxWidth: `300px`, margin: `1rem` }}>
            Windows App
          </button>
        </a>
        <a href="https://github.com/mocioun/servicehub/releases/latest/download/ServiceHub.dmg">
          <button style={{ maxWidth: `300px`, margin: `1rem` }}>Mac App</button>
        </a>

        <a href="https://github.com/mocioun/servicehub/releases/latest/download/ServiceHub.apk">
          <button style={{ maxWidth: `300px`, margin: `1rem` }}>
            Android App
          </button>
        </a>
      </div>{" "}
      <div></div>
      <div style={{ maxWidth: `300px`, marginBottom: `5.45rem` }}>
        <Image />
      </div>
    </center>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
