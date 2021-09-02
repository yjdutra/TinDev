import React, { useEffect, useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

import api from "../services/api";

import logo_peq from "../assets/tinder-peq.svg";
import like_ico from "../assets/like-ico.svg";
import dislike_ico from "../assets/dislike-ico.svg";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id,
        },
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id },
    });

    setUsers(users.filter((user) => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id },
    });

    setUsers(users.filter((user) => user._id !== id));
  }

  return (
    <div className="main-container">
      <Link tSo="/">
        <img src={logo_peq} alt="Tindev" />
      </Link>

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>

              <div className="buttons">
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike_ico} alt={"Dislike"} />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like_ico} alt={"Like"} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty"> cabou :( </div>
      )}
    </div>
  );
}
