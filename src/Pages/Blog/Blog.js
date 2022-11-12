import React from 'react';

const Blog = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:w-4/6 mx-auto my-10 gap-y-10'>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y border rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <h4 className="font-bold">Difference between SQL and NoSQL</h4>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>
                        When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision. <br /> <br />

                        1. Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available. <br />

                        2. The five critical differences between SQL vs NoSQL are: <br />

                        3. SQL databases are relational, NoSQL databases are non-relational. <br />
                        4. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                        5. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                        6. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
            </div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y border rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <h4 className="font-bold">What is JWT, and how does it work?</h4>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <p>
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted
                    </p>
                </div>
            </div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y border rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <h4 className="font-bold">What is the difference between javascript and NodeJS?</h4>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>
                        1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.
                    </p>

                    <p>
                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
                    </p>



                    <p>3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
                </div>
            </div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y border rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <h4 className="font-bold">How does NodeJS handle multiple requests at the same time?</h4>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;