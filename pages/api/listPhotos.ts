// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import driveService from "../../utility/drive-utility";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    // googleJWTClient.authorize((error: any, access_token: any) => {
    //     console.log({access_token});
    //     if (error) {
    //         return console.error("Couldn't get access token", error)
    //     }
    //     // ... access_token ready to use to fetch data and return to client
    //     // even serve access_token back to client for use in `gapi.analytics.auth.authorize`
    // })

    try {
        // const result = await driveService.files.list({
        //     q: 'mimeType=\'application/vnd.google-apps.folder\'',
        //     fields: 'nextPageToken, files(id, name)',
        //     spaces: 'drive',
        // });
        const fields =  'nextPageToken, files(id, name, description, thumbnailLink)';

        const jpegResult = await driveService.files.list({
            q: 'mimeType=\'image/jpeg\'',
            fields,
            spaces: 'drive',
        });

        const pngResult = await driveService.files.list({
            q: 'mimeType=\'image/png\'',
            fields,
            spaces: 'drive',
        });

        let photos: any[] = (jpegResult.data.files as any[]).concat(pngResult.data.files as any[]);
        (photos as any[]).forEach( photo => {
            photo.url = photo?.thumbnailLink.replace("=s220", "")
        })

        // console.log({photos});

        res.status(200).json(photos);


    } catch (err) {
        console.log(err);
        res.status(400);
    }

}
