import React, { SyntheticEvent, useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Menu, Dropdown, Button, Space } from 'antd';
import './css/dashbroad.min.css';
import logo from './../favicon.png';
type Props = {
}
const MenuPage = (props: Props) => {
  return (
    <div className="menu">
        <div className="container">
            <div className="row">
                <div className="left_menu">
                    <div className="logo">
                        <a href="">
                            <img src={logo} alt="" />
                            BEE <span>Design</span>
                        </a>
                    </div>
                </div>
                <div className="center_menu">
                    <ul>
                        <li><a className='hover_menu' href="/products">Kho giao diện</a></li>
                        <li><a className='hover_menu' href="/service">Dịch vụ</a></li>
                        <li><a className='hover_menu' href="/blog">Blog</a></li>
                        <li><a className='hover_menu' href="/feedback">FeedBack</a></li>
                        <li><a className='btn_menu' href="">Đăng kí thiết kế</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuPage