import { useHref } from "react-router";
import { login, logout } from "../actions/user";

import {
  addCompany
} from "../../api/index";


export const attemptAddCompany = (newCompany) => () => addCompany(newCompany);