import { AnalyzeDocumentCommand } from "@aws-sdk/client-textract";
import { getClient } from "./client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AWSProvider{
    async send( image : Buffer ){
        const params = {
            Document: {
              Bytes: image
            },
            FeatureTypes: ['FORMS', 'TABLES']
        };

        const command = new AnalyzeDocumentCommand(params);
        const credentials = {
            accessKeyId: process.env.accessKeyId, 
            secretAccessKey: process.env.secretAccessKey
        }
        const client = getClient(credentials);
        const res = await client.send(command).catch((error) =>{
            throw error;
        });
        const regexPlaca = /^[A-Z]{3}\d{4}$/;
        const regexMunicipio= /([A-Z]{3}-{0,1}[0-9][0-9A-Z][0-9]{2})/;
        let placa = '';
        let municipio = '';
        let texto = '';
        for(let textIndex = 0; textIndex < res.Blocks.length ; textIndex++ ){
            if( !('Text' in res.Blocks[textIndex])) continue;
            if(res.Blocks[textIndex].BlockType == 'WORD') texto = `${texto} ${res.Blocks[textIndex].Text}`;
            //if(regexPlaca.test(res.Blocks[textIndex].Text)) placa = res.Blocks[textIndex].Text;
            //else if( res.Blocks[textIndex].Text.match(regexMunicipio)) municipio = res.Blocks[textIndex].Text;
        }
        return texto;
    }
}