const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "<AdminDashboard /",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "<CreateAdmin />",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFaculty />",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "<CreateStudent />",
      },
    ],
  },
];

// const routes = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push ({
//       path: item.path,
//       element: item.element
//     })
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

const adminRoutes = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "Navlink",
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        key: child.name,
        label: "Navlink",
        children: item.children.map((child) => ({
          key: child.name,
          label: child.name,
        })),
      });
    });
  }
  return acc;
}, []);

console.log(adminRoutes);
