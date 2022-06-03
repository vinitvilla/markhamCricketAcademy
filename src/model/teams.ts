export class Team {
  name: string;
  imgUrl: string;

  constructor(name: string, imgUrl: string) {
    this.name = name;
    this.imgUrl = imgUrl;
  }

  getName: () => string = () => this.name;
  setName: (name: string) => void = (name: string) => (this.name = name);

  getImgUrl: () => string = () => this.imgUrl;
  setImgUrl: (imgUrl: string) => void = (imgUrl: string) =>
    (this.imgUrl = imgUrl);
}
