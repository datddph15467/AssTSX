import React, { SyntheticEvent, useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './css/header.min.css';
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Menu, Dropdown, Button, Space } from 'antd';
import './css/dropdown.css'
import { useName } from "../utils/localStorage";
type Props = {
}
const Header = (props: Props) => {
  const handlerRemove = () => {
    localStorage.removeItem("user");
  };
  return (
    <div className="top_header_home">
      <div className="container">
        <div className="row">
          <div className="right_top_header col-lg-7">
            <ul className="right_top_header_ul">
              <li><a href="#">Tra cứu đơn hàng</a></li>
              <li><a href="#">Hệ thống cửa hàng</a></li>
              <li><a href="#">Hotline: 0971729599</a></li>
            </ul>
          </div>
          <div className="left_top_header col-lg-5">
            <div className='left_top_header_icon'>
            {localStorage.getItem("user") ? (
               <div className="sec-center"> 
               <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
               <label className="for-dropdown" htmlFor="dropdown"><i className="bi bi-person-fill"></i><i className="uil uil-arrow-down"></i></label>
               <div className="section-dropdown"> 
               <a href="/profile">Xin chào ! </a>
               { 
                JSON.parse(localStorage.getItem('user') as string).role == "1"
               ? (
                <a href="/admin">Trang quản trị</a>
               ):(
                <div>

                </div>
               )}
               <a href="" onClick={handlerRemove}>Đăng xuất</a>
               </div>
               </div>
              ) : (
                <div>
                  <div className="sec-center"> 
                <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
                <label className="for-dropdown" htmlFor="dropdown"><i className="bi bi-person-fill"></i><i className="uil uil-arrow-down"></i></label>
                <div className="section-dropdown"> 
                <a href="/login">Đăng nhập<i className="uil uil-arrow-right"></i></a>
                <a href="/register">Đăng kí<i className="uil uil-arrow-right"></i></a>
                </div>
                </div>
                </div>
                ) }

            </div>
            <div className='left_top_header_icon'>
              <a href="favourite">
                    <i className="bi bi-heart"></i>
                
              </a>
            </div>
            <div className='left_top_header_icon'>
              <a href="cart">
                    <i className="bi bi-basket2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header