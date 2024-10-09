export class CreateDefectDto {
  constructor(
    readonly name: string,
    readonly location: string,
    readonly descriptionShort: string,
    readonly descriptionLong: string,
  ) {
    this.name = name;
    this.location = location;
    this.descriptionShort = descriptionShort;
    this.descriptionLong = descriptionLong;
  }
}
