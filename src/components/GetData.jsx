import React, { Component } from "react";
import Axios from "axios";
import DisplayData from "./Displaydata";
import CsvDownloader from 'react-csv-downloader'

class Getdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      perpage: 5,
      currentPage: 1,
      isLoading: true
    };
  }

  componentDidMount() {
    Axios.get("https://programming-quotes-api.herokuapp.com/quotes")
      .then((res) => {
        this.setState({
          data: res.data.splice(1,50),
          isLoading: false
        });
      })
      .catch((error) => console.log("error"));
  }
  handleClick = (currentPageNumber) => {
    this.setState({
      currentPage: currentPageNumber
    });
  };

  filterLogic = (data, index) => {
    const { perpage, currentPage } = this.state;
    let start = currentPage * perpage - perpage;
    let end = start + perpage;
    return index >= start && index < end;
  };

  render() {
    // console.log(this.state.data);
    const { isLoading, perpage, data } = this.state;
    let btns = Math.ceil(data.length / perpage);

    let btnArr = new Array(btns).fill(0);
    if (isLoading) {
      return "Wait it is Loading";
    }
    const columns = [{
        id: 'id',
        displayName: 'id'
      }, {
        id: 'end',
        displayName: 'en'
      },{
        id: 'author',
        displayName: 'author'
      }];

    console.log(data)
    return (
      <>
      {data &&
          data?.filter(this.filterLogic).map((item) => {
            return (
              <div style={{marginLeft:"39%"}}>
                <DisplayData item={item} />
              </div>
            );
          })}
        {btnArr.map((item, index) => (
          <button id={index} onClick={() => this.handleClick(index + 1)}>
            {index + 1}
          </button>
        ))}
        <br/>
        <br/>
        <br/> 
        <CsvDownloader
        filename="deep-sync-aman-anku"
        extension=".csv"
        separator=";"
        wrapColumnChar="'"
        columns={columns}
        datas={data}
        text="Export to CSV" />
      </>
    );
  }
}

export default Getdata;
