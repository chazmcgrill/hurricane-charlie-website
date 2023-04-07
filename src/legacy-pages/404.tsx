import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div className="error-page">
            <div className="error-text-box">
                <h2><span>404 Error: </span>Page does not exist!</h2>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
