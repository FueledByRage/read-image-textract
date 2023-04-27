import { Test, TestingModule } from '@nestjs/testing';
import { ReadImageController } from './read-image.controller';

describe('ReadImageController', () => {
  let controller: ReadImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadImageController],
    }).compile();

    controller = module.get<ReadImageController>(ReadImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
