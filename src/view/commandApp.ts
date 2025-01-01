import reader from 'readline-sync';
import Member from '../model/member';
import { getMemberList, getMemberListAll } from '../modules/memberApi';
import runApp2 from './commandApp2';
// import {} from '../modules/Api';

// 윈도우에서 한글 입력 안되는 경우 chcp 65001
reader.setDefaultOptions({ encoding: 'utf8' });

function runApp(): void {
  while (true) {
    try {
      printMenu();
      const input = reader.question('> ');
      const menuNum = Number(input);
      switch (menuNum) {
        case 1:
          const member = login();
          if (member === null) {
            break;
          }
          const result = runApp2(member);
          if (result === 99) {
            return;
          }
          break;
        case 99:
          return;
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

function printMenu(): void {
  console.log('<도서 관리 프로그램>');
  console.log('1. 로그인');
  console.log('99. 종료하기');
}

function login(): Member | null {
  try {
    const memberId = reader.question(`아이디를 입력하세요.\n> `);
    const member = getMemberList(memberId);
    const password = reader.question(`비밀번호를 입력하세요.\n> `);
    if (password !== member.password) {
      console.log('로그인에 실패하였습니다.');
      return null;
    }
    console.log('로그인에 성공하였습니다.');
    return member;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('알 수 없는 오류가 발생했습니다.');
    }
    return null;
  }
}

export default runApp;
