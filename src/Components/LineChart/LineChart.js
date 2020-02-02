import React, {useRef, useEffect} from 'react';
import {select, line} from 'd3'
import * as d3 from 'd3'
import GraphDescription from '../GraphDescription'

const LineChart = (props) => {
  const svgRef = useRef()
  const svg = select(svgRef.current)
      var margin = {top: 10, right: 30, bottom: 30, left: 60},
      width = 760 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
    svg
      .attr('width', width + margin['left'] + margin['right'])
      .attr('height', height + margin['top'] + margin['bottom'])
      .append('g')
      .attr('transform', `translate(${margin['left']},  ${margin['top']})`);

      // Add X axis --> it is a date format
      var x = d3.scaleTime()
        .domain(d3.extent(props.data, function(d) { return d.date; }))
        .range([ 0, width ]);

      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, d3.max(props.data, d => { return d.value; })])
        .range([ height, 0 ]);

      svg
        .append("g")
        .attr('id', 'xAxis')
        .attr('transform', `translate(${margin.left}, ${height + 10})`)
        .call(d3.axisBottom(x));
      svg.append("g")
        .attr('id', 'yAxis')
        .attr('transform', `translate(${margin.left}, 10)`)
        .call(d3.axisLeft(y));

      // Add the line
      svg.append("path")
        .datum(props.data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr('transform', `translate(${margin.left}, 10)`)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y(d.value) })
        )

      return  (
        <div>
          <GraphDescription 
            title="Henry Hub Natural Gas Spot Price"
            description=""/>
          <svg ref={svgRef}></svg>
        </div>
      )
  }

 


  export default LineChart