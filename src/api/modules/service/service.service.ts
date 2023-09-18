import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceRepository } from 'src/api/repositories/service.repository';

@Injectable()
export class ServiceService {
  constructor(private serviceRepository: ServiceRepository) {}

  create(createServiceDto: CreateServiceDto) {
    return this.serviceRepository.create(createServiceDto);
  }

  findAll() {
    return this.serviceRepository.findAll();
  }

  findOne(id: string) {
    return this.serviceRepository.findById(id);
  }

  update(updateServiceDto: UpdateServiceDto) {
    return this.serviceRepository.update(updateServiceDto);
  }

  remove(id: string) {
    return this.serviceRepository.remove(id);
  }
}
