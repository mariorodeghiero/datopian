import React, {useState, useEffect} from 'react';
import * as d3 from 'd3'
import csvData from '../data/dailyPrices.csv'
import LineChart from './Components/LineChart/LineChart'
import Header from './Components/Header'
import GlobalStyle from "./styles/global"
import Footer from './Components/Footer';
import { Container } from './styles/styled'

const parseNumber = d => {
  return { date : d3.timeParse("%Y-%m-%d")(d.date), value : +d.price }
}

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    d3.csv(csvData, parseNumber).then(setData)
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Container>
        <LineChart data={data} />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
