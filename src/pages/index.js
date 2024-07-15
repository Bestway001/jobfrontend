import { lazy } from "react";
const Home = lazy(() => import("./Home"));
const Job = lazy(() => import("./Job"));
const Contact = lazy(() => import("./Contact"));
const JobDetails = lazy(() => import("./JobDetails"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const JobApplication = lazy(() => import("./JobApplication"));
const AppliedJobs = lazy(() => import("./AppliedJobs"));
const Error404 = lazy(() => import("./Error404"));

export {
  Home,
  Job,
  Contact,
  JobDetails,
  Login,
  Register,
  Error404,
  JobApplication,
  AppliedJobs,
};
