import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }
  const db = SQLite.openDatabase("track-task.db");
  return db;
}

const db = openDatabase();

const initTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      // "DROP TABLE tasks;"
      "create table if not exists tasks (id integer primary key not null, done int, value text);"
    );
  });
};

export const addTaskInSqlite = (text) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into tasks (done, value) values (0, ?)", [text]);
      tx.executeSql("select * from tasks", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    },
    (error) => {
      console.log("error sqlite", error);
    },
    () => Alert.alert("task successfully added")
  );
};

export const getTaskFromSqlite = async (text) => {
  let tasks = [];

  await db.transaction(
    (tx) => {
      //   tx.executeSql("insert into tasks (done, value) values (0, ?)", [text]);
      tx.executeSql("select * from tasks", [], (_, { rows }) => {
        console.log("rows--------", JSON.stringify(rows));
        let data = JSON.stringify(rows);
        console.log("data--", data);
        data.forEach((element) => {
          tasks.push(element);
        });
      });
    },
    (error) => {
      console.log("error sqlite", error);
    },
    () => Alert.alert("tasks successfully get")
  );
  console.log("taasks=======", tasks);
  return tasks;
};
