import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Ruta} from './ruta.model';

@model()
export class Aeropuerto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  pais: string;

  @property({
    type: 'string',
    required: true,
  })
  coordx: string;

  @property({
    type: 'string',
    required: true,
  })
  coordy: string;

  @property({
    type: 'string',
    required: true,
  })
  siglas: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @belongsTo(() => Ruta, {name: 'origen_aeropuerto'})
  origen: string;

  @belongsTo(() => Ruta, {name: 'destino_aeropuerto'})
  destino: string;

  constructor(data?: Partial<Aeropuerto>) {
    super(data);
  }
}

export interface AeropuertoRelations {
  // describe navigational properties here
}

export type AeropuertoWithRelations = Aeropuerto & AeropuertoRelations;
