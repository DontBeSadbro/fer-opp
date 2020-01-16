import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import Select from "react-dropdown-select";
import fetcingFactory from "../../Utils/external";
import { endpoints } from "../../Utils/Types";

function InboxPeople(props) {
  const {
    conversationList,
    conversationCount,
    setConversationCount,
    setSelectedConversationIdx
  } = props;

  const [userList, setUserList] = useState([
    { value: 1, label: "u1" },
    { value: 2, label: "u2" },
    { value: 3, label: "u3" },
    { value: 4, label: "user4" },
    { value: 5, label: "user5" },
    { value: 6, label: "user6" }
  ]);
  useEffect(() => {
    let getAllUsersParams = {
      band: "",
      name: ""
    };

    fetcingFactory(endpoints.GET_ALL_USERS, JSON.stringify(getAllUsersParams))
      .then(response => response.json())
      .then(response => {
        console.log("response", response);
        //console.log("getAllUsersParams", JSON.stringify(getAllUsersParams));
        //console.log("prvi", response[1].id, response[1].username);
        var users = [];
        response.forEach(user => {
          users.push({ value: user.id, label: user.username });
          //console.log("id, name", user.id, user.username);
        });
        //setUserList([users]);
        //console.log("userList", userList); //zašto se ne promjeni
        //console.log("users", users);

        // this.setState({inValidRegister: true})
      });
  }, []);

  const [conversationTitle, setConversationTitle] = useState("");
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const handleChange = e => {
    if (!e) {
      setUserList([]); //čemu ovo služi
      return;
    }

    setSelectedUserIds(e.map(x => x.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!(selectedUserIds.length > 0)) {
      alert(
        "morate izabrati barem jednu osobu da biste mogli stvoriti razgovor"
      );
      return;
    } else {
      //stvoriti novi razgovor
      let newConversationParams = {
        pictureUrl: "",
        title: conversationTitle,
        userName: ""
      };
      //console.log("newconvparams", newConversationParams);
      fetcingFactory(
        endpoints.CREATE_USER_CONVERSATION,
        JSON.stringify(newConversationParams)
      ).then(response => console.log("create response", response));
      //.then(response => response.json())
      /* .then(response => {
          console.log("create response", response);
          console.log(
            "newConversationParams",
            JSON.stringif(newConversationParams)
          );
          // this.setState({inValidRegister: true})
        }) */
      //dodati osobu u razgovor
    }

    console.log("submit");
    //console.log("convertitle", conversationTitle);

    setConversationCount(conversationCount + 1);
  };

  return (
    <div className="inbox_people">
      <div className="heading_search">
        <h2>Create conversation</h2>
        <form onSubmit={handleSubmit}>
          Title:
          <input
            value={conversationTitle}
            onChange={e => setConversationTitle(e.target.value)}
          ></input>
          <br />
          Participants:{" "}
          <Select options={userList} multi={true} onChange={handleChange} />
          <button type="submit" className="new-conversation">
            Create
          </button>
        </form>
      </div>
      <div className="inbox_chat">
        {conversationList.map((x, i) => (
          <ChatList
            key={i}
            data={x}
            setSelectedConversationIdx={setSelectedConversationIdx}
            idx={i}
          />
        ))}
      </div>
    </div>
  );
}

export default InboxPeople;
