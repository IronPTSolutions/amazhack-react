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

import Review from '../reviews/Review';
import { Avatar, ListItemText } from '@material-ui/core';

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



  const useStylesList = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));


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

  
  
  

  // setRevScore(old => {
  //   revScore = revScore.score.reduce((a,b) =>  a + b)
  // })
  
  
  // console.log(revScore)
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
    let revScoresRounded = productDetail.reviews.reduce((a,cv) => {
      return (( (a + cv.score) / (productDetail.reviews.length -1)) * 2)
    }, 0)
    
    console.log('revScore', revScoresRounded)
    console.log(productDetail.reviews.length)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h3>Product:</h3>
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
                <hr/>
                <div className='d-flex'>
                  <Avatar alt="Remy Sharp" src={productDetail.user.image} />
                  <span className='p-2'>Seller: {productDetail.user.name}</span>
                  <div className='d-flex flex-column justify-content-center text-center'>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png" />
                    <span>Rate Media: {revScoresRounded.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='col-6'>
            <h3>Reviews:</h3>
            {productDetail.reviews.map(el => {
              return (
                <div>
                  <Review title={el.title} description={el.description} score={el.score} image={el.user.image} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
})

export default ProductDetail

