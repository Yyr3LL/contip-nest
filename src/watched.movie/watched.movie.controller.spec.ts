import { Test, TestingModule } from '@nestjs/testing';
import { WatchedMovieController } from './watched.movie.controller';

describe('WatchedListController', () => {
  let controller: WatchedMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatchedMovieController],
    }).compile();

    controller = module.get<WatchedMovieController>(WatchedMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
