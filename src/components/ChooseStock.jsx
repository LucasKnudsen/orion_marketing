import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { stockList } from '../assets/stockList';

const ChooseStock = () => {
  const [stock, setStock] = useState({ name: 'AAPL' });
  const [graph1, setGraph1] = useState([]);
  const [graph2, setGraph2] = useState([]);
  const [metrics, setMetrics] = useState({});

  const handleChange = async (newValue) => {
    if (newValue) {
      let params = {
        Ticker: newValue.name,
      };
      let response = await axios.post(
        'https://nw70g87jni.execute-api.us-east-1.amazonaws.com/prod/retaildemo/getdemodata',
        params
      );
      setMetrics(response.data.Metrics);
      let data1 = dataHandler(response.data['1 Year Graph Data']);
      let data2 = dataHandler(response.data['5 Year Graph Data']);
      setGraph1(data1);
      setGraph2(data2);
    }
  };

  const dataHandler = (object) => {
    let data = [];
    Object.values(object)[0].map((date, i) => {
      data.push({ date: date, gain: Object.values(object)[1][i] });
    });
    return data;
  };

  const handleTickers = () => {
    let data = [];
    stockList.map((ticker) => {
      data.push({ name: ticker });
    });
    return data.slice(1, 100);
  };

  useEffect(() => {
    handleChange(stock);
  }, [stock]);

  return (
    <div style={styles.container}>
      <div>
        <p>Find your favorite stock</p>
        <h1 style={{ textTransform: 'uppercase' }}>
          Value <em style={{ textDecoration: 'underline' }}>Protection</em>
        </h1>
        <Paper style={styles.searchField}>
          <Autocomplete
            fullWidth={true}
            value={stock}
            onChange={(event, newValue) => setStock(newValue)}
            id='tags-outlined'
            options={handleTickers()}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
              <>
                <span />
                <div style={{ color: 'black' }}>{option.name}</div>
              </>
            )}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant='outlined'
                label='Choose A Stock'
                placeholder='Search by ticker...'
              />
            )}
          />
        </Paper>
      </div>
      <div style={styles.graphContainer}>
        <AreaChart
          width={480}
          height={300}
          data={graph1}
          margin={{ top: 10, right: 30 }}>
          <CartesianGrid strokeDasharray='3' />
          <defs>
            <linearGradient id='gain' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='30%' stopColor='#174e70' stopOpacity={0.95} />
              <stop offset='95%' stopColor='#174e70' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='gain'
            stroke='#163b6c'
            fill='url(#gain)'
          />
        </AreaChart>

        <AreaChart
          width={480}
          height={300}
          data={graph2}
          margin={{ top: 10, right: 30 }}>
          <CartesianGrid strokeDasharray='3' />
          <defs>
            <linearGradient id='gain' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='20%' stopColor='#29b380' stopOpacity={0.9} />
              <stop offset='95%' stopColor='#29b380' stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='gain'
            stroke='#163b6c'
            fill='url(#gain)'
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default ChooseStock;

const styles = {
  graphContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  },
  container: {
    marginTop: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchField: {
    marginTop: 25,
  },
};
