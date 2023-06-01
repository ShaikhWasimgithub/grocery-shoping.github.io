/**
 * Array of card data for the Cards component.
 * @typedef {Object} CardData
 * @property {number} id - The unique identifier of the card.
 * @property {string} rname - The name of the card.
 * @property {string} imgdata - The URL of the card image.
 * @property {string} [delimg] - The URL of the delivery image (optional).
 * @property {string} [somedata] - Additional data related to the card (optional).
 * @property {number} price - The price of the card.
 * @property {number} qnty - The quantity of the card.
 */

/**
 * Array of card data for the Cards component.
 * @type {CardData[]}
 */

const Cardsdata = [
  {
    id: 1,
    rname: "Milk",
    imgdata:
      "https://payfresh.in/wp-content/uploads/2020/12/Heritage-Toned-Milk.jpg",
    delimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1175 + order placed from here recently",
    price: 350,
    qnty: 0,
  },
  {
    id: 2,
    rname: "Butter",
    imgdata:
      "https://www.bigbasket.com/media/uploads/p/l/225761_2-heritage-cooking-butter.jpg",
    price: 25,
    qnty: 0,
  },
  {
    id: 3,
    rname: "Cheese",
    imgdata:
      "https://www.justgotochef.com/img/1520230670-Amul%20-%20Cheese%20-%20Slices%20-%20Front.jpg",
    price: 70,
    qnty: 0,
  },
  {
    id: 4,
    rname: "Pasta",
    imgdata:
      "https://store.calicutgrocers.com/image/cache/catalog/Products/noodles_pasta_vermicelli/Pasta_packet-228x228.png",
    price: 70,
    qnty: 0,
  },
  {
    id: 5,
    rname: "Apple",
    imgdata:
      "https://media.istockphoto.com/id/184927564/photo/close-up-of-red-royal-gala-apples.jpg?s=1024x1024&w=is&k=20&c=tF8LLNJOG2S8-Jen06labQtpCRksw1ZEda-1LIauuQ8=",
    price: 210,
    qnty: 0,
  },
  {
    id: 6,
    rname: "Pineapple",
    imgdata:
      "https://media6.ppl-media.com/mediafiles/blogs/pineapple_6439817058.jpg",
    price: 100,
    qnty: 0,
  },
];

export default Cardsdata;
