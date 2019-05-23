import React from 'react';

const getSeason = (latitude, month) => {
if(month > 2 && month < 9){
 return latitude > 0 ?  'summer' : 'winter';
}
else {
    return latitude > 0 ? 'winter' : 'summer';
}
}
const SeasonDisplay = (props) => {
  const season  = getSeason(props.latitude, new Date().getMonth());
  const seasonView =  season === 'winter' ? 'Burr, it is chilly' : 'Summer';
  const seasonGif = season === 'winter' ?   <img src="winter.gif"/> : <img src="summer.gif"/>;
    return (<div>
        <h2> {seasonView}</h2>
        {seasonGif}
       </div>
    );
};

export default SeasonDisplay;