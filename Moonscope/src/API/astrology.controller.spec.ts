import { Test, TestingModule } from '@nestjs/testing';
import { AstrologyController } from './astrology.controller';

describe('AstrologyController', () => {
  let controller: AstrologyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AstrologyController],
    }).compile();

    controller = module.get<AstrologyController>(AstrologyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
