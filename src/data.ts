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
    createdOn: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1348197520/photo/young-woman-with-crossed-arms-isolated-studio-portrait.jpg?b=1&s=612x612&w=0&k=20&c=AT2VtkNYzU3_pxRtErCEsc4shAKtzzBdu_36zM2zTzQ=",
    lastName: "Blake",
    firstName: "Stella",
    email: "Blake@gmail.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/871566618/photo/portrait-of-a-very-happy-afro-american-man.jpg?b=1&s=612x612&w=0&k=20&c=iqNA9PGrFJFSWBN5Fmep2_h1l8_yY23HHFdvfqYOFJ4=",
    lastName: "Billy",
    firstName: "Francisco",
    email: "Billy@hottmail.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/1074864778/photo/thoughtful-businessman-against-white-background.jpg?b=1&s=612x612&w=0&k=20&c=0xHtqAwv0V1s7RKNYwqwHprJ16Unp0_HuSBAWOaFdU0=",
    lastName: "Griffith",
    firstName: "Kyle",
    email: "Griffith@gmail.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/9903604/pexels-photo-9903604.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "Cummings",
    firstName: "Matthew",
    email: "Cummings@yahoo.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Foster",
    firstName: "Gregory",
    email: "Foster@mail.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "Alice",
    firstName: "Johnson",
    email: "alice@email.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/12903345/pexels-photo-12903345.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "David",
    firstName: " Smith",
    email: "david@email.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/160414/female-portrait-studio-attractive-160414.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: " Emily",
    firstName: "Brown",
    email: "emily@email.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/18659930/pexels-photo-18659930/free-photo-of-man-wearing-a-sweater.jpeg?auto=compress&cs=tinysrgb&w=400",
    lastName: "James",
    firstName: " Davis",
    email: "james@email.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/1624229/pexels-photo-1624229.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "Sarah",
    firstName: " Wilson",
    email: "sarah@gmail.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/18562277/pexels-photo-18562277/free-photo-of-portrait-of-a-man-with-a-beard-standing-outside-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "michael",
    firstName: " Clark",
    email: "micheal@gmail.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
    lastName: "Olivia",
    firstName: " White",
    email: "Oliva@gmail.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
  },

  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "sara@hotmail.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "Eric@gmail.com",
    phone: "123 456 789",
    createdOn: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const singleUser = {
  id: 1,
  title: "Martins Smith",
  img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
  info: {
    username: "Msmithy",
    fullname: "Martins Smith",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Martins Smith purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Martins Smith added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Martins Smith purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "Martins Smith reviewed a product",
      time: "1 month ago",
    },
    {
      text: "Martins Smith added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Martins Smith reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Martins Smith purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
