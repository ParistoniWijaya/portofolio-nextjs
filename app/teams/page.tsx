"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Result } from "../model/api";
import Image from "next/image";

function Teams() {
  const URL = "https://randomuser.me/api/?results=20";
  const [users, setUsers] = useState<Result[]>([]);

  const addUser = () => {
    axios.get(URL).then((response) => {
      console.log(response.data.results);
      setUsers([...response.data.results]);
    });
  };

  useEffect(() => {
    addUser();
  }, []);

  const element = (
    <>
      {users.map((u) => {
        return (
          <>
            <div className="bg-gray-500">
              <Image
                className="border-black"
                src={u.picture.medium}
                alt={u.name.first}
                width={50}
                height={50}
              ></Image>
              <div className="flex justify-around">
                <p>
                  {u.name.title} {u.name.first} {u.name.last}
                </p>
                <p>{u.email}</p>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
  return element;
}

export default Teams;
