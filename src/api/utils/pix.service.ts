import { Injectable } from '@nestjs/common';
import Gerencianet from 'gn-api-sdk-typescript';
import * as path from 'path';

interface IChargeData {
  expiration: number;
  cpfPayer: string;
  namePayer: string;
  value: string;
  pixKeyReciver: string;
}

@Injectable()
export class PixService {
  private configEfi = {
    sandbox: false,
    client_id: 'Client_Id_ccdc63807e9c4fc3c5ca6b03cd8d930dc0f4850f',
    client_secret: 'Client_Secret_5a65df06f4ce37d55ef9b883b7779704df08d7a3',
    certificate: path.resolve() + '\\src\\api\\certificado-prod.p12',
  };
  private gerencianet = new Gerencianet(this.configEfi);

  async generateCharge({
    expiration,
    cpfPayer,
    namePayer,
    value,
    pixKeyReciver = '47235079000101',
  }: IChargeData) {
    const body = {
      calendario: {
        expiracao: expiration,
      },
      devedor: {
        cpf: cpfPayer,
        nome: namePayer,
      },
      valor: {
        original: value,
      },
      chave: pixKeyReciver,
    };

    try {
      const chargeResult = await this.gerencianet.pixCreateImmediateCharge(
        [],
        body,
      );
      return await this.generateQRCode(chargeResult.loc.id);
    } catch (error) {
      console.log('ERRO: ', error);
    }
  }

  private async generateQRCode(locId: string) {
    const params = {
      id: locId,
    };
    const response = await this.gerencianet.pixGenerateQRCode(params);
    return response;
  }
}
