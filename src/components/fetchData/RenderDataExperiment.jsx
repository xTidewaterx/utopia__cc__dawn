import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../strictlyData/AppConfig";
import { Reply } from "../addData/Reply";
import { onSnapshot } from "firebase/firestore";
import { Like } from "../addData/Like";
import { Comment } from "../addData/Comment";
import { Avatar } from "../strictlyData/Avatar";




let collectionArray = [];
let arrayComplete = false;

export const RenderAllLevels = () => {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(true);

  console.log("panda", state);

  useEffect(() => {
    asyncFunction();
    console.log("returnValue", state);

    const unsubscribe = onSnapshot(
      collection(db, "commentSection7"),
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        // ...
      }
    );

    console.log(unsubscribe);
  }, []);

  async function asyncFunction() {
    const querySnapshot = await getDocs(collection(db, "commentSection7"));

    console.log(querySnapshot);

    //we must fire if current database number doesnt match with current database array length

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      console.log(doc.data().ID == 14);
      console.log(collectionArray[0]?.ID);

      console.log("pear", doc.data().ID != state[0]?.ID);

      //if statement to check if we have returned all values from collection, if match, then we are round
      if (doc.data().ID == collectionArray[0]?.ID) {
        console.log("now");
        console.log("now", collectionArray);
        arrayComplete = true;
      }

      //if array is not complete then we continue, array is only complete if count() matches that of database
      if (!arrayComplete) {
   
      collectionArray = [...collectionArray, doc.data()];


      }
      setLoading(false); // this could change depending on return value
      //this happens, this before it sends it over, we have entire call

      //Async functions always return a promise. If the return value
      //of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
      //promise async we now have collectionArray that becoms our state, collection array entirety and then the newest value until we have same, entire new On-Chain

      if (!Array.isArray(state)) {
        console.log("state becomes array");
        setState("");

     
  //console.log(collectionArray.sort((a,b) => (a.date + b.date)))
  //collectionArray.sort((a,b) => (b.date-a.date))
        setState(collectionArray);

       //console.log(collectionArray.sort((a,b) => (b.date-a.date)), "mars")

        console.log("flame", state);
      } else {
        console.log("waiting to become array");
      }
    });
  }



  //we have a function that repeats endlessly to find a match of current ID until entire array is searched AND value exceeds cl 2
  if (state) {
    const sortedArray = state?.sort((a, b) => b.date-a.date)

    const renderMatches = (currentId, currentCl) => {
      return sortedArray.map((data) => {
        const { ID, cl, comment, name, organismPublicName, uid, parentId } =
          data;
 
        if (data.parentId == currentId && currentCl < 3) {
          const currentLevelStyling = data.cl * 8;
          const {cl, ID, parentId, comment, likeCount} = data;
          return (
            <div className="organismBattlefield__Container">
            <Avatar/>
            <li className ="organismBattlefield__ContainerItem" style={{ marginLeft: currentLevelStyling + "px" }}>
              id: {ID} parentId: {parentId} cl: {cl} comment: {comment}
              <div className="organismBattlefield__likeReplyContainer">
              <Like className="organismBattlefield__Like"
                likeCount={likeCount}
                idValue={ID}
                stateValue={{ state, setState }}
              />   
               <Reply organismObject={data} stateValue={{ state, setState }} /></div>
              {renderMatches(data.ID, data.cl)}
            </li></div>
          );
        } else {
        }
      });
    };

    //we want to render original object first, then all cl1 object that are linked to this
    //can we try array changing, properties are the same
    //we need starting point, we need then to have all unoriginals renderd the same

    renderMatches();


    //this returns everything related to organismDebateBattlefield
    return <div className="organismBattlefield">
    <Comment organismObject={{state, setState}}/>{ //for each we add to one object if param is single function
    
    
    sortedArray.map((data) => {

      const {cl, ID, comment} = data;
      if (data.cl == 0) {
        return (<div className="organismBattlefield__Container">
        <Avatar/>
          <li className="organismBattlefield__ContainerItem">

            {ID} cl: {cl} hh{" "} organismComment: {comment}
         <div className="organismBattlefield__likeReplyContainer">
            <Like 
       
              likeCount={data.likeCount}
              idValue={data.ID}
              stateValue={{ state, setState }}
            />   <Reply organismObject={data} stateValue={{ state, setState }} /> </div>
            {renderMatches(data.ID, data.cl)}
          </li></div>
        );
      }
    }) }


</div>   }

  if (loading) {
    return <div>...Loading</div>;
  }
};

//What is factorializing a number all about?

//When you factorialize a number, you are multiplying that number by each consecutive number minus one.
