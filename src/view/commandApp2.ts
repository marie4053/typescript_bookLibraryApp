import reader from 'readline-sync';
import Member from '../model/member';
import Book from '../model/book';
import {
  getBookListAll,
  getMemberList,
  getMemberListAll,
} from '../modules/memberApi';
// import {} from '../modules/Api';

// 윈도우에서 한글 입력 안되는 경우 chcp 65001
reader.setDefaultOptions({ encoding: 'utf8' });

function runApp2(member: Member): number {
  while (true) {
    try {
      printMenu(member);
      const input = reader.question('> ');
      const menuNum = Number(input);
      switch (menuNum) {
        case 1:
          showBookList();
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
        case 99:
          return 99;
        default:
          break;
      }
      console.log('');
    } catch (error) {
      console.error(error);
      console.log('잘못된 입력입니다.');
    }
  }
}

function printMenu(member: Member): void {
  console.log('');
  console.log('<도서 관리 프로그램>');
  console.log(
    `로그인이 되었습니다. (${member.memberId}, 보유책 : ${member.borrowBookList.length}권)`
  );
  console.log('1. 전체 도서 리스트 보기');
  console.log('2. 내가 대여한 도서 보기');
  console.log('3. 도서 대여하기');
  console.log('4. 도서 반납하기');
  console.log('5. 도서 기증하기');
  console.log('6. 사용자 정보 보기');
  console.log('99. 종료하기');
}

function showBookList(): void {
  const bookList = getBookListAll();
  const result = bookList
    .map(
      (book) =>
        `${book.info()}, ${
          book.owner
            ? `대출불가(소유자: ${book.owner.memberId}, ${book.owner.name})`
            : '대출 가능'
        }`
    )
    .join('\n');
  console.log(result);
}

export default runApp2;
