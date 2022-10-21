// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;



export const load = ({ fetch }) => {
    const pikets = fetch(`https://razv-api.ti-soft.ru/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            {
            pikets {
            data {
                attributes {
                Name
                Length
                Price
                }
            }
            }
            }
            `		})
    }).then((r) => r.json())
    return {pikets}
};