import { Test, TestingModule } from '@nestjs/testing';
import { Cooper2Controller } from './cooper2.controller';

describe('Cooper2 Controller', () => {
  let controller: Cooper2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Cooper2Controller],
    }).compile();

    controller = module.get<Cooper2Controller>(Cooper2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
