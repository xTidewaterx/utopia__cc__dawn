import React, { useEffect, useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDocs } from "firebase/firestore";
import { Context, app } from "../../App";
import LocateTargetMatch from "./LocateTargetMatch";

const array = [];

export const RenderComments = () => {
  const [state, setState] = useState([]);
  const [stateArray, setStateArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const array = [];
  console.log("context logged from RenderComments: ", context[0]); //problem our context wont update, re-render component on change, have updated context, we had to add context

  const db = getFirestore(app);


    async function getComments() {
      setState("")
      setLoading(true);

      const commentsCollection = collection(db, "commentSection7");
      const commentsSnapshot = await getDocs(commentsCollection);

      const commentsList = commentsSnapshot.docs.map((doc) => doc.data());
      setState(commentsList, setLoading(false));
  
    }

    if (context[0]) {
      getComments();

    } else {
      console.log(context);

   
    }


  useEffect(() => {

    function setStateSideEffect() {
      setStateArray(array);
    }

    setStateSideEffect();
  }, []);

  //context provider, context useContext, component createContext lets you create a context that components can provide or read.
  //makes sense, we have loading for a value, then it appears, entire area around can be changed, a component must have a precises desire for a single utility, that makes it dependable and safe, with forced complexity we are without freedom, we create complexity, through freedom of choice
  if (loading) {
    return <div>...Loading</div>;
  }

  if (state.length > 0) {
    return (
      <div>
        Database Collection Mapped:{" "}
        {state.map((data) => {
          {
            array.push(data);
          }
          if (data.parentId == "original") {
            return (
              <div>
                {
                  <div>
                    {data.comment} plus match:{" "}
                    {LocateTargetMatch(state, data.ID)}
                  </div>
                }{" "}
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return <div>There is nothing to return from database collection</div>;
  }
};
