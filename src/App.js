import React, {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3'
import csvData from '../data/daily/dailyPrices.csv'
import LineChart from './Components/LineChart/LineChart'
import Header from './Components/Header'
import GlobalStyle from "./styles/global"
import Footer from './Components/Footer';



// const parseNumber = n => {
//   n.price = +n.price
//   return n
// }

const parseNumber = d => {
  return { date : d3.timeParse("%Y-%m-%d")(d.date), value : +d.price }
}

const width = 1200, height = 350

const App = () => {
  const [data, setData] = useState([])
  const svgRef = useRef()

  useEffect(() => {
    d3.csv(csvData, parseNumber).then(setData)
  }, []);
  
  // useEffect(() => {
  //   const svg = select(svgRef.current)
  // },[data])

  return (
    <div>
      <GlobalStyle />
      <Header/>
      <LineChart data={data} width={width} height={height} />
      <Footer/>
    </div>
  );
}

export default App;
