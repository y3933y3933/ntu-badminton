import MenuItem from "./MenuItem";

const menus = [
  {
    label: "場地租用專區",
    route: "/rentalService",
    subMenus: [
      {
        label: "場地預約",
        route: "/book",
      },
      {
        label: "會員租用查詢",
        route: "/memberBooking",
      },
    ],
  },
  {
    label: "使用須知",
    route: "/rentalService",
    subMenus: [
      {
        label: "運動休閒館",
        route: "/book",
      },
      {
        label: "舊館及戶外場地",
        route: "/memberBooking",
      },
    ],
  },
];

function Menu() {
  return (
    <nav style={{ display: "flex" }}>
      {menus.map((menu) => {
        return <MenuItem key={menu.label} menu={menu}></MenuItem>;
      })}
    </nav>
  );
}

export default Menu;
