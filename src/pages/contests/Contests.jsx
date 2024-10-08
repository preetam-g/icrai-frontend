// // src/pages/contests/Contests.jsx
// import React, { useState } from "react";
// import { contestsData } from "../../fakeDatabase";  // Ensure this path is correct
// import styles from "./contests.module.css";  // Import CSS module for styling

// const Contests = () => {
//   const [selectedContest, setSelectedContest] = useState(null); // Start with no contest selected

//   // Function to handle contest selection
//   const handleSelectContest = (contest) => {
//     setSelectedContest(contest);
//   };

//   // Function to handle closing the details view
//   const handleCloseDetails = () => {
//     setSelectedContest(null);
//   };

//   return (
//     <div className={styles.container}>
//       {/* Left Side: List of Contests */}
//       <div className={styles.sidebar}>
//         {contestsData.map((contest) => (
//           <div
//             key={contest.id}
//             onClick={() => handleSelectContest(contest)}
//             className={
//               selectedContest && selectedContest.id === contest.id
//                 ? `${styles.listItem} ${styles.selected}` // Highlight the selected item
//                 : styles.listItem
//             }
//           >
//             {contest.title}
//           </div>
//         ))}
//       </div>

//       {/* Right Side: Contest Details */}
//       <div
//         className={`${styles.content} ${
//           selectedContest ? styles.contentVisible : ""
//         }`}
//       >
//         {selectedContest && (
//           <div className={styles.detailContainer}>
//             <button className={styles.closeButton} onClick={handleCloseDetails}>
//               &times;
//             </button>
//             <h2>{selectedContest.title}</h2>
//             <p>{selectedContest.details}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Contests;
// src/pages/contests/Contests.jsx
// src/pages/contests/Contests.jsx
import React, { useState } from "react";
import { contestsData } from "../../fakeDatabase"; // Ensure this path is correct
import styles from "./contests.module.css"; // Import CSS module for styling

const Contests = () => {
  const [selectedContest, setSelectedContest] = useState(null); // Start with no contest selected

  // Function to handle contest selection
  const handleSelectContest = (contest) => {
    setSelectedContest(contest);
  };

  // Function to handle closing the details view
  const handleCloseDetails = () => {
    setSelectedContest(null);
  };

  return (
    <div className={styles.container}>
      {/* Left Side: List of Contests */}
      <div
        className={`${styles.sidebar} ${
          selectedContest ? styles.sidebarHidden : ""
        }`}
      >
        {contestsData.map((contest) => (
          <div
            key={contest.id}
            onClick={() => handleSelectContest(contest)}
            className={
              selectedContest && selectedContest.id === contest.id
                ? `${styles.listItem} ${styles.selected}` // Highlight the selected item
                : styles.listItem
            }
          >
            {contest.title}
          </div>
        ))}
      </div>

      {/* Right Side: Contest Details */}
      <div
        className={`${styles.content} ${
          selectedContest ? styles.contentVisible : ""
        }`}
      >
        {selectedContest && (
          <div className={styles.detailContainer}>
            <button className={styles.closeButton} onClick={handleCloseDetails}>
              &times;
            </button>
            <h2>{selectedContest.title}</h2>
            <p>{selectedContest.details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contests;

