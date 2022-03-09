//const { v4: uuidv4 } = require("uuid") //comon JS! we are not importing!
import { v4 as uuidv4 } from "uuid"

const currentTime = `${new Date().getFullYear()}/${
 new Date().getMonth() + 1
}/${new Date().getDate()}`

export const toDoListsData = [
 {
  id: uuidv4(),
  title: "Self Study",
  description: "react hooks",
  compeletedStatus: false,
  created: currentTime,
 },
 {
  id: uuidv4(),
  title: "Quiz",
  description: "mid-term",
  compeletedStatus: true,
  created: "2022/03/05",
 },
 {
  id: uuidv4(),
  title: "Exercise",
  description: "basketball",
  compeletedStatus: false,
  created: currentTime,
 },
 {
  id: uuidv4(),
  title: "Self Care",
  description: "massage",
  compeletedStatus: false,
  created: "2022/03/07",
 },
 {
  id: uuidv4(),
  title: "Family time",
  description: "call mom",
  compeletedStatus: true,
  created: "2022/03/08",
 },
]
