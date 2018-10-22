
// var margin_s = {top: 20, right: 20, bottom: 30, left: 40},
//     s_w = 620 - margin_s.left - margin_s.right,
//     s_h = 300 - margin_s.top - margin_s.bottom;

// var s_x = d3.scaleBand()
//     .rangeRound([0, s_w], .1);

// var s_y = d3.scaleLinear()
//     .rangeRound([s_h, 0]);

// var s_color = d3.scaleOrdinal()
//     .range(["#fcd6d6", "#ff9e9e", "#e26c6c","#db4c4c","#d32828"]);

// var stack_svg = d3.select("#stack")
//     .attr("width", s_w + margin_s.left + margin_s.right)
//     .attr("height", s_h + margin_s.top + margin_s.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin_s.left + "," + margin_s.top + ")");

// var active_link = "0"; //to control legend selections and hover
// var legendClicked; //to control legend selections
// var legendClassArray = []; //store legend classes to select bars in plotSingle()
// var y_orig; //to store original y-posn

// d3.csv("data/bus-review-month/stars-_BELd09Ppp0aMUTW-ItJfw.csv", function(error, data) {
//   if (error) throw error;

//   s_color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

//   data.forEach(function(d) {
//     var mydate = d.date; //add to stock code
//     var y0 = 0;
//     //d.ages = s_color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
//     d.ages = s_color.domain().map(function(name) { return {mydate:mydate, name: name, y0: y0, y1: y0 += +d[name]}; });
//     d.total = d.ages[d.ages.length - 1].y1;

//   });

//   data.sort(function(a, b) { return d3.ascending(a.date, b.date); });

//   s_x.domain(data.map(function(d) { return d.date; }));
//   s_y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();

//   stack_svg.append("g")
//       .attr("class", "x axis_s")
//       .attr("transform", "translate(0," + s_h + ")")
//       .call(d3.axisBottom(s_x))
//       .selectAll("text")
//        .attr("transform", "rotate(-90)")
//       .style("font-family", "'latolight")
//       .style("text-anchor", "end")
//       .style("fill", "#fff")
//       ;

//   stack_svg.append("g")
//       .attr("class", "y axis_s")
//       .call(d3.axisLeft(s_y))
//       .selectAll("text")
//       .style("font-family", "'latolight")
//       .style("fill", "#fff");

//   stack_svg.append("g")
//       .attr("class", "y axis_s")
//       .append("text")
//       .attr("x", 2)
//       .attr("y", s_y(s_y.ticks()) - 6)
//       .attr("dy", "-0.32em")
//       .style("text-anchor", "start")
//       .style("fill", "#fff")
//       .style("font-size", "12px")
//       .text("Total of New Star Ratings")

//   var date = stack_svg.selectAll(".date")
//       .data(data)
//     .enter().append("g")
//       .attr("class", "g")
//       .attr("transform", function(d) { return "translate(" + "0" + ",0)"; });
//       //.attr("transform", function(d) { return "translate(" + x(d.date) + ",0)"; })

//   date.selectAll("rect")
//       .data(function(d) {
//         return d.ages;
//       })
//     .enter().append("rect")
//       .attr("width", s_x.bandwidth())
//       .attr("y", function(d) { return s_y(d.y1); })
//       .attr("x",function(d) { //add to stock code
//           return s_x(d.mydate)
//         })
//       .attr("height", function(d) { return s_y(d.y0) - s_y(d.y1); })
//       .attr("class", function(d) {
//         classLabel = d.name.replace(/\s/g, ''); //remove spaces
//         return "class" + classLabel;
//       })
//       .attr("transition", "0.5s")
//       .style("fill", function(d) { return s_color(d.name); });

//   date.selectAll("rect")
//        .on("mouseover", function(d){

//           var delta = d.y1 - d.y0;
//           var xPos = parseFloat(d3.select(this).attr("x"));
//           var yPos = parseFloat(d3.select(this).attr("y"));
//           var s_h = parseFloat(d3.select(this).attr("height"))

//           d3.select(this).attr("opacity","0.8");

//           stack_svg.append("text")
//           .attr("x",xPos)
//           .attr("y",yPos +s_h/2)
//           .attr("class","tooltip_stack")
//           .text(d.name +": "+ delta);

