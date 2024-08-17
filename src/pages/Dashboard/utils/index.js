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
    color: "#E8FDEC",
  },
  {
    title: "Face Recognize",
    image: face,
    count: "7,904",
    desc: "Attendance registered",
    color: "#FFE9EA",
  },
  {
    title: "Crowd control",
    image: crowd_control,
    count: "2,438",
    desc: "Count of crowd detected",
    color: "#EDEBFF",
  },
  {
    title: "Trespassers",
    image: trespassers,
    count: "5,600",
    desc: "Accessed the  restricted zone",
    color: "#FFF9E6",
  },
];

export const AlertList = [
  {
    question: "Trespass Deductions",
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
    question: "Abnormal Behavior",
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
    question: "Suspect Identified",
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
    question: "Theft Alerts",
    count: "25",
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
export const VehicleHead = ["License Number", "Entry Time", "State", "Taluk"];

export const StatebasedList = [
  { label: "Tamil Nadu", count: 500, color: "#25204E" },
  { label: "Kerala", count: 300, color: "#372F75" },
  { label: "Karnataka", count: 520, color: "#4A3F9C" },
  { label: "Andhra", count: 443, color: "#5C4FC3" },
  { label: "Pondichery", count: 375, color: "#7D72CF" },
  { label: "Delhi", count: 230, color: "#9D95DB" },
  { label: "Kolkata", count: 310, color: "#BEB9E7" },
];

export const TalukbasedList = [
  { label: "Madippakkam", count: 300, color: "#25204E" },
  { label: "Perundurai", count: 280, color: "#372F75" },
  { label: "Seergali", count: 320, color: "#4A3F9C" },
  { label: "Ram Nagar", count: 343, color: "#5C4FC3" },
  { label: "Keelkattalai", count: 375, color: "#7D72CF" },
  { label: "Chidamparam", count: 230, color: "#9D95DB" },
  { label: "Anna Nagar", count: 210, color: "#BEB9E7" },
];
