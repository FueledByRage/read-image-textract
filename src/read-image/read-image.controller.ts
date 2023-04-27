import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReadImageService } from './read-image.service';

@Controller('read-image')
export class ReadImageController {

    constructor(private service : ReadImageService){}

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async readImage( @UploadedFile() file: Express.Multer.File ){
        try{
            const response = await this.service.getImageText( file.buffer );
            return { message : response };
        }catch(error){
            console.error(error);
            return { message: 'Ocorreu um erro ao ler a imagem.' }
        }
    }
}
