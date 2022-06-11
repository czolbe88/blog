import {GoogleAuth} from "google-auth-library";
import googleServiceAccountKey from "../secrets/google-svc-account-secrets.json";
import {google} from "googleapis";

const credentials = {
    client_email: googleServiceAccountKey.client_email,
    private_key: googleServiceAccountKey.private_key
}

const auth = new GoogleAuth({credentials,   scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/drive.photos.readonly',
    'https://www.googleapis.com/auth/drive.readonly',
],});

const driveService = google.drive({version: "v3", auth })

export default driveService;