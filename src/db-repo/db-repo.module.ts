import { Module } from '@nestjs/common';
import { DbRepoService } from './db-repo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, User])],
  providers: [DbRepoService],
  exports: [DbRepoService],
})
export class DbRepoModule {}
