import { Book } from './book';

export default class Member {
  constructor(
    public mno: number,
    public memberId: string,
    public password: string,
    public name: string,
    public borrowBookList: Book[],
    public programLangList: string[]
  ) {}
}
