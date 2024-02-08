import { useState } from "react";

const experimentArray = [
  {
    name: "organism",
    cl: 0,
    parentId: "original",
    date: Date.now(), //for ranking, becomes single number from inception
    state: "ID",
    country: "hashCode",

    ID: 43,
  },

  {
    name: "organism",
    cl: 1,
    parentId: "43",
    date: Date.now(), //for ranking, becomes single number from inception
    state: "ID",
    country: "hashCode",

    ID: 44,
  },

  {
    name: "organism",
    cl: 2,
    parentId: "44",
    date: Date.now(), //for ranking, becomes single number from inception
    state: "ID",
    country: "hashCode",

    ID: 45,
  },

  //max level so now all that attach to 44 are same cl level, there are no further depths after cl 2, just the cl 1 branch, same branch for lvl 2

  {
    name: "organism",
    cl: 2,
    parentId: "44",
    date: Date.now(), //for ranking, becomes single number from inception
    state: "ID",
    country: "hashCode",

    ID: 46,
  },


  {
    name: "organism",
    cl: 1,
    parentId: "43",
    date: Date.now(), //for ranking, becomes single number from inception
    state: "ID",
    country: "hashCode",

    ID: 40,
  },
];

const currentCommentLevel = 0;
const exampleCurrentId = 43; //mappnig id 43 element should render all things connected to 43, and all things conneected to the elements that connect with id 43
const FindMatch = (
  idValue = exampleCurrentId,
  cl = 0,
  arrayValue = experimentArray
) => {
  const returnMatches = experimentArray.filter(
    (data) => data.parentId == idValue
  );

  console.log("returnMathces", returnMatches);


  return experimentArray.map((data) => {
    const { ID, parentId, organismUser, cl } = data; //if this stop for every elment iteration until there are no matches then it ends naturally and springs up again on new iteration with array
    if(idValue==data.parentId) {return <div>current id: {idValue}, parentId that matches: {data.parentId} {FindMatch(ID, experimentArray)} id: {ID}</div>}

  })
};


export const RenderAllLevels = (param1="43", param2=experimentArray) => {
  const [currentId, setCurrentId] = useState(param1);
  //render an array where all objects are matched with their object match
  FindMatch();

  return experimentArray.map((data) => {
    const { ID, parentId, organismUser, cl } = data;


    if(cl==0) {

      return <div> {ID} {FindMatch(ID, experimentArray)}  </div>;
    }

  });
};





//thoughts single line for every render::
//return <div> currentID: {data.ID},    {currentArray.map((dataValue)=>dataValue.parentId==data.ID ?  " current ////
//matches, parentId + id " + dataValue.parentId + " id of match: " + dataValue.ID : "")}</div>

