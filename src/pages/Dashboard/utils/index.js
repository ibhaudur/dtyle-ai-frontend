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
export const GenderbasedList = [
  { label: "Women", count: 68, color: "#7263E9" },
  { label: "Men", count: 32, color: "#E7B92E" },
];
export const EmotionbasedList = [
  { label: "Happy", count: 68, color: "#52CC7B" },
  { label: "Sad", count: 12, color: "#FF4444" },
  { label: "Neutral", count: 20, color: "#FFCD35" },
];
export const CrowdBasedList = [
  {
    label: "Gold",
    color: "#5C4FC3",
    bgColor: "#F3F2FF",
    percentage: "24%",
    count: 450,
  },
  {
    label: "Platinum",
    color: "#FF4444",
    bgColor: "#FFE9EA",
    percentage: "30%",
    count: 340,
  },
  {
    label: "Diamond",
    color: "#52CC7B",
    bgColor: "#E8FDEC",
    percentage: "16%",
    count: 698,
  },
  {
    label: "Silver",
    color: "#FFCD35",
    bgColor: "#FFF9E6",
    percentage: "30%",
    count: 227,
  },
];
export const AgeList = [
  { label: "13-17", percentage: 8.4 },
  { label: "18-24", percentage: 50.1 },
  { label: "25-34", percentage: 28.6 },
  { label: "35-44", percentage: 6.1 },
  { label: "45-54", percentage: 4.1 },
  { label: "55+", percentage: 2.4 },
];
