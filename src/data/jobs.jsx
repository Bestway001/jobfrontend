import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaFacebook, FaAmazon, FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Google from "../assets/google.png";
import Apple from "../assets/apple.png";
import FB from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";
import microsoft from "../assets/microsoft.png";

import T1 from "../assets/testimonial1.png";
import T2 from "../assets/testimonial2.png";
import T3 from "../assets/testimonial3.png";

export const jobs = [
  {
    _id: 1,
    jobTitle: "Digital Marketer",
    companyName: "Google",
    salaryRange: "30-40k",
    mode: "full time",
    location: "United Kingdom",
    createdAt: "2 Hours ago",
    logo: Google,
    status: "hired",
    dateApplied: "February 20, 2024",
  },
  {
    _id: 2,
    jobTitle: "Fullstack Engineer",
    companyName: "Facebook",
    salaryRange: "50-60k",
    mode: "remote",
    location: "Belgium",
    createdAt: "6 Months ago",
    logo: FB,
    status: "not hired",
    dateApplied: "February 25, 2024",
  },
  {
    _id: 3,
    jobTitle: "UI/UX Designer",
    companyName: "LinkedIn",
    salaryRange: "50-60k",
    mode: "part time",
    location: "Lagos",
    createdAt: "2 Days ago",
    logo: linkedin,
    status: "interviewing",
    dateApplied: "March 20, 2024",
  },
  {
    _id: 4,
    jobTitle: "Frontend Engineer",
    companyName: "Google",
    salaryRange: "30-40k",
    mode: "full time",
    location: "Abuja",
    createdAt: "6 Months ago",
    logo: Google,
    status: "interviewing",
    dateApplied: "March 15, 2024",
  },
  {
    _id: 5,
    jobTitle: "Backend Developer",
    companyName: "Facebook",
    salaryRange: "70-110k",
    mode: "remote",
    location: "Athens",
    createdAt: "6 Months ago",
    logo: FB,
    status: "not interested",
    dateApplied: "April 2, 2024",
  },
  {
    _id: 6,
    jobTitle: "UX specialist",
    companyName: "Microsoft",
    salaryRange: "50-60k",
    mode: "part time",
    location: "Lagos",
    createdAt: "2 Days ago",
    logo: microsoft,
    status: "not hired",
    dateApplied: "April 10, 2024",
  },
  {
    _id: 7,
    jobTitle: "Software Developer",
    companyName: "Google",
    salaryRange: "70-80k",
    mode: "full time",
    location: "San Francisco",
    createdAt: "1 Week ago",
    logo: Google,
    status: "offered",
    dateApplied: "April 11, 2024",
  },

  {
    _id: 8,
    jobTitle: "DevOps",
    companyName: "Microsoft",
    salaryRange: "55-65k",
    mode: "contract",
    location: "New York",
    createdAt: "3 Days ago",
    logo: microsoft,
    status: "not interested",
    dateApplied: "April 14, 2024",
  },

  {
    _id: 9,
    jobTitle: "Data Analyst",
    companyName: "Apple",
    salaryRange: "60-70k",
    mode: "remote",
    location: "Seattle",
    createdAt: "4 Days ago",
    logo: Apple,
    status: "hired",
    dateApplied: "April 15, 2024",
  },
  {
    _id: 10,
    jobTitle: "Software Tester",
    companyName: "Apple",
    salaryRange: "90-100k",
    mode: "remote",
    location: "Kenya",
    createdAt: "13 Days ago",
    logo: Apple,
    status: "hired",
    dateApplied: "April 17, 2024",
  },
];

export const testimonials = [
  {
    id: 1,
    image: T1,
    name: "John Doe",
    location: "South Africa",
    testimonial:
      "“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”",
  },
  {
    id: 2,
    image: T2,
    name: "Alice Beck",
    location: "United Kingdom",
    testimonial:
      "“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”",
  },
  {
    id: 3,
    image: T3,
    name: "Xander Cage",
    location: "Germany",
    testimonial:
      "“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”",
  },
];
import { MdLogout, MdClose } from "react-icons/md";
import { AiOutlineWechat } from "react-icons/ai";
import { FaHandHolding } from "react-icons/fa";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";

export const status = [
  {
    id: 1,
    value: "applied",
    content: "Applied",
    icon: <MdLogout />,
    bg: "bg-success",
  },
  {
    id: 2,
    value: "interview",
    content: "Interviewing",
    icon: <AiOutlineWechat />,
    bg: "bg-success",
  },
  {
    id: 3,
    value: "offer",
    content: "Recieved Offer",
    icon: <FaHandHolding />,
    bg: "bg-success",
  },
  {
    id: 4,
    value: "hired",
    content: "Hired By Employer",
    icon: <FaThumbsUp />,
    bg: "bg-success",
  },
  {
    id: 5,
    value: "not hired",
    content: "Not Hired By Employer",
    icon: <FaThumbsDown />,
    bg: "bg-danger",
  },
  {
    id: 6,
    value: "not interested",
    content: "No Longer Interested",
    icon: <MdClose />,
    bg: "bg-danger",
  },
];

export const jobType = ["fulltime", "part time", "contract", "freelance"];
export const mode = ["remote", "on-site", "hybrid"];
export const industry = [
  "construction",
  "Information Technology",
  "finance",
  "design",
  "Marketing and Advertising",
];
