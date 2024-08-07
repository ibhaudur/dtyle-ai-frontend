import people from "../../../../public/image/dashboard/analytics/people_in&out.svg";
import face from "../../../../public/image/dashboard/analytics/face.svg";
import crowd_control from "../../../../public/image/dashboard/analytics/crowd_control.svg";
import trespassers from "../../../../public/image/dashboard/analytics/trespassers.svg";
import vehicles from "../../../../public/image/dashboard/analytics/vehicles.svg";
import workers from "../../../../public/image/dashboard/analytics/workers.svg";

export const AnalticsList = [
  {
    title: "People In & Out",
    image: people,
    count: "23,084",
    desc: "People count of enter and exited",
  },
  {
    title: "Face Recognize",
    image: face,
    count: "7,904",
    desc: "Attendance registered",
  },
  {
    title: "Vehicles In & Out",
    image: vehicles,
    count: "7,904",
    desc: "Vehicle count of enter and exited",
  },
  {
    title: "Crowd control",
    image: crowd_control,
    count: "2,438",
    desc: "Count of crowd detected",
  },
  {
    title: "Trespassers",
    image: trespassers,
    count: "5,600",
    desc: "Accessed the  restricted zone",
  },
  {
    title: "Workers",
    image: workers,
    count: "340",
    desc: "Overall workers count by detection",
  },
];

export const AlertList = [
  {
    question: "Safety Gear violation",
    count: "4",
    answer: [
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
    ],
  },
  {
    question: "Camera Tempering",
    count: "5",
    answer: [
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
    ],
  },
  {
    question: "Vehicle Trespass",
    count: "12",
    answer: [
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
    ],
  },
  {
    question: "Trespass",
    count: "34",
    answer: [
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
    ],
  },
  {
    question: "Tripwire",
    count: "34",
    answer: [
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
      {
        camera: "CAM0003",
        date_time: "20th July 2023 at 05:47:25 PM",
      },
    ],
  },
];
