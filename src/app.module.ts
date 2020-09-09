import {Module} from '@nestjs/common';
import {GenreModule} from './genre/genre.module';
import {RecommendationModule} from './recommendation/recommendation.module';
import {UserModule} from './user/user.module';
import {MovieModule} from './movie/movie.module';
import {AuthModule} from './auth/auth.module';
import {WatchedMovieModule} from './watched.movie/watched.movie.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
        GenreModule,
        WatchedMovieModule,
        RecommendationModule,
        UserModule,
        MovieModule,
        AuthModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'yyr3ll',
            password: '7331',
            database: 'db',
            entities: ["**/*.entity.js"],
            synchronize: true,
        })
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
