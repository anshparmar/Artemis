import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"100%",background:"#F2F1F9" , padding:"0.5rem",float:"left"};
  const Barst1 = { float:"left  ",width:"80%"};
  const Barst2 = { float:"left "};
  return (
    <div style={Barst1}>
    <div><input
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search"}
     //onChange={(e) => setKeyword(e.target.value)}
    /></div>
    </div>

  );
}

export default SearchBar
