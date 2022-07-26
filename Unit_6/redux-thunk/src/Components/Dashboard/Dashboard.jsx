import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles } from "../../Redux/Profiles/action";

export const Dashboard = () => {
  const [input, setInput] = React.useState("");
  const { profiles } = useSelector((store) => store.profiles);
  const { page } = useSelector((store) => store.page);
  const [currentPage, setCurrentPage] = React.useState(0);
  const dispatch = useDispatch();
  const handleGithub = (e) => {
    e.preventDefault();
    // console.log("clicked");
    setCurrentPage(1);
    if (input) {
      dispatch(getAllProfiles(input, currentPage));
    }
  };

  const handlePageChange = (value) => {
    // console.log(value);
    setCurrentPage(currentPage + value);
  };

  React.useEffect(() => {
    dispatch(getAllProfiles(input, currentPage));
  }, [currentPage]);
  return (
    <div>
      <form onSubmit={handleGithub}>
        <input
          type="text"
          placeholder="Enter Profile Name"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input type="submit" value="Search" />
      </form>
      <div>
        {profiles?.map((profile, index) => {
          return <p key={index}>{profile.login}</p>;
        })}
      </div>
      {page > 5 ? (
        <div>
          <button
            onClick={() => {
              handlePageChange(-1);
            }}
            disabled={currentPage <= 1}
          >
            PREV
          </button>
          <button
            onClick={() => {
              handlePageChange(1);
            }}
            disabled={currentPage === Math.floor(page / 5)}
          >
            NEXT
          </button>
        </div>
      ) : null}
    </div>
  );
};
