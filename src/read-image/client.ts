import { TextractClient } from "@aws-sdk/client-textract";

export const getClient = (credentials : any) =>{
    console.log('Client on with credentials: ', credentials)
    return  new TextractClient({ region: "us-east-1", credentials });
}