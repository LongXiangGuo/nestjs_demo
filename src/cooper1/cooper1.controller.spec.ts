import { Test, TestingModule } from '@nestjs/testing';
import { Cooper1Controller } from './cooper1.controller';

describe('Cooper1 Controller', () => {
  let controller: Cooper1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Cooper1Controller],
    }).compile();

    controller = module.get<Cooper1Controller>(Cooper1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
