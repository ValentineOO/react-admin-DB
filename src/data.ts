export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "Alice Johnson",
    email: "alice@email.com",
    amount: "7.50",
  },

  {
    id: 2,
    img: "https://images.pexels.com/photos/12903345/pexels-photo-12903345.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "David Smith",
    email: "david@email.com",
    amount: "4.99",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/160414/female-portrait-studio-attractive-160414.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: " Emily Brown",
    email: "emily@email.com",
    amount: "3.75",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/18659930/pexels-photo-18659930/free-photo-of-man-wearing-a-sweater.jpeg?auto=compress&cs=tinysrgb&w=400",
    username: "James Davis",
    email: "james@email.com",
    amount: "5.20",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1624229/pexels-photo-1624229.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "Sarah Wilson",
    email: "sarah@gmail.com",
    amount: "2.99",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/18562277/pexels-photo-18562277/free-photo-of-portrait-of-a-man-with-a-beard-standing-outside-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "michael Clark",
    email: "micheal@gmail.com",
    amount: "6.10",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "Olivia White",
    email: "Oliva@gmail.com",
    amount: "1.95",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/3771794/pexels-photo-3771794.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "Wise",
    firstName: "Logan",
    email: "Wise@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1348197520/photo/young-woman-with-crossed-arms-isolated-studio-portrait.jpg?b=1&s=612x612&w=0&k=20&c=AT2VtkNYzU3_pxRtErCEsc4shAKtzzBdu_36zM2zTzQ=",
    lastName: "Blake",
    firstName: "Stella",
    email: "Blake@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/871566618/photo/portrait-of-a-very-happy-afro-american-man.jpg?b=1&s=612x612&w=0&k=20&c=iqNA9PGrFJFSWBN5Fmep2_h1l8_yY23HHFdvfqYOFJ4=",
    lastName: "Billy",
    firstName: "Francisco",
    email: "Billy@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/1074864778/photo/thoughtful-businessman-against-white-background.jpg?b=1&s=612x612&w=0&k=20&c=0xHtqAwv0V1s7RKNYwqwHprJ16Unp0_HuSBAWOaFdU0=",
    lastName: "Griffith",
    firstName: "Kyle",
    email: "Griffith@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/9903604/pexels-photo-9903604.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "Cummings",
    firstName: "Matthew",
    email: "Cummings@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Foster",
    firstName: "Gregory",
    email: "Foster@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "Alice",
    firstName: "Johnson",
    email: "alice@email.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/12903345/pexels-photo-12903345.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "David",
    firstName: " Smith",
    email: "david@email.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/160414/female-portrait-studio-attractive-160414.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: " Emily",
    firstName: "Brown",
    email: "emily@email.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/18659930/pexels-photo-18659930/free-photo-of-man-wearing-a-sweater.jpeg?auto=compress&cs=tinysrgb&w=400",
    lastName: "James",
    firstName: " Davis",
    email: "james@email.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/1624229/pexels-photo-1624229.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "Sarah",
    firstName: " Wilson",
    email: "sarah@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/18562277/pexels-photo-18562277/free-photo-of-portrait-of-a-man-with-a-beard-standing-outside-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "michael",
    firstName: " Clark",
    email: "micheal@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "Olivia",
    firstName: " White",
    email: "Oliva@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },

 
 
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "sara@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "Eric@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];
