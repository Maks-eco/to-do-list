import { Task } from "./Task";

export interface TaskList {
    list: Task[];
    window: {
        innerWidth: number
        innerHeight: number
    }
    ;
}