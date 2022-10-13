import { I_Input } from "../Interfaces/Interfaces";

export const inputsArrayForTopInformations: I_Input[] = [
  {
    nameForShow: "نام و نام خانوادگی",
    name: "name",
    type: "text",
    validation: {
      length: 3,
    },
  },
  {
    nameForShow: "تاریخ تولد",
    name: "birthDay",
    type: "date",
    validation: {
      length: 6,
    },
  },
  {
    nameForShow: "سن",
    name: "age",
    type: "number",
    validation: {
      length: 2,
    },
  },
  {
    nameForShow: "شغل",
    name: "job",
    type: "text",
    validation: {
      length: 3,
    },
  },
  {
    nameForShow: "عکس پرسنلی",
    name: "personImage",
    type: "file",
    validation: {
      length: 1,
    },
  },
];

export const inputArrayForUniversityInformation: I_Input[] = [
  {
    nameForShow: "نام دانشگاه محل تحصیل",
    name: "university",
    type: "text",
    validation: {
      length: 1,
    },
  },
  {
    nameForShow: "نام استان محل تحصیل",
    name: "province",
    type: "text",
    validation: {
      length: 3,
    },
  },
  {
    nameForShow: "نام شهرستان محل تحصیل",
    name: "city",
    type: "text",
    validation: {
      length: 2,
    },
  },
  {
    nameForShow: "آخرین مدرک تحصیلی",
    name: "license",
    type: "text",
    validation: {
      length: 2,
    },
  },
  {
    nameForShow: "معدل نهایی",
    name: "score",
    type: "number",
    validation: {
      length: 2,
    },
  },
  {
    nameForShow: "تصویر آخرین مدرک",
    name: "licenseImage",
    type: "file",
    validation: {
      length: 1,
    },
  },
];
