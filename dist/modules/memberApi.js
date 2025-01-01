"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberListAll = getMemberListAll;
exports.getMemberList = getMemberList;
const member_1 = __importDefault(require("../model/member"));
const ITBook_1 = __importDefault(require("../model/ITBook"));
const cookBook_1 = __importDefault(require("../model/cookBook"));
const comicBook_1 = __importDefault(require("../model/comicBook"));
const members = [
    new member_1.default(1, 'user1', '1234', '홍길동', [], ['C']),
    new member_1.default(2, 'user2', '1234', '최길동', [], []),
    new member_1.default(3, 'user3', '1234', '홍길동', [], ['C']),
];
// 책 번호 enum?
const books = [
    new ITBook_1.default(100, '모던 자바스크립트', '이웅모', members[0], 'Javascript'),
    new ITBook_1.default(101, '자바의 정석', '남궁성', members[0], 'Java'),
    new ITBook_1.default(102, '열혈C언어', '윤성우', members[0], 'C'),
    new ITBook_1.default(103, '타입스크립트 교과서', '조현영', null, 'Typescript'),
    new ITBook_1.default(104, 'TheC++언어', '비야네스', members[1], 'C++'),
    new cookBook_1.default(200, '백종원의 조리비책', '백종원', members[1], false),
    new cookBook_1.default(203, '비벼야 산다', '유비빔', null, true),
    new cookBook_1.default(205, '얼마나 맛있게요', '이혜정', null, false),
    new comicBook_1.default(300, '원피스-50년간 여행', '오다', null, 50),
    new comicBook_1.default(301, '신의탑', '시우', members[2], 100),
    new comicBook_1.default(302, '귀멸의 칼날', '악어', members[2], 0),
];
// console.log(`members[0].name: ${members[0].name}`);
function getMemberListAll() {
    return members;
}
function getMemberList(memberId) {
    const member = members.find((member) => member.memberId === memberId);
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