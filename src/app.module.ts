import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GenreModule } from './genre/genre.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { WatchedMovieModule } from './watched.movie/watched.movie.module';

@Module({
  imports: [
      DatabaseModule,
      GenreModule,
      WatchedMovieModule,
      RecommendationModule,
      UserModule,
      MovieModule,
      AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
