import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClientRepository } from 'src/api/repositories/client.repository';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  async create(createClientDto: CreateClientDto) {
    const existClientByPhoneNumber =
      await this.clientRepository.findByPhoneNumber(
        createClientDto.phoneNumber,
      );
    if (existClientByPhoneNumber) {
      throw new HttpException(
        'Número já utilizado por outro usuário',
        HttpStatus.BAD_REQUEST,
      );
    }

    const existClientByEmail = await this.clientRepository.findByEmail(
      createClientDto.email,
    );

    if (existClientByEmail) {
      throw new HttpException(
        'Email já utilizado por outro usuário',
        HttpStatus.BAD_REQUEST,
      );
    }

    const client = await this.clientRepository.create(createClientDto);
    return client;
  }

  async findAll() {
    return await this.clientRepository.findAll();
  }

  async findOne(id: string) {
    return await this.clientRepository.findById(id);
  }

  async update(updateClientDto: UpdateClientDto) {
    const existClientByPhoneNumber =
      await this.clientRepository.findByPhoneNumber(
        updateClientDto.phoneNumber,
      );
    if (existClientByPhoneNumber) {
      throw new HttpException(
        'Número já utilizado por outro usuário',
        HttpStatus.BAD_REQUEST,
      );
    }
    const existClientByEmail = await this.clientRepository.findByEmail(
      updateClientDto.email,
    );

    if (existClientByEmail) {
      throw new HttpException(
        'Email já utilizado por outro usuário',
        HttpStatus.BAD_REQUEST,
      );
    }
    const client = await this.clientRepository.update(updateClientDto);
    return client;
  }

  async remove(id: string) {
    return await this.clientRepository.remove(id);
  }
}
