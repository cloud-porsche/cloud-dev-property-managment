import { UUID } from 'node:crypto';

export class Defect {
  readonly id: UUID;
  readonly name: string;
  readonly location: string;
  readonly descriptionShort: string;
  readonly descriptionLong: string;
  readonly reportedDate: Date;
  readonly status: DefectStates;
}

export enum DefectStates {
  OPEN,
  IN_WORK,
  REJECTED,
  DONE,
}
