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
                className="border-black rounded-md overflow-hidden"
                src={u.picture.medium}
                alt={u.name.first}
                width={50}
                height={50}
              ></Image>

              <p className="border-black rounded-md overflow-hidden">
                {u.name.title} {u.name.first} {u.name.last} {u.email}
              </p>
            </div>
          </>
        );
      })}
    </>
  );
  return element;
}

export default Teams;
