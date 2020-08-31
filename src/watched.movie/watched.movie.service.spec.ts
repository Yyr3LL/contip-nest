import { Test, TestingModule } from '@nestjs/testing';
import { WatchedMovieService } from './watched.movie.service';

describe('WatchedMovieService', () => {
  let service: WatchedMovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchedMovieService],
    }).compile();

    service = module.get<WatchedMovieService>(WatchedMovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
