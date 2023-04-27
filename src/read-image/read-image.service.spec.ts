import { Test, TestingModule } from '@nestjs/testing';
import { ReadImageService } from './read-image.service';

describe('ReadImageService', () => {
  let service: ReadImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadImageService],
    }).compile();

    service = module.get<ReadImageService>(ReadImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
