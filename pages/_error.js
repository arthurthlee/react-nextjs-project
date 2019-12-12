import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
    <div>
        <h1>Something went wrong.</h1>
        <p>Try <Link href="/"><a>going back</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
    </div>
);

export default errorPage;