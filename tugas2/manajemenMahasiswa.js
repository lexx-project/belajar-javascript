const readlineSync = require("readline-sync");
let repition = true;
let student = [
  {
    studentName: "Dono",
    nim: "12345",
    major: "Programmer",
    score: [20, 90, 43, 78, 56],
  },
];

while (repition == true) {
  function showMenu() {
    console.log("==== APLIKASI MANAJEMEN DATA MAHASISWA ====");
    console.log("1. Tambah Data Mahasiswa");
    console.log("2. Tambah Nilai Mahasiswa");
    console.log("3. Hitung Rata Rata NIlai Mahasiswa");
    console.log("4. Cari Data Mahasiswa");
    console.log("5. Tampilkan Semua Data Mahasiswa");
    console.log("6. Hapus Data Mahasiswa");
    console.log("7. Keluar");
    const choice = readlineSync.question("Pilihan Anda : ");
    if (choice === "1") {
      addStudent();
    } else if (choice === "2") {
      addScore();
    } else if (choice === "3") {
      calculateAverage();
    } else if (choice === "4") {
      findStudent();
    } else if (choice === "5") {
      showAllStudents();
    } else if (choice === "6") {
      deleteStudent();
    } else if (choice === "7") {
      repition = false;
      console.log("Terima Kasih Telah Menggunakan Aplikasi Kami");
    } else {
      console.log("Pilihan Tidak Valid");
    }
  }

  function addStudent(studentName, nim, major) {
    studentName = readlineSync.question("Masukkan Nama : ");
    nim = readlineSync.question("Masukkan NIM : ");
    major = readlineSync.question("Masukkan Jurusan : ");
    const newStudent = {
      studentName: studentName,
      nim: nim,
      jurusan: major,
      score: [],
    };
    console.log(
      "Mahasiswa Dengan Nama " + studentName + " Berhasil Ditambahkan"
    );
    student.push(newStudent);
  }

  function addScore(nim) {
    nim = readlineSync.question("Masukkan NIM : ");
    for (let i = 0; i < student.length; i++) {
      if (student[i].nim === nim) {
        const newScore = readlineSync.question("Masukkan Nilai : ");
        student[i].score.push(parseInt(newScore));
        console.log("Nilai Berhasil Ditambahkan");
        break;
      }
    }
  }

  function calculateAverage(nim) {
    nim = readlineSync.question("Masukkan NIM : ");
    let total = 0;
    let average = 0;
    for (let i = 0; i < student.length; i++) {
      if (student[i].nim === nim) {
        for (let j = 0; j < student[i].score.length; j++) {
          total += student[i].score[j];
        }
        average = total / student[i].score.length;
        console.log(
          "Rata-rata nilai " +
            student[i].studentName +
            " adalah " +
            average +
            " dengan total nilai " +
            total
        );
      }
    }
  }

  function findStudent(nim) {
    nim = readlineSync.question("Masukkan NIM : ");
    for (let i = 0; i < student.length; i++) {
      if (student[i].nim === nim) {
        console.log("Berikut Data Mahasiswa Yang Anda Cari");
        console.log("Nama : " + student[i].studentName);
        console.log("NIM : " + student[i].nim);
        console.log("Jurusan : " + student[i].major);
        console.log("Nilai : " + student[i].score);
        break;
      } else {
        console.log("Tidak Ada Mahasiswa Dengan NIM " + nim + " Di Data");
      }
    }
  }

  function showAllStudents() {
    console.log("Berikut Data Semua Mahasiswa");
    console.log(student);
  }

  function deleteStudent(nim) {
    nim = readlineSync.question("Masukkan NIM : ");
    for (let i = 0; i < student.length; i++) {
      if (nim == student[i].nim) {
        student = student.filter((std) => std.nim !== nim);
        console.log("Mahasiswa Dengan NIM " + nim + " Berhasil Dihapus");
      }
    }
  }

  showMenu();
  if (repition) {
    const answer = readlineSync.question(
      "Apakah ingin melanjutkan aplikasi? (y/n) "
    );
    if (answer !== "y") {
      repition = false;
      console.log("Terima Kasih Telah Menggunakan Aplikasi Kami");
    }
  }
}
