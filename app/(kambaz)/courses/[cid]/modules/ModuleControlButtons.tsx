import LessonControlButtons from "./LessonControlButtons";
import { BsPlus } from "react-icons/bs";
export default function ModuleControlButtons() {
    return (
        <div className="gap-3">
        <LessonControlButtons />
        <BsPlus />
        </div>

    );
}