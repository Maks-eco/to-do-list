import { Task } from "./interfaces";

class Storage {
  // constructor() {}
  save(value: object) {
    localStorage.setItem("stor", JSON.stringify(value));
  }
  get() {
    return JSON.parse(localStorage.getItem("stor"));
  }
}

export class TaskStorage extends Storage {
  getTaskList() {
    let data = this.get();
    if (data?.list) {
      return data?.list;
    } else {
      data = { list: [] };
      this.save(data);
      return [];
    }
  }
  addTaskToList(value: Task) {
    let data = this.get();
    if (data?.list) {
    } else {
      data = { list: [] };
    }
    data.list.push({
      id: value.id,
      value: value.value,
      active: value.active,
    });
    this.save(data);
  }
  deleteInactiveTaskFromList() {
    let data = this.get();
    if (data?.list) {
      data.list = data.list.filter((item: any) => item.active);
    } else {
      data = { list: [] };
      // data.list.push(value);
    }
    this.save(data);
  }
  toggleTask(id: string) {
    let list: Task[] = this.get()?.list;
    if (list) {
      list.map((task) => {
        if (task.id === id) {
          task.active = !task.active;
        }
        return task;
      });
      const data = this.get();
      data.list = list;
      this.save(data);
    }
  }
}
