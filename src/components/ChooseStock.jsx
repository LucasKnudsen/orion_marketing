import React, { useState, useEffect } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { stockList } from '../assets/stockList'

const graphData2 = ['2017', '2018', '2019', '2020', '2021']
const graphData1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

const ChooseStock = () => {
  const [stock, setStock] = useState({})
  const [graph1, setGraph1] = useState([])
  const [graph2, setGraph2] = useState([])

  const createYear = () => {
    let data = []
    let index = 100
    for (let i = 0; i < 12; i++) {
      let x = Math.random() * 5 * i
      data.push({ date: graphData1[i], gain: Math.round(index + x)  })
      index += x
    }
    setGraph1(data)
  }
  const create5Year = () => {
    let data = []
    let index = 100
    for (let i = 0; i < 5; i++) {
      let x = (Math.random() * 50 * i)
      data.push({ date: graphData2[i], gain: Math.round(index + x)})
      index += x
    }
    setGraph2(data)
  }

  useEffect(() => {
    createYear()
    create5Year()
  }, [stock])

  return (
    <div style={styles.container}>
      <div >
        <p>Find your favorite stock</p>
        <h1 style={{ textTransform: 'uppercase' }}>Value <em style={{ textDecoration: 'underline' }}>Protection</em></h1>
        <Paper style={styles.searchField}>
          <Autocomplete
            fullWidth={true}
            onChange={(event, newValue) => setStock(newValue)}
            id="tags-outlined"
            options={stockList}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
              <>
                <span />
                <div style={{ color: 'black' }}>
                  {option.name}
                </div>
              </>
            )}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Tesla"
                placeholder="GameStop..."
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
          margin={{ top: 10, right: 30 }}
        >
          <CartesianGrid strokeDasharray="3" />
          <defs>
            <linearGradient id="gain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#174e70" stopOpacity={0.95} />
              <stop offset="95%" stopColor="#174e70" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="gain" stroke="#163b6c" fill="url(#gain)" />
        </AreaChart>

        <AreaChart
          width={480}
          height={300}
          data={graph2}
          margin={{ top: 10, right: 30 }}
        >
          <CartesianGrid strokeDasharray="3" />
          <defs>
            <linearGradient id="gain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor="#29b380" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#29b380" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="gain" stroke="#163b6c" fill="url(#gain)" />
        </AreaChart>
      </div>
    </div>
  )
}

export default ChooseStock

const styles = {
  graphContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40
  },
  container: {
    marginTop: 50,
  },
  searchField: {
    width: '30%',
    marginTop: 25
  }

}