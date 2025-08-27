let angka1 = parseInt(prompt("masukkan angka pertama "));
let operasi = prompt("masukkan operasi (+,-,*,/,%,**");
let angka2 = parseInt(prompt("masukkan angka kedua "));
let hasil = "";
let nyala = true;

function matematika(angka1, operasi, angka2) {
  if (operasi == "+") {
    hasil = angka1 + angka2;
    return hasil;
  } else if (operasi == "-") {
    hasil = angka1 - angka2;
    return hasil;
  } else if (operasi == "*") {
    hasil = angka1 * angka2;
    return hasil;
  } else if (operasi == "/") {
    if (angka2 == 0) {
      alert("tidak bisa membagi dengan nol");
      return;
    } else {
      hasil = angka1 / angka2;
      return hasil;
    }
  } else if (operasi == "%") {
    hasil = angka1 % angka2;
    return hasil;
  } else if (operasi == "**") {
    hasil = angka1 ** angka2;
    return hasil;
  } else {
    alert("operasi tidak ditemukan");
  }
}
hasil = matematika(angka1, operasi, angka2);
alert(hasil);

while (nyala == true) {
  nyala = confirm("Apakah anda mau menggunakan kalkulator lagi?");
  if (nyala == teru) {
    angka1 = parseInt(prompt("masukkan angka pertama "));
    operasi = prompt("masukkan operasi (+,-,*,/,%,**");
    angka2 = parseInt(prompt("masukkan angka kedua "));
    hasil = matematika(angka1, operasi, angka2);
    alert(hasil);
  } else {
    alert("Terima kasih sudah menggunakan kalkulator kami");
  }
}
