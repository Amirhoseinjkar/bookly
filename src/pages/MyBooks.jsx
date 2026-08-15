import { useState } from "react";
import Header from "../components/Header";
import SearchGrid from "../components/SearchGrid";
function MyBooks() {
  const [activeTab, setActiveTab] = useState("readNext");
  const [haveRead, setHaveread] = useState(() => {
    const response = localStorage.getItem("haveRead");
    const data = response ? JSON.parse(response) : null;
    return data;
  });
  const [readNext, setReadNext] = useState(() => {
    const response = localStorage.getItem("readNext");
    const data = response ? JSON.parse(response) : null;
    return data;
  });
  console.log(haveRead);
  console.log(readNext);
  return (
    <div>
      <Header />
      <div>
        <button
          onClick={() => {
            setActiveTab("haveRead");
          }}
        >
          books you have read
        </button>
        <button onClick={() => setActiveTab("readNext")}>
          books you want to read
        </button>
        {activeTab === "readNext" ? (
          readNext ? (
            <SearchGrid books={readNext} />
          ) : (
            <div>
              <p>you did not add any books yet</p>
              <button>brows</button>
            </div>
          )
        ) : haveRead ? (
          <SearchGrid books={haveRead} />
        ) : (
          <div>
            <p>you did not add any books yet</p>
            <button>brows</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default MyBooks;
