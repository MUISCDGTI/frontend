import React from "react";
import {
  List,
  Dropdown,
  Menu,
  Rate,
  Slider,
  DatePicker,
  Input,
  Collapse,
  Button,
  Avatar,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./index.css";
import moment from "moment";

var ratings = [
  {
    _id: "jsiodlekfn4",
    value: "4.5",
    description: "Good film",
    film: "1",
    user: "11",
    date: "2020-11-02T23:00:00.000+00:00",
  },
  {
    _id: "erogpiwnm5",
    value: "1.5",
    description: "Bad film",
    film: "15",
    user: "19",
    date: "2021-12-02T23:00:00.000+00:00",
  },
  {
    _id: "srvwmpe1",
    value: "3",
    description: "Nice",
    film: "15",
    user: "11",
    date: "2021-12-16T17:00:00.000+00:00",
  },
];

const menu = (
  <Menu>
    <Menu.Item>
      <span>ascendent</span>
    </Menu.Item>
    <Menu.Item>
      <span>descendent</span>
    </Menu.Item>
  </Menu>
);

const { Search } = Input;
const { RangePicker } = DatePicker;
const { Panel } = Collapse;

const RatingsList = (props) => {
  if (props.page === "film") {
    ratings = ratings.filter((rating) => rating.film === props.id);
  } else if (props.page === "user") {
    ratings = ratings.filter((rating) => rating.user === props.id);
  }
  return (
    <div className="list">
      <h2 className="list-header">Ratings</h2>
      <Collapse>
        <Panel header="Filters">
          <div className="filters">
            <Dropdown overlay={menu}>
              <a className="dropdown">
                Order by <DownOutlined />
              </a>
            </Dropdown>
            <RangePicker />
            <span className="stars-range">
              Stars range
              <Slider range defaultValue={[1, 5]} max={5} min={1} />
            </span>
            <Search placeholder="Contains in description..." allowClear />
          </div>
        </Panel>
      </Collapse>
      <List
        bordered="true"
        itemLayout="horizontal"
        pagination={{
          pageSize: 2,
        }}
        dataSource={ratings}
        renderItem={(rating) => (
          <List.Item
            key={rating._id}
            actions={
              props.page === "user"
                ? [
                    <Button type="primary" danger ghost>
                      delete
                    </Button>,
                  ]
                : null
            }
          >
            {
              <List.Item.Meta
                className="item-meta"
                avatar={
                  <Avatar src="https://joeschmoe.io/api/v1/random" alt="user" />
                }
                title={[
                  props.username,
                  " ",
                  <Rate value={rating.value} disabled />,
                ]}
                description={
                  <span className="description">{rating.description}</span>
                }
              />
            }
            {<p className="date">{moment(rating.date).format("DD/MM/YYYY")}</p>}
          </List.Item>
        )}
      />
    </div>
  );
};

export default RatingsList;
