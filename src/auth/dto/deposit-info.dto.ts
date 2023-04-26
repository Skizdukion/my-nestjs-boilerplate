import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DepositWalletInfo {
  @ApiProperty({ example: 31337 })
  @IsNotEmpty()
  chainId: number;
}
