import Member from '../model/member';
import { Book, ITBook, CookBook, ComicBook } from '../model/book';

const memberList: Member[] = [
  new Member(1, 'user1', '1234', '홍길동', [], ['C']),
  new Member(2, 'user2', '1234', '최길동', [], []),
  new Member(3, 'user3', '1234', '박길동', [], ['C']),
];

const bookList: Book[] = [
  new ITBook(100, '모던 자바스크립트', '이웅모', memberList[0], 'Javascript'),
  new ITBook(101, '자바의 정석', '남궁성', memberList[1], 'Java'),
  new ITBook(102, '열혈C언어', '윤성우', null, 'C'),
  new ITBook(103, '타입스크립트 교과서', '조현영', null, 'Typescript'),
  new ITBook(104, 'TheC++언어', '비야네스', memberList[1], 'C++'),
  new CookBook(200, '백종원의 조리비책', '백종원', memberList[0], false),
  new CookBook(203, '비벼야 산다', '유비빔', null, true),
  new CookBook(205, '얼마나 맛있게요', '이혜정', null, false),
  new ComicBook(300, '원피스-50년간 여행', '오다', memberList[0], 50),
  new ComicBook(301, '신의탑', '시우', memberList[2], 100),
  new ComicBook(302, '귀멸의 칼날', '악어', memberList[2], 0),
];

// console.log(`memberList[0].name: ${memberList[0].name}`);

export function getMemberListAll(): Member[] {
  return memberList;
}

export function getMemberList(memberId: string): Member {
  const member = memberList.find((member) => member.memberId === memberId);
  if (!member) {
    throw new Error(`해당 아이디가 없습니다.`);
  }
  return member;
}

export function removeBook(mIdex: number, bno: number) {
  console.log(memberList[mIdex].borrowBookList);
}

export function getBookListAll(): Book[] {
  return bookList;
}

export function getBookList(memberId?: string): Book[] {
  return bookList.filter((book) => {
    // 특정 회원의 책 목록을 가져오는 경우
    if (memberId) {
      return book.owner?.memberId === memberId;
    }
    // 대출 가능한 책 목록을 가져오는 경우
    return book.owner === null;
  });
}

export function borrowBook(memberId: string, bno: number): boolean {
  try {
    const bIndex = bookList.findIndex((book) => book.bno === bno);
    const mIndex = memberList.findIndex(
      (member) => member.memberId === memberId
    );
    // 1) memberList - borrowBookList에 해당 책 넣어주기
    memberList[mIndex].borrowBookList.push(bookList[bIndex]);
    // 2) bookList - owner 추가해주기
    bookList[bIndex].owner = memberList[mIndex];
  } catch (error) {
    console.log('대출에 실패하였습니다.');
    return false;
  }
  console.log('대출이 완료되었습니다.');
  return true;
}

// export function returnBook(memberId: string, bno: number): boolean {
//   try {
//     const mIndex = memberList.findIndex(
//       (member) => member.memberId === memberId
//     );
//     const myBookList = memberList[mIndex].borrowBookList;
//     console.log(myBookList[0]);
//     const bIndex = bookList.findIndex((book) => book.bno === bno);
//     // const bookIndex = memberList[mIndex].borrowBookList.findIndex((book)=>)
//     // 1) memberList - borrowBookList에 해당 책 빼주기
//     // memberList[mIndex].borrowBookList.splice(bookList[bIndex]);
//     // 2) bookList - owner에 null
//     bookList[bIndex].owner = null;
//     console.log(`${bookList[mIndex]}이 반납되었습니다.`);
//   } catch (error) {
//     console.log('반납에 실패하였습니다.');
//     return false;
//   }
//   return true;
// }
