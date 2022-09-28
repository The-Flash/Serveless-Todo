// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'mwqwgmt90j'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-qtd6ee-s.us.auth0.com',            // Auth0 domain
  clientId: 'rSSsybCH2tLi6fMdywRvFSKqgTuGMsDz',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
