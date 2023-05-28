import { Test, TestingModule } from '@nestjs/testing';
import { AstrologyService } from './astrology.service';

describe('AstrologyService', () => {
  let service: AstrologyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AstrologyService],
    }).compile();

    service = module.get<AstrologyService>(AstrologyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
