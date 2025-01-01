import Member from './member';
import Book from './book';

export default class ITBook extends Book {
  constructor(
    bno: number,
    title: string,
    writer: string,
    owner: Member | null,
    private language: string
  ) {
    super(bno, title, writer, owner);
  }

  public info(): string {
    return `${this.bno}, ITBook, ${this.title}, ${this.writer}, ${this.language}`;
  }

  public getLanguage(): string {
    return this.language;
  }
}
