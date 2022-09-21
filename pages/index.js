import Head from "next/head";
import Image from "next/image";
import ShowTable from "../Components/ShowTable";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className="row me-5 ms-5">
        <div className="col-sm-12">
          <div className="alert alert-info text-center mt-4">
            <h3>ระบบประกาศผลคะแนน คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่</h3>**
            เป็นระบบประกาศคะแนน เพื่อเป็นการปกป้องและป้องกันข้อมูลส่วนบุคคลตาม
            พรบ. คุมครองข้อมูลส่วนบุคคล (PDPA)
          </div>
          <div className="col-md-12">
            <div className="alert alert-warning text-center">
              <strong>ยินดีต้อนรับ: ณัฐพงษ์ เทพพิทักษ์ (640610634) </strong>
              <button className="btn btn-danger">Logout</button>
            </div>
          </div>
          <div className="col-md-12">
            <div className="alert alert-success text-center">
              เลือกรายวิชา :{" "}
              <select className="form-select">
                <option selected>เลือกรายวิชา</option>
                <option value="1">วิชาเลือก 1</option>
              </select>
            </div>
          </div>
          <br />
          <br />
          <ShowTable />
        </div>
      </div>
    </div>
  );
}
