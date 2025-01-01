import Member from './member';
import Book from './book';

export default class ComicBook extends Book {
  constructor(
    bno: number,
    title: string,
    writer: string,
    owner: Member | null,
    private durability: number
  ) {
    super(bno, title, writer, owner);
  }

  public info(): string {
    return `${this.bno}, CookBook, ${this.title}, ${this.writer}, 내구도: ${this.durability}`;
  }

  public minusDurability(): void {
    this.durability--;
  }

  public getDurability(): number {
    return this.durability;
  }
}
