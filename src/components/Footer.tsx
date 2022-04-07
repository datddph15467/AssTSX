import React from 'react'
import { NavLink } from 'react-router-dom';
import { faFacebook, faFacebookF, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars, faChevronUp, faClock, faEnvelope, faHeart, faHome, faPhoneAlt, faSearch, faShoppingCart, faSortDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="mt-[50px] bg-[#cecccc] py-3   xl:mx-auto">
    <div className='flex gap-[100px] justify-center pt-6'>
        <div className='' >
        <b className='  text-[18px] ease-in-out '>Tổng đài hỗ trợ</b>
        <p className='  pt-[15px] text-slate-600  ease-in-out text-[15px] '>Liên hệ đặt hàng: <strong>0971729599</strong></p>
        <p className=' pt-[15px] text-slate-600  ease-in-out text-[15px] '>Thắc mắc đơn hàng: <strong>0383343039</strong></p>
        <p className='pt-[15px] text-slate-600  ease-in-out text-[15px] ' >Góp ý, khiếu nại: <strong>Bee-design@gmail.com</strong></p>
        </div>

        <div>
        <b className='text-[18px]'>Về Bee-Design</b>
        <ul className='text-[15px]'>
          <li ><NavLink to ="#" className=' pt-[13px] inline-block text-slate-600 hover:text-[#2a4a84] hover:font-medium  ease-in-out no-underline'>
            <span>Giới thiệu</span>
            </NavLink>
          </li>
          <li><NavLink to ="#" className=' pt-[13px] inline-block text-slate-600 hover:text-[#2a4a84] hover:font-medium   ease-in-out no-underline'>
            <span>Hồ sơ năng lực</span>
            </NavLink>
          </li>
          <li><NavLink to ="#" className='pt-[14px]  inline-block text-slate-600 hover:text-[#2a4a84] hover:font-medium   ease-in-out no-underline'>
            <span>Tuyển dụng</span>
            </NavLink>
          </li>
          <li><NavLink to ="#" className='pt-[16px] mb-4 inline-block text-slate-600 hover:text-[#2a4a84] hover:font-medium  ease-in-out no-underline'>
            <span>Liên Hệ</span>
            </NavLink>
          </li>
        </ul>
        </div>

        <div>
        <b className='text-[18px] '>Chăm sóc khách hàng</b>
        <ul className='text-[15px]'>
          <li ><NavLink to ="#" className=' pt-[13px] inline-block text-slate-600 hover:text-[#2a4a84] hover:font-medium  ease-in-out no-underline'>
            <span>Chính sách bảo hành</span>
            </NavLink>
          </li>
          <li><NavLink to ="#" className='pt-2 inline-block text-slate-600 hover:text-[#2a4a84] hover:font-medium  ease-in-out no-underline'>
            <span>Chính sác hoàn tiền</span>
            </NavLink>
          </li>

        </ul>
        </div>

        <div>
         <b>ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</b>
        <div className="search xl:pt-[11px] xl:relative xl:block lg:relative lg:block hidden ">
          <input type="text" placeholder="Nhập email của bạn " className="border-[1px] rounded-[4px] border-gray-400 indent-[5px] p-[7.5px] pr-10 w-[300px] focus:outline-none  hover:border-[#2a4a84 ] ease-in-out duration-300" />
          <button className="btn btn-primary mb-2 ml-2 ">Đăng Ký</button>
        </div>
        <div className="pt-6">
          <NavLink to="/">
        <FontAwesomeIcon className="ml-2 text-[30px] text-black  " icon={faEnvelope} />
        </NavLink>
        <NavLink to="/">
        <FontAwesomeIcon className="ml-[30px] text-[30px] text-black " icon={faPhoneAlt} />
        </NavLink>
        <NavLink to="/">
        <FontAwesomeIcon className="ml-[30px] text-[30px] text-black " icon={faFacebook}/>
        </NavLink>
        <NavLink to="/">
        <FontAwesomeIcon className="ml-[30px] text-[30px] text-black " icon={faYoutube}/>
        </NavLink>
        <NavLink to="/">
        <FontAwesomeIcon className="ml-[30px] text-[30px] text-black " icon={faInstagram} />
        </NavLink>
       
        </div>

        </div>
      
    </div>


<hr />
  <div className="info text-center pt-3 text-gray-500">
    <p>Copyright by Bee Design © 2022. All rights reserved.</p>
  </div>



</footer>
    </div>
  )
}

export default Footer