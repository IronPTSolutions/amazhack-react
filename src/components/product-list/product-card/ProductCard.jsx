import React, { useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Link } from 'react-router-dom';

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
  const [prodId, setProdId] = useState('')
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return ( 
    <Link to={`/detail/${props.id}`} underline='none' props={props.id}>
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={props.image}
      />
      
      <CardContent>
         <TextInfoContent
           classes={textCardContentStyles}
           overline={`${Math.floor(props.price) } €`}
           heading={props.name}
           body={props.description}
         />
       </CardContent>
    </Card>
    </Link>

  );
});
export default ProductCard
