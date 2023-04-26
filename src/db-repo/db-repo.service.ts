import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbRepoService {
  constructor(
    @InjectRepository(Role)
    public roleRepo: Repository<Role>,
    @InjectRepository(User)
    public userRepo: Repository<User>,
  ) {}
}
