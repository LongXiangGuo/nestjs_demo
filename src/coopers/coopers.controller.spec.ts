import { Test, TestingModule } from '@nestjs/testing';
import { CoopersController } from './coopers.controller';

describe('Coopers Controller', () => {
  let controller: CoopersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoopersController],
    }).compile();

    controller = module.get<CoopersController>(CoopersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
