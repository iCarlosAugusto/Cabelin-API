import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PartnerRepository } from 'src/api/repositories/partner.repository';

@Injectable()
export class PartnerService {
  constructor(private partnerRepository: PartnerRepository) {}

  async create(createPartnerDto: CreatePartnerDto) {
    const existPartnerByPhoneNumber =
      await this.partnerRepository.findByPhoneNumber(
        createPartnerDto.phoneNumber,
      );
    if (existPartnerByPhoneNumber) {
      throw new HttpException(
        'Número já utilizado por outro usuário',
        HttpStatus.BAD_REQUEST,
      );
    }

    const existPartnerByEmail = await this.partnerRepository.findByEmail(
      createPartnerDto.email,
    );

    if (existPartnerByEmail) {
      throw new HttpException(
        'Email já utilizado por outro usuário',
        HttpStatus.BAD_REQUEST,
      );
    }

    const partner = await this.partnerRepository.create(createPartnerDto);
    return partner;
  }

  async findAll() {
    return await this.partnerRepository.findAll();
  }

  async findOne(id: string) {
    return await this.partnerRepository.findById(id);
  }

  async update(id: number, updatePartnerDto: UpdatePartnerDto) {
    const existPartnerByPhoneNumber =
      await this.partnerRepository.findByPhoneNumber(
        updatePartnerDto.phoneNumber,
      );
    if (existPartnerByPhoneNumber) {
      throw new HttpException(
        'Número já utilizado por outro usuário',
        HttpStatus.BAD_REQUEST,
      );
    }
    const existPartnerByEmail = await this.partnerRepository.findByEmail(
      updatePartnerDto.email,
    );

    if (existPartnerByEmail) {
      throw new HttpException(
        'Email já utilizado por outro usuário',
        HttpStatus.BAD_REQUEST,
      );
    }
    const partner = await this.partnerRepository.update(updatePartnerDto);
    return partner;
  }

  async remove(id: string) {
    return await this.partnerRepository.remove(id);
  }
}