//        })
//        .on("mouseout",function(){
//           stack_svg.select(".tooltip_stack").remove();
//           d3.select(this).attr("opacity","1");

//         })


//   var legend = stack_svg.selectAll(".legend")
//       .data(s_color.domain().slice().reverse())
//     .enter().append("g")
//       //.attr("class", "legend")
//       .attr("class", function (d) {
//         legendClassArray.push(d.replace(/\s/g, '')); //remove spaces
//         return "legend";
//       })
//       .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

//   //reverse order to match order in which bars are stacked
//   legendClassArray = legendClassArray.reverse();

//   legend.append("rect")
//       .attr("x", s_w - 18)
//       .attr("width", 18)
//       .attr("height", 18)
//       .style("fill", s_color)
//       .attr("id", function (d, i) {
//         return "id" + d.replace(/\s/g, '');
//       })
//       .on("mouseover",function(){

//         if (active_link === "0") d3.select(this).style("cursor", "pointer");
//         else {
//           if (active_link.split("class").pop() === this.id.split("id").pop()) {
//             d3.select(this).style("cursor", "pointer");
//           } else d3.select(this).style("cursor", "auto");
//         }
//       })
//       .on("click",function(d){

//         if (active_link === "0") { //nothing selected, turn on this selection
//           d3.select(this)
//             .style("stroke", "#fff")
//             .style("stroke-width", 2);

//             active_link = this.id.split("id").pop();
//             plotSingle(this);

//             //gray out the others
//             for (i = 0; i < legendClassArray.length; i++) {
//               if (legendClassArray[i] != active_link) {
//                 d3.select("#id" + legendClassArray[i])
//                   .style("opacity", 0.5);
//               }
//             }

//         } else { //deactivate
//           if (active_link === this.id.split("id").pop()) {//active square selected; turn it OFF
//             d3.select(this)
//               .style("stroke", "none");

//             active_link = "0"; //reset

//             //restore remaining boxes to normal opacity
//             for (i = 0; i < legendClassArray.length; i++) {
//                 d3.select("#id" + legendClassArray[i])
//                   .style("opacity", 1);
//             }

//             //restore plot to original
//             restorePlot(d);

//           }

//         } //end active_link check


//       });

//   legend.append("text")
//       .attr("x", s_w - 24)
//       .attr("y", 9)
//       .attr("dy", ".35em")
//       .style("text-anchor", "end")
//       .text(function(d) { return d; });

//   function restorePlot(d) {

//     date.selectAll("rect").each(function (d, i) {
//       //restore shifted bars to original posn
//       d3.select(d[idx])
//         .transition()
//         .duration(1000)
//         .attr("y", y_orig[i]);
//     })

//     //restore opacity of erased bars
//     for (i = 0; i < legendClassArray.length; i++) {
//       if (legendClassArray[i] != class_keep) {
//         d3.selectAll(".class" + legendClassArray[i])
//           .transition()
//           .duration(1000)
//           .delay(750)
//           .style("opacity", 1);
//       }
//     }

//   }

//   function plotSingle(d) {

//     class_keep = d.id.split("id").pop();
//     idx = legendClassArray.indexOf(class_keep);

//     //erase all but selected bars by setting opacity to 0
//     for (i = 0; i < legendClassArray.length; i++) {
//       if (legendClassArray[i] != class_keep) {
//         d3.selectAll(".class" + legendClassArray[i])
//           .transition()
//           .duration(1000)
//           .style("opacity", 0);
//       }
//     }

//     //lower the bars to start on x-axis
//     y_orig = [];
//     date.selectAll("rect").each(function (d, i) {

//       //get height and y posn of base bar and selected bar
//       h_keep = d3.select(d[idx]).attr("height");
//       y_keep = d3.select(d[idx]).attr("y");
//       //store y_base in array to restore plot
//       y_orig.push(y_keep);

//       h_base = d3.select(d[0]).attr("height");
//       y_base = d3.select(d[0]).attr("y");

//       h_shift = h_keep - h_base;
//       y_new = y_base - h_shift;

//       //reposition selected bars
//       d3.select(d[idx])
//         .transition()
//         .ease("bounce")
//         .duration(1000)
//         .delay(750)
//         .attr("y", y_new);

//     })

//   }

// });
