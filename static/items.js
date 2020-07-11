const items = [
  {
    name: "Roots PBC",
    type: 'Vegan',
    neighborhood: 'Westside',
    address: '2051 Metropolitan Pkwy',
    url: 'https://www.rootspbc.com/menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/eHfN7nd-7fpp93ivon9gYw/o.jpg',
  },
  {
    name: "Desta Ethiopian Kitchen",
    type: 'Ethiopian',
    neighborhood: 'Eastside',
    address: '3086 Briarcliff Rd NE',
    url: 'https://destaethiopiankitchen.com/atlanta-druid-hills-desta-ethiopian-kitchen-food-menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/ubdZEz867Suv6ByrMvo15w/o.jpg',
  },
  {
    name: "Tassili's",
    type: 'Vegan',
    neighborhood: 'Westside',
    address: '404 Atlanta Ave',
    url: 'https://www.tassilisrawreality.com/menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/6nS-It7tWZIEJqxDYkDhxw/o.jpg',
  },
  {
    name: "Le Petit Marche",
    type: 'Breakfast, Sandwiches',
    neighborhood: 'Eastside',
    address: '1984 Hosea L. Williams Dr. Ste. A',
    url: 'https://www.lepetitmarche.net/menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/8IDdU77d-9uDRw1fpdD-WA/o.jpg',
  },
  {
    name: "Ann's Snack Bar",
    type: 'Sandwiches',
    neighborhood: 'Eastside',
    address: '1615 Memorial Dr SE',
    url: 'http://places.singleplatform.com/annie-price-restaurant/menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/1dDw9Z7KMHRLa2J6JluhMQ/o.jpg',
  },
  {
    name: "Wats Crackin",
    type: 'Seafood',
    neighborhood: 'Eastside',
    address: '368 Candler Rd SE',
    url: 'http://places.singleplatform.com/wats-crackin-garlic-crab/menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/DY9Csnw-IZBXePPHKPKKvQ/o.jpg',
  },
  {
    name: "Original Hot Dog Factory",
    type: 'Hot Dogs',
    neighborhood: 'Midtown',
    address: '75 Piedmont Ave NE #150',
    url: 'https://www.theoriginalhotdogfactory.com',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/9Od-fJo7ZC4y6-GNopZ9Vg/o.jpg',
  },
  {
    name: "Atlanta Breakfast Club",
    type: 'Breakfast',
    neighborhood: 'Midtown',
    address: '249 Ivan Allen Jr Blvd NW',
    url: 'https://atlantabreakfastclub.ordersnapp.com/home',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/k8_C_9vM1vfGpWZ2LaElIg/o.jpg',
  },
  {
    name: "Old Lady Gang",
    type: 'Southern',
    neighborhood: 'Downtown',
    address: '177 Peters St SW',
    url: 'http://oldladygang.com/menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/87YvyEei5oAvv0LU5KV1dg/o.jpg',
  },
  {
    name: "Slim & Husky's Pizza Beeria",
    type: 'Pizza',
    neighborhood: 'Downtown',
    address: '581 Metropolitan Pkwy SW',
    url: 'https://slimandhuskys.com/menus',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/DCdBoUPIXnbaz8kwwo8lUA/o.jpg',
  },
  {
    name: "Sublime Doughnuts",
    type: 'Donuts',
    neighborhood: 'Eastside',
    address: '2566 Briarcliff Rd NE, Atlanta',
    url: 'http://www.urbangrindatlanta.com/menu.html',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/yKlpFfR8ECtmx1AgBG5pAw/o.jpg',
  },
  {
    name: "Urban Grind",
    type: 'Coffee & Tea',
    neighborhood: 'Westside',
    address: '962 Marietta St NW',
    url: 'http://www.urbangrindatlanta.com/menu.html',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/inhHH7JuTVswvb8vE46axw/o.jpg',
  },
  {
    name: "Zun Zún",
    type: 'Latin, Sandwiches',
    neighborhood: 'Eastside',
    address: '479 Flat Shoals Ave SE',
    url: 'https://zunzunatl.com/menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/1ydPX4Z9LBRNuEsHcjXf9w/o.jpg',
  },
  {
    name: "Pit Boss BBQ",
    type: 'BBQ',
    neighborhood: 'Southside',
    address: '856 Virginia Ave',
    url: 'http://places.singleplatform.com/pit-boss-bbq/menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/3nD9YqQKHE6SNESGiwKvPg/o.jpg',
  },
  {
    name: "Community Grounds Cafe",
    type: 'Coffee & Tea',
    neighborhood: 'Southside',
    address: '1297 McDonough Blvd SE',
    url: 'https://communitygrounds.com',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/jlIATRA6BI4EfimDQ0hbnw/o.jpg',
  },
  {
    name: "Soul Vegetarian",
    type: 'Vegan',
    neighborhood: 'Southside',
    address: '879 Ralph David Abernathy Blvd SW',
    url: 'https://soulvegsouth.com/menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/2g1POR6zMULOFMItxNMZsA/o.jpg',
  },
  {
    name: "Plant Based Pizzeria",
    type: 'Pizza',
    neighborhood: 'Eastside',
    address: '730 Barnett St NE',
    url: 'https://www.plantbasedpizzeria.net/our-menu',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/nC0OrklN7_E2lW9XzQ4hUA/o.jpg',
  },
  {
    name: "Slutty Vegan",
    type: 'Vegan',
    neighborhood: 'Westside',
    address: '1542 Ralph David Abernathy Blvd SW',
    url: 'http://sluttyveganatl.com/',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/VVDSFPbMapBkzVM8xQu8SQ/o.jpg',
  },
  {
    name: "Supreme Burger",
    type: 'Vegan',
    neighborhood: 'Eastside',
    address: '1827 Columbia Dr Suite A',
    url: 'https://www.grubhub.com/restaurant/supreme-burger-columbia-dr-1827-columbia-dr-decatur/881397',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/02y9nTc5-cPQ7jo-fRBgYA/o.jpg',
  },
  {
    name: "Fresh From Earth",
    type: 'Coffee & Tea',
    neighborhood: 'Southside',
    address: '3727 Main St, College Park',
    url: 'http://freshfromearth.us/',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/3EFL3bAiYVR9RKuNs7Q6XA/o.jpg',
  },
  {
    name: "Spice House",
    type: 'Caribbean, Sea Food',
    neighborhood: 'Southside',
    address: '2247 Cascade Rd SW',
    url: 'http://spicehouseatl.com',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/YZ-eOEUnfKHM_N94RCXQ7Q/o.jpg',
  },
  {
    name: "The Sleepy Potato",
    type: 'Southern, Wings',
    neighborhood: 'Southside',
    address: '757 Cleveland Ave SW',
    url: 'http://spicehouseatl.com',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/HiMBhqb8PW-YN6R9vIfOPA/o.jpg',
  },
  {
    name: "Just Add Honey",
    type: 'Coffee & Tea',
    neighborhood: 'Eastside',
    address: '684 John Wesley Dobbs Ave NE',
    url: 'http://justaddhoney.net',
    link: 'menu/order',
    image: 'https://s3-media0.fl.yelpcdn.com/bphoto/FzWqbbD73ZAQPZ379nM4zA/o.jpg',
  },
]

export { items }