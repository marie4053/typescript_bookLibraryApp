import Member from '../model/member';
import Book from '../model/book';
import ITBook from '../model/ITBook';
import CookBook from '../model/cookBook';
import ComicBook from '../model/comicBook';

const memberList: Member[] = [
  new Member(1, 'user1', '1234', '홍길동', [], ['C']),
  new Member(2, 'user2', '1234', '최길동', [], []),
  new Member(3, 'user3', '1234', '홍길동', [], ['C']),
];

// 책 번호 enum?

const bookList: Book[] = [
  new ITBook(100, '모던 자바스크립트', '이웅모', memberList[0], 'Javascript'),
  new ITBook(101, '자바의 정석', '남궁성', memberList[0], 'Java'),
  new ITBook(102, '열혈C언어', '윤성우', memberList[0], 'C'),
  new ITBook(103, '타입스크립트 교과서', '조현영', null, 'Typescript'),
  new ITBook(104, 'TheC++언어', '비야네스', memberList[1], 'C++'),
  new CookBook(200, '백종원의 조리비책', '백종원', memberList[1], false),
  new CookBook(203, '비벼야 산다', '유비빔', null, true),
  new CookBook(205, '얼마나 맛있게요', '이혜정', null, false),
  new ComicBook(300, '원피스-50년간 여행', '오다', null, 50),
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

// export function getTodoList(no: number): TodoItem | null {
//   let item: TodoItem = {};
//   return item;
// }

// export function createTodoList(newItem: TodoItem): boolean {
//   return true;
// }

// export function updateTodoList(): boolean {
//   return true;
// }

// export function deleteTodoList(): boolean {
//   return true;
// }

export function getBookListAll(): Book[] {
  return bookList;
}
