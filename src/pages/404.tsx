import React from 'react';
import Layout from '@components/layout';

const NotFoundPage = () => (
    <Layout>
        <div className="error-page">
            <div className="error-text-box">
                <h2>
                    <span>404 Error: </span>Page does not found!
                </h2>
            </div>
        </div>
    </Layout>
);

export default NotFoundPage;
