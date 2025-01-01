import Member from './member';
import Book from './book';

class CookBook extends Book {
  constructor(
    bno: number,
    title: string,
    writer: string,
    owner: Member | null,
    private coupon: boolean = true
  ) {
    super(bno, title, writer, owner);
  }

  public info(): string {
    return `${this.bno}, CookBook, ${this.title}, ${this.writer}, ${
      this.coupon ? '요리쿠폰 있음' : '요리쿠폰 없음'
    }`;
  }

  public getCoupon(): boolean {
    return this.coupon;
  }

  public useCoupon(): void {
    this.coupon = false;
  }
}
