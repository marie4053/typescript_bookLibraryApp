export default class Member {
  constructor(
    public mno: number,
    public memberId: string,
    public password: string,
    public name: string,
    public borrowBookList: object[],
    public programLangList: string[]
  ) {}
}
