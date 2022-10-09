import { I_Input } from "../Interfaces/Interfaces";

export const inputsArrayForTopInformations: I_Input[] = [
  { nameForShow: "نام و نام خانوادگی", name: "name", type: "text" },
  { nameForShow: "تاریخ تولد", name: "birthDay", type: "date" },
  { nameForShow: "سن", name: "age", type: "number" },
  { nameForShow: "شغل", name: "job", type: "text" },
  { nameForShow: "عکس پرسنلی", name: "personImage", type: "file" },
];

export const inputArrayForUniversityInformation: I_Input[] = [
  { nameForShow: "نام دانشگاه محل تحصیل", name: "university", type: "text" },
  { nameForShow: "نام استان محل تحصیل", name: "province", type: "text" },
  { nameForShow: "نام شهرستان محل تحصیل", name: "city", type: "text" },
  { nameForShow: "آخرین مدرک تحصیلی", name: "license", type: "text" },
  { nameForShow: "معدل نهایی", name: "score", type: "number" },
  { nameForShow: "تصویر آخرین مدرک", name: "licenseImage", type: "file" },
];
