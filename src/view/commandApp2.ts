import reader from 'readline-sync';
import Member from '../model/member';
import { Book } from '../model/book';
import {
  getMemberList,
  getMemberListAll,
  removeBook,
  getBookListAll,
  getBookList,
  borrowBook,
  // returnBook,
} from '../modules/memberApi';

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
          console.log(`\n<전체 도서 리스트>`);
          const bookListAll = getBookListAll();
          showBookList(bookListAll);
          break;
        case 2:
          console.log(`\n<내가 대여한 도서 보기>`);
          const myBookList = getBookList(member.memberId);
          showBookList(myBookList, member);
          break;
        case 3:
          console.log(`\n<대출 가능한 도서 리스트>`);
          const availableBookList = getBookList();
          showBookList(availableBookList);
          const bnoBorrow = Number(
            reader.question('빌릴 책을 입력하세요.\n> ')
          );
          borrowBook(member.memberId, bnoBorrow);
          break;
        case 4:
          // console.log(`\n<반납할 도서 리스트>`);
          // const toReturnBookList = getBookList(member.memberId);
          // showBookList(toReturnBookList, member);
          // const bnoToReturn = Number(
          //   reader.question('반납할 책을 입력하세요.\n> ')
          // );
          // returnBook(member.memberId, bnoToReturn);
          break;
        case 5:
          break;
        case 6:
          console.log(`\n<사용자 정보보기>`);
          showMemberList();
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

function showBookList(bookList: Book[], member?: Member): void {
  if (!member) {
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
  } else {
    const result = bookList.map((book) => book.info()).join('\n');
    console.log(result);
  }
}

function showMemberList(): void {
  const memberList = getMemberListAll();
  for (let member of memberList) {
    console.log(
      `${member.mno}, ${member.memberId}, ${member.name}, [${member.programLangList}]`
    );
    if (member.borrowBookList.length === 0) {
      console.log(`└ 빌린 책 없음`);
      continue;
    }
    member.borrowBookList.forEach((book) => {
      console.log(`└ ${book.info()}`);
    });
  }
}

export default runApp2;
