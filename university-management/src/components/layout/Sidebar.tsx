import { Layout, Menu } from "antd";
import { SidebarItemsGenerator } from "../../utils/SidebarItemsGenerator";
import { facultyPaths } from "../../routes/faculty.routes";
import { adminPaths } from "../../routes/admin.routes";
const { Sider } = Layout;

const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student"
}


const Sidebar = () => {
    const role = 'admin';
    let sidebarItems;

    switch (role) {
        case userRole.ADMIN :
             sidebarItems = SidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY : 
            sidebarItems = SidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break
        default:
            break;
    }

  return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>LOGO</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
  )
}

export default Sidebar