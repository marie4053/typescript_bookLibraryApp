import Member from './member';

abstract class Book {
  constructor(
    protected _bno: number,
    protected title: string,
    protected writer: string,
    protected _owner: Member | null
  ) {}
  public get owner(): Member | null {
    return this._owner;
  }
  public set owner(newOwner: Member | null) {
    this._owner = newOwner;
  }
  public get bno(): number {
    return this._bno;
  }
  public abstract info(): string;
}

class ITBook extends Book {
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

class CookBook extends Book {
  constructor(
    bno: number,
    title: string,
    writer: string,
    owner: Member | null,
    private coupon: boolean = false
  ) {
    super(bno, title, writer, owner);
  }

  public info(): string {
    return `${this.bno}, CookBook, ${this.title}, ${this.writer}, ${
      this.coupon ? '요리쿠폰 없음' : '요리쿠폰 있음'
    }`;
  }

  public getCoupon(): boolean {
    return this.coupon;
  }

  public useCoupon(): void {
    this.coupon = true;
  }
}

class ComicBook extends Book {
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
    return `${this.bno}, ComicBook, ${this.title}, ${this.writer}, 내구도: ${this.durability}`;
  }

  public minusDurability(): void {
    this.durability--;
  }

  public getDurability(): number {
    return this.durability;
  }
}

export { Book, ITBook, CookBook, ComicBook };
