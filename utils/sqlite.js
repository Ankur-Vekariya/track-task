import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
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

export const addTaskInSqlite = (text) => {
  db.transaction((tx) => {
    tx.executeSql(
      // "DROP TABLE tasks;"
      "create table if not exists tasks (id integer primary key not null, done int, value text);"
    );
  });
  
  console.log("text in add task common functions", text);
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
  return new Promise((resolve, reject) => {
    return db.transaction(
      (tx) => {
        //   tx.executeSql("insert into tasks (done, value) values (0, ?)", [text]);
        tx.executeSql("select * from tasks", [], (_, { rows }) => {
          console.log("rows--------", JSON.stringify(rows));
          let data = rows;
          console.log("data--", data?._array);
          data?._array.forEach((element) => {
            console.log("element", element);
            tasks.push(element);
          });
          resolve(tasks);
        });
      },
      (error) => {
        console.log("error sqlite", error);
        resolve([]);
      },
      () => {
        console.log("tasks fetched");
      }
    );
  });
};
