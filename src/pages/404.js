import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/head'

import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <Head title="Not Found" />
            <h1>Page Not Found</h1>
            <p>Much like Bono, you still haven't found what you're lookin' for.</p>
            <p><Link to='/'>Back to Home</Link></p>
        </Layout>
    )
}

export default NotFound
