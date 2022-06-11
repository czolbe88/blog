import {google} from 'googleapis'
import googleServiceAccountKey from '../secrets/blog-image-host-1654871978093-a009b961b6a0.json'
import {GoogleAuth} from "google-auth-library"; // see docs on how to generate a service account

const googleJWTClient = new google.auth.JWT(
    googleServiceAccountKey.client_email,
    undefined,
    googleServiceAccountKey.private_key,
    ['https://www.googleapis.com/auth/photoslibrary.readonly'], // You may need to specify scopes other than analytics
    undefined,
)




export default googleJWTClient;

// ya29.c.b0AXv0zTPx71LtSRCFigUk2P-0NRGJ6coHFdjFrxu1PN5ip942f97ZuXzRKOaPtNdUgi9l8I0_AgeukvtboJhjk1uCRebDBQfy83ayoEuTMo-6bwN5L6BCyqgbHe4ND9kfDw8lnI5F_n9i3Dqe3WwR0yNv2ESq-CEHq4ZbwyFpmw7KT6q1CXdXWHebvqD25_AVjvPPJcialSHhBQ95VQCCSGQgJEBUDFg