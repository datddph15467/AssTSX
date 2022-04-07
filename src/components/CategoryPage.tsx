import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { listCate } from '../api/Category';
import { ICategory } from '../type/Category';

type Props = {}

const CategoryPage = (props: Props) => {
    const [Categorys, setCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listCate();
      setCategory(data);
    };
    getCategorys();
  }, []);
  return (
    <div className='Category'>
        <div>
            <div className='Category_text_header'>
                <h1>
                Dù bạn đang kinh doanh bất cứ ngành hàng nào, Bee Design đều hỗ trợ bạn xây dựng gian hàng kinh doanh, quản lý tập trung và marketing online một cách hiệu quả nhất.
                </h1>
            </div>
            <div className='row'>
                {Categorys.map((item, index) => {
                    <div>
                        <Link className="text-decoration-none" to={`/producst/category/${item._id}`}>
                            <div>${item.image}</div>
                            <div>${item.name}</div>
                        </Link>
                    </div>
                })}    
            </div>
        </div>
    </div>
  )
}

export default CategoryPage