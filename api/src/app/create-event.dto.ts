import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';
import { EventDTO } from '@cfp-platform/shared-types';

export class CreateEventDto implements Omit<EventDTO, 'id'> {
  @IsNotEmpty()
  @IsString()
  nome!: string;

  @IsNotEmpty()
  @IsString()
  endereço!: string;

  @IsNotEmpty()
  @IsNumber()
  capacidade!: number;

  @IsNotEmpty()
  @IsDateString()
  data!: string;
}
