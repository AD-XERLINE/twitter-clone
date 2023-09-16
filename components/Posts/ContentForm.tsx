"use client"
import PostForm from "@/components/Posts/PostForm";
import OptionForm from "@/components/Posts/OptionForm";
import OtherPosts from "@/components/Posts/OtherPosts";
import FeedItem from "../Feed/FeedItem";
import { Button } from "@nextui-org/react";
import { useState } from "react";


const ContentForm = () => {
  const [newItemLabel, setNewItemLabel] = useState('');
  const [items,setItems] = useState([
    {
      imgU: "https://i.pinimg.com/564x/57/15/35/5715355f7f7478eab2b384c5b90819f8.jpg",
      Name: "SonBon",
      Id: "@mracha",
      Content: "I am feeling good. HAHAHA",
    },
    {
      imgU: "https://i.pinimg.com/564x/be/1d/f6/be1df69dc82962ccbc0b3408c6211d0a.jpg",
      Name: "Somie",
      Id: "@S_Smile",
      Content: "I upload twitter in first Time Woww (I Think it's last time).",
      Pic: "https://i.pinimg.com/564x/1f/b5/c7/1fb5c71b6982050383661b794b380318.jpg",
    },
    {
      imgU: "https://i.pinimg.com/564x/01/77/90/017790c0b82081d6f504f884b43bcf7b.jpg",
      Name: "Reckot",
      Id: "@Ma-Ea",
      Content: "Moew Moew Moew Moew Moew Moew Moew Moew",
      Pic: "https://i.pinimg.com/564x/e2/12/92/e2129280999346015cee4826a72219c9.jpg",
    },
    {
      imgU: "https://i.pinimg.com/564x/9e/df/e1/9edfe12737b500c8781cc3de733fd197.jpg",
      Name: "HalemCheck",
      Id: "@SBD",
      Content: "I am so hungry.",
    },
  ]);

  const addItem = () => {
    console.log("GG");
    if (newItemLabel !== null && newItemLabel !== '') {
      const newItem = {
        imgU: "https://i.pinimg.com/564x/c2/79/4e/c2794e4501706193fddcbb53b719ff4b.jpg",
        Name: "Neeracha",
        Id: "@AD",
        Content: newItemLabel,
        Pic: "",
      };

      setNewItemLabel('');
      
      setItems(prevItems => [...prevItems, newItem]);
    }
  };


  return (
    <div>
      <div id="TopPG">
        <div id="PG1">
          <div id="PIMG1">
            <img id="Img1" src="https://i.pinimg.com/564x/c2/79/4e/c2794e4501706193fddcbb53b719ff4b.jpg"></img>
          </div>
          <form id="PGF" >
            <div id="PGD2">
              <div id="PGD1">
                <PostForm />
                <input 
                  type="text" 
                  id="PGIP1" 
                  placeholder="What happened?" 
                  value={newItemLabel}
                  onChange={(e) => setNewItemLabel(e.target.value)} />
                
                <OptionForm />
              </div>
              <div id="PGD3">
                <OtherPosts />
                {/* <div id="PGFButton">POST</div> */}
                <button type="button" id="PGFButton" onClick={addItem}>POST</button>
                
              </div>
            </div>
            
          </form>
        </div>
      </div>
      <div>
      <div id="MainFeed">
            {items.map((item) => (
                <FeedItem
                    key={item.Id}
                    imgU={item.imgU}
                    Name={item.Name}
                    Id={item.Id}
                    Content={item.Content}
                    Pic={item.Pic}
                    
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ContentForm;