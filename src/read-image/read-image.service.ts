import { Injectable } from '@nestjs/common';
import { AWSProvider } from './provider';


@Injectable()
export class ReadImageService {
    constructor( private readImageProvider : AWSProvider ){}
    async getImageText( image : Buffer ){
        return this.readImageProvider.send(image);
        //return process.env.secretAccessKey;
    }
}
