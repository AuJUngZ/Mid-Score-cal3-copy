import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ShowTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    callGet();
  }, []);

  const callGet = async () => {
    const resp = await axios.get("http://localhost/api/score");
    setData(resp.data.score);
  };
  return (
    <div className="col-sm-12">
      <h3>
        <span className="text-danger">CALCULUS FOR ENGINEERING 3 (206261)</span>{" "}
        Section: 003000
      </h3>
      <strong>อาจารย์ผู้สอนหลัก: : นราวดี ภูดลสิทธิพัฒน์ </strong>
      <table className="table table-bordered table-striped table-hover table-dark">
        <tbody>
          {/* head of table */}
          <tr className="text-center">
            <td width={"5%"}>ลำดับ</td>
            <td width={"20%"}>ชื่อ</td>
            <td width={"10%"}>คะแนนเต็ม</td>
            <td width={"10%"}>คะแนนที่ได้</td>
            <td width={"10%"}>คะแนนต่ำสุดของ Section (Min)</td>
            <td width={"10%"}>คะแนนสูงสุดของ Section (Max)</td>
            <td width={"10%"}>คะแนนเฉลี่ยของ Section (Mean)</td>
            <td width={"10%"}>คะแนนเฉลี่ยของรายวิชา (Mean)ชื่อ</td>
            <td width={"15%"}>วันที่ประกาศ</td>
          </tr>
          {/* body of table */}
          {data.map((item, index) => (
            <tr className="text-center" key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.full_score}</td>
              <td>{item.got_score}</td>
              <td>0.50</td>
              <td>32.00</td>
              <td> </td>
              <td> </td>
              <td width="10%">20 กันยายน 2565 </td>
            </tr>
          ))}
          {/* <tr className="text-center">
            <td>1</td>
            <td align="left">สอบกลางภาค</td>
            <td>35</td>
            <td>30.63</td>
            <td>0.50</td>
            <td>32.00</td>
            <td> </td>
            <td> </td>
            <td width="10%">20 กันยายน 2565 </td>
          </tr> */}
          {/* footer of table */}
          <tr className="text-start">
            <td colspan="9">
              <strong>หมายเหตุจากอาจารย์ผู้สอน (206261)</strong>
              <br />
              สามารถดูข้อสอบได้ โดยการส่งข้อความหาอาจารย์ narawadee
              phudolsitthiphat ทาง MS Team เพื่อนัดหมายวันเวลาค่ะ
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
