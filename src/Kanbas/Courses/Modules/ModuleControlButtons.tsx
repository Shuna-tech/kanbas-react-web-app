import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlusLg } from "react-icons/bs";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlusLg className="fs-4 me-1 ms-1"/>
      <IoEllipsisVertical className="fs-4 me-1" />
    </div>
);}
