const { createInterface } = require("node:readline");

// อันดับแรกผมเรียกหน้า Interface มาก่อน
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// สร้างตัวแปรที่เก็บรูปแบบของแต่ละตัวละครแล้วก็พื้นที่ เพื่อรอนำไปใช้
// ผมจะให้กำเนิด spiderman บังคับแมงมุมไปกัดปีเตอร์
const peter = "👨‍🔬 ";
const bomb = "💥 ";
const fieldCharacter = "🟫";
const spider = "🕷️ ";

// ผมสร้างฟังชั่นที่สร้างแมพแบบสุ่ม
function generateField(height, width) {
  // อันนี้ผมสร้าง field เป็นcodeที่เจนแมพออกมาเป็น 🟫 ให้เต็มหน้าก่อน โดยอิงจากความสูงกับกว้าง
  // ตอนแรกผมจะให้มันสร้าง Array หลักก่อนเป็นการอิงจำนวนจาก height เป็นแถว row
  const field = Array.from({ length: height }, () =>
    // แล้วก็มีลูกๆของมันเป็ยชั้นใน โดยอิงจาก width แล้วก็ยัด fieldCharacter เข้าไปใน Array ทุกตัวที่สร้างขึ้นมาซึ่งแสดงเป็น columns
    Array.from({ length: width }, () => fieldCharacter),
  );
  // สร้างmapเสร็จแล้วจ้า (ยังมีแค่🟫เต็มกระดานเลย)

  // ต่อมาผมจะสุ่มผู้เล่นก่อน
  // ผมสร้างตัววแปรไว้เก็บตัวเลขในการสุ่มไว้ เอาให้ดูง่ายก็เป็นแกน X แกน Y ซึ่ง Y ก๋็เอาทศนิยมที่สุ่มได้ไปคูณกับค่่า Height X ก็คูณกับ width
  const startY = Math.floor(Math.random() * height);
  const startX = Math.floor(Math.random() * width);
  // แล้วก็เอาตัวเลขที่สุ่มได้ไปยัดใน Array ตามแกนของ field เพื่อระบุตำแหน่งใน Map แล้วกำหนดให้ spider ไปอยู่ตรงนั้น
  field[startY][startX] = spider;

  //ส่งออกเป็น Object
  return { field, startX, startY };
}

// test สุ่มแมงมุมเฉยๆจ้า
const { field } = generateField(5, 5);
field.forEach((row) => {
  console.log(row.join(" "));
});
