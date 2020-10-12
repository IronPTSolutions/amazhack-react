import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { getDetail } from "../../../services/api.service";
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import RingLoader from "react-spinners/RingLoader";

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


// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: aquamarine;
//   margin-top: 200px;
// `;

export const ProductDetail = React.memo(function ProductDetail(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  const [productDetail, setProductDetail] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {

    getDetail(props.match.params.id)
      .then(product => {
        console.log("This is the product")
        console.log(product)
        setProductDetail(product)
      })
      .catch((e) => {
        if (e.response.status === 401) {
          props.logOut()
        } else {
          console.log("errorrrr")
          console.log(e)
          setError(true)
        }
      })
  }, []);

  if (error) {
    return <div>There was an error sending the request</div>;
  }

  if (productDetail.length === 0) {
    return (<div>
      <RingLoader
        // css={override}
        size={150}
        color={"pink"}
      />
    </div>);
  } else {
    return (
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={cx(styles.media, mediaStyles.root)}
          image={productDetail.image}
        />

        <CardContent>
          <TextInfoContent
            classes={textCardContentStyles}
            overline={`${Math.floor(productDetail.price)} €`}
            heading={productDetail.name}
            body={productDetail.description}
          />
        </CardContent>
      </Card>

    );
  }
})

export default ProductDetail

