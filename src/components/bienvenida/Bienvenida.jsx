import React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import bienvenida from '/src/assets/dashboard/Grupo1255.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFalse,
  changeTrue,
  selectLoading,
} from '../../features/loading/loadingSlice';
import Loading from '../../components/loading/Loading';
import TitleModul from './TitleModul';

function Bienvenida(props) {
  const { navigateLink, title, text, textCard } = props;
  const props2 = { navigateLink, title, text };
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [err, setErr] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);

  const getInfoUser = async () => {
    try {
      setTimeout(() => {
        dispatch(changeTrue());
        setTimeout(() => {
          dispatch(changeFalse());
        }, 2000);
      }, 100);
    } catch (error) {
      setErr(true);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    if (err) {
      throw new Error(errorMessage);
    } else {
      getInfoUser();
    }
  }, [err]);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <Grid item md={12}>
            <TitleModul {...props2} />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'row',
                height: 'auto',
                background: '#6AA0DB',
              }}
            >
              <Grid item m={'17.53px 10px 17.53px 22.5px'}>
                <img src={bienvenida} alt="Imagen de bienvenida dashboard" />
              </Grid>
              <Grid item sx={{ color: '#FFFFFF' }}>
                <Typography
                  component="p"
                  variant="h1"
                  mt={'33px'}
                  mb="7px"
                  fontSize={'20px'}
                >
                  {textCard.text1}
                </Typography>
                <Typography component="p" variant="subtitle1" fontSize={'17px'}>
                  {textCard.text2}
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle1"
                  textAlign={'justify'}
                  mr={'56px'}
                  mt={'6px'}
                  mb={'18px'}
                  fontSize={'13px'}
                >
                  {textCard.text3}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </>
      )}
    </>
  );
}

export default Bienvenida;
