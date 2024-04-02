import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getItemFromLS } from "../../utility/localStorage";
import PropTypes from "prop-types";
import NoBookAdded from "../NoBookAdded/NoBookAdded";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomBarChart = ({ books }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const listedBooksIds = getItemFromLS("read-books");
    const items = books.filter((book) => listedBooksIds.includes(book.bookId));
    setData(items);
  }, [books]);

  return (
    <>
      {data.length ? (
        <BarChart
          width={1280}
          height={510}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip/>
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 10]} />
            ))}
          </Bar>
        </BarChart>
      ) : (
        <NoBookAdded text="No Book added yet!" />
      )}
    </>
  );
};

CustomBarChart.propTypes = {
  books: PropTypes.array.isRequired,
};

export default CustomBarChart;
