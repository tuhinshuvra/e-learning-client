import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';

function Blog() {
    return (
        <div className=' container'>
            <h2 className=' text-center fw-bolder text-primary mt-4 mb-4'>Brain Food Course Blog</h2>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-1 : What is `cors`? </h5> </Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

                        <br /><br />
                        CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                        <br /><br />
                        For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-2 : Why are you using `firebase`? What other options do you have to implement authentication? </h5> </Accordion.Header>
                    <Accordion.Body>
                        <h4>Firebase: </h4>
                        <p>
                            Firebase is Google's Backend-as-a-Service (BAAS) solution for mobile app development. Originally, it was developed and launched in 2011 by Firebase Inc. and was later acquired by Google in 2014. Initially it started off as a realtime database and now offers developers and marketers a comprehensive selection of tools and products that not only help develop advanced applications, but also market them. The Firebase platform allows for easy integration with IOS, Android, Web, and Unity products. There is a lot to learn about the platform, however here I will show the top five benefits of using Firebase by Google.
                        </p>

                        Benefit #1: Google Analytics For Firebase <br />
                        Benefit #2: Realtime Database & Firestore <br />
                        Benefit #3: Authentication <br />
                        Benefit #4: Crashlytics <br />
                        Benefit #5: Free Use of Dynamic Links

                        <br /><br />
                        <h4> ## The best Firebase alternatives</h4>
                        1. Back4App <br />
                        2. Backendless <br />
                        3. Kuzzle <br />
                        4. Pubnub <br />
                        5. Kumulos <br />
                        6. Appwrite <br />
                        7. Deployd <br />
                        8. NHost <br />
                        9. AWS Amplify <br />
                        10. Heroku <br />


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-3 : How does the private route work? </h5> </Accordion.Header>
                    <Accordion.Body>
                        <h4> Private Routes </h4>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. <br />

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header> <h5 className='fw-bold text-secondary'> Question-4 : What is Node? How does Node work? </h5> </Accordion.Header>
                    <Accordion.Body>
                        <h4> Node.js : </h4> Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /> <br />

                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br /> <br />

                        Node.js basically works on two concept <br />

                        1.Asynchronous <br />
                        2.Non-blocking I/O.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Blog;