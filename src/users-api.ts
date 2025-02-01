// Create an API using Node.js and Express:
// 1. POST /user - adds a user.
// 2. GET /users - returns all users.

type RequestsResult = {
    data: any,
    status: number
};

async function fetchAll(urls: string[]): Promise<RequestsResult[]> {
    const requests = urls.map(url => 
        fetch(url)
            .then(async response => ({
                data: await response.json(),
                status: response.status
            }))
            .catch(error => ({
                data: null,
                status: 500, 
            }))
    );

    return Promise.allSettled(requests).then(results =>
        results
            .filter(result => result.status === "fulfilled")
            .map(result => (result as PromiseFulfilledResult<RequestsResult>).value)
    );
}

export { fetchAll };  
