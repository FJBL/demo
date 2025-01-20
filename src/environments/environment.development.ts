export const environment = {
    msalConfig: {
        auth: {
            clientId: "32ac511c-03b1-463c-90d9-524308dba431",
            authority: "https://login.microsoftonline.com/35595a02-4d6d-44ac-99e1-f9ab4cd872db",
            redirectUri: "https://gaff-scgateway-service-mx-gaff-dev.apps.str01.mex.dev.mx1.paas.cloudcenter.corp/autenticacion/code"
        }
    },
    apiConfig: {
        scopes: ["user.read"],
        uri: "https://gaff-scgateway-service-mx-gaff-dev.apps.str01.mex.dev.mx1.paas.cloudcenter.corp/autenticacion/code"
    },
    baseUrl: "https://gaff-scgateway-service-mx-gaff-dev.apps.str01.mex.dev.mx1.paas.cloudcenter.corp/",
    production: false,
    useHash: false
}