import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './database/database.module';
import { GenreModule } from './genre/genre.module';
import { WatchedListModule } from './watched-list/watched-list.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
      ApiModule,
      DatabaseModule,
      GenreModule,
      WatchedListModule,
      RecommendationModule,
      UserModule,
      MovieModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
