const puntos = [[30, 130], [150, 90], [270, 110], [400, 25]];
// d es una pareja [x, y]; d[0] es x y d[1] es y.
const area = d3.area().x(function(d) {
  return d[0];
}).y0(150).y1(function(d) {
  return d[1];
});
d3.select("#forma").attr("d", area(puntos));
