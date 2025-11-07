import { Test, TestingModule } from '@nestjs/testing';
import { Bookings } from './bookings';

describe('Bookings', () => {
  let provider: Bookings;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Bookings],
    }).compile();

    provider = module.get<Bookings>(Bookings);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
