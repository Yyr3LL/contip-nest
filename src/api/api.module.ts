import {Module} from '@nestjs/common';
import {ApiController} from './api.controller';
import {ApiService} from './api.service';
import {DatabaseModule} from "../database/database.module";
import {GenreModule} from "../genre/genre.module";
import {MovieModule} from "../movie/movie.module";
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        DatabaseModule,
        GenreModule,
        MovieModule,
        UserModule
    ],
    controllers: [ApiController],
    providers: [ApiService]
})
export class ApiModule {}
