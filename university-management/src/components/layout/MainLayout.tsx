import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content, Footer } = Layout;
const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header>
          <Button onClick={handleLogout} type="primary" danger>
            Logout
          </Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          &copy; {new Date().getFullYear()} University Management
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
