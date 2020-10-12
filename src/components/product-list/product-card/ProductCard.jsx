// import './ProductCard.css'
// import React from "react";

// export default function ProductCard({ name, price, user, image }) {
//   return <div className=" ">
//     <div className="card my-5" style={{width: "18rem;"}}>
//       <img className="card-img-top" src={image} alt="Card image cap" />

//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//         <p className="card-text">{price}</p>
//         {/* <a href="#" className="btn btn-primary">{user}</a> */}
//       </div>
//     </div>
//   </div>;
// }

import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

export const ProductCard = React.memo(function ProductCard(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return ( 
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={props.image}
      />
      <img src={props.image} />
      <p>{console.log(props)}
      {console.log(props.price)}</p>
      {/* <CardContent>
//         <TextInfoContent
//           classes={textCardContentStyles}
//           overline={price}
//           heading={name}
//           body={description}
//         />
//       </CardContent> */}
    </Card>

  );
});
export default ProductCard
