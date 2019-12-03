import { Test, TestingModule } from '@nestjs/testing';
import { CoopersService } from './coopers.service';

describe('CoopersService', () => {
  let service: CoopersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoopersService],
    }).compile();

    service = module.get<CoopersService>(CoopersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
