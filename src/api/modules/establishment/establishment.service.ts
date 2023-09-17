import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { EstablishmentRepository } from 'src/api/repositories/establishment.repository';
import { PartnerRepository } from 'src/api/repositories/partner.repository';

@Injectable()
export class EstablishmentService {
  constructor(
    private establishmentRepository: EstablishmentRepository,
    private partnerRepository: PartnerRepository,
  ) {}

  create(createEstablishmentDto: CreateEstablishmentDto) {
    const partnerExist = this.partnerRepository.findById(
      createEstablishmentDto.partnerOwnerId,
    );
    if (!partnerExist) {
      throw new HttpException(
        'Nenhum parceiro encontrado para o ID fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.establishmentRepository.create(createEstablishmentDto);
  }

  findAll() {
    return this.establishmentRepository.findAll();
  }

  findOne(id: string) {
    return this.establishmentRepository.findById(id);
  }

  update(updateEstablishmentDto: UpdateEstablishmentDto) {
    const establishmentExist = this.establishmentRepository.findById(
      updateEstablishmentDto.id,
    );
    if (!establishmentExist) {
      throw new HttpException(
        'Nenhum estabelecimento encontrado para o ID fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.establishmentRepository.update(updateEstablishmentDto);
  }

  remove(id: string) {
    return this.establishmentRepository.remove(id);
  }
}
