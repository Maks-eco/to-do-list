import { Task } from "../app/interfaces/Task";

class Storage {
  // constructor() {}
  save(value: object) {
    localStorage.setItem("stor", JSON.stringify(value));
  }
  get() {
    return JSON.parse(localStorage.getItem("stor"));
  }
}

export class ListStorage<T> extends Storage {
  getList() {
    let data = this.get();
    if (data?.list) {
      return data?.list;
    } else {
      data = { list: [] };
      this.save(data);
      return [];
    }
  }
  addToList(value: T) {
    let data = this.get();
    if (data?.list) {
    } else {
      data = { list: [] };
    }
    data.list.push(
      // {
      //   id: value.id,
      //   value: value.value,
      //   active: value.active,
      // }
      value
    );
    this.save(data);
  }
  deleteInactiveTaskFromList() {
    let data = this.get();
    if (data?.list) {
      data.list = data.list.filter((item: any) => item?.active);
    } else {
      data = { list: [] };
      // data.list.push(value);
    }
    this.save(data);
  }
  // toggleTask(id: string) {
  //   let list: T[] = this.get()?.list;
  //   if (list) {
  //     list.map((task) => {
  //       if(task?.id && task?.active)
  //       if (task.id === id) {
  //         task.active = !task.active;
  //       }
  //       return task;
  //     });
  //     const data = this.get();
  //     data.list = list;
  //     this.save(data);
  //   }
  // }
}
