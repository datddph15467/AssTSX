import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IProduct } from './type/Product';
import { add, list, remove, update } from './api/Product';
import { addcate, removeCate, listCate, updatecate } from './api/Category';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import Add_pro from './pages/admin/product/Add_pro';
import ProductManager from './pages/admin/product/ProductManager';
import Category_add from './pages/admin/category/Category_add';
import { ICategory } from './type/Category';
import Category_list from './pages/admin/category/Category_list';
import Edit_pro from './pages/admin/product/Edit_pro';
import Signup from './pages/layouts/Signup';
import Signin from './pages/layouts/Sigin';
import Category_edit from './pages/admin/category/Category_edit';
import PrivateRouter from './components/PrivateRouter';
import { notification, Slider } from 'antd';
import DetailProduct from './pages/DetailProduct';
import DetailCate from './pages/DetailCate';
import { IPost } from './type/Post';
import { addPost, listpost } from './api/Post';


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categorys, setCategorys] = useState<ICategory[]>([]);
  const [posts,setPosts] = useState<IPost[]>([]);
  // --------------products-------------------
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  // add
  const onHandlerAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data])
  }
  // update
  const onHandlerUpdate = async (product: IProduct) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data.id ? data : item));
  }
  const removeItem = (id: number) => {
    const openNotification = () => {
      notification.open({
        message: 'X??a Th??nh c??ng',
      });
    };
    // call api
    openNotification()
    remove(id)
    // reRender
    setProducts(products.filter(item => item._id !== id))
  }
  // ---------------Category-------------------
  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listCate();
      setCategorys(data);
    }
    getCategorys();
  }, [])
  // delete-----------------------------------
  const removecate = (id: number) => {
    removeCate(id)
    setCategorys(categorys.filter(item => item._id !== id))
  }
  // add------------------------------------------
  const onHandlerCate = async (category: ICategory) => {
    const { data } = await addcate(category);
    setCategorys([...categorys, data])
  }
  const onHandeleUpdateCate = async (category: ICategory) => {
    const { data } = await updatecate(category);
    setCategorys(categorys.map(item => item._id == data.id ? data : item));
  }
 

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path='producst/detail/:id' element={<DetailProduct />} />
            <Route path='categorys/:slug' element={<DetailCate />} />
            <Route path='product' element={<h1>Hien thi san pham 123</h1>} />
            <Route path='about' element={<h1>About</h1>} />
          </Route>


          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductManager products={products} onRemove={removeItem} />} />
              <Route path='add' element={<Add_pro onAdd={onHandlerAdd} />} />
              <Route path=":id/edit" element={<Edit_pro onUpdate={onHandlerUpdate} />} />
            </Route>
            <Route path='categorys'>
              <Route index element={<Category_list categorys={categorys} onRemoveCate={removecate} />} />
              <Route path='add' element={<Category_add name='duy' onAddcate={onHandlerCate} />} />
              <Route path=':id/edit' element={<Category_edit onUpdateCate={onHandeleUpdateCate} />} />
            </Route>
          </Route>
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
