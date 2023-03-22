const BLOCK = "블";
const BBLE = "쁠";
const CHAIN = "체";
const SCHOOL = "스";

//let rightWord = BBLE + SCHOOL + BLOCK;
let rightWord = BLOCK + CHAIN + SCHOOL;

if (rightWord === "블체스") {
  console.log("블체스 화이팅!");
}

const 나는프로그래머다 = true;
const 나는천개의비트코인이있다 = false;
const 내가제일좋아하는음료는제로콜라다 = true;

let trueOrFalse = 나는프로그래머다;

if (trueOrFalse) {
  console.log("당신은 거짓을 말하지 않는 선량한 사람입니다");
} else {
  console.log("당신은 거짓말쟁이에 나쁜 사람입니다");
}

let blockchainScore;
let frontendScore;

let totalScore = 80;
if (totalScore > 78) {
  console.log("Great");
} else if (totalScore > 50) {
  console.log("Good");
} else if (totalScore > 30) {
  console.log("Try harder");
} else {
  console.log("sad....");
}
