import MenuItem from "./MenuItem";

const menus = [
  {
    label: "場地預約",
    route: "/rentalService",
    id: 0,
  },
  {
    label: "使用須知",
    route: "/instructions",
    id: 1,
  },
];

function Menu() {
  return menus.map((menu) => <MenuItem key={menu.id} menu={menu}></MenuItem>);
}

export default Menu;
