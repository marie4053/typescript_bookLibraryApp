import Member from './member';

abstract class Book {
  constructor(
    protected bno: number,
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
  public abstract info(): string;
}

export default Book;
