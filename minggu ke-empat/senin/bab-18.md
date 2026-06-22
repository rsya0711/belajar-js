Modularisasi JavaScript (Singkat)

Modularisasi adalah cara membagi kode JavaScript menjadi beberapa file kecil (module) agar kode lebih rapi dan mudah dikelola.

Contoh:

export (mengirim kode)

export function tambah(a,b){
  return a+b;
}

import (mengambil kode)

import {tambah} from "./math.js";

Manfaat:

kode lebih terorganisir
mudah digunakan ulang
lebih mudah debug

Intinya:
Module = memisahkan kode besar menjadi bagian kecil yang bisa dipakai kembali.