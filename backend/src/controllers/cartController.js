import Cart from "../models/Cart.js";

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id })
    .populate("items.product");
  res.json(cart);
};

export const addToCart = async (req, res) => {
  const { product, quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user.id });

  if (!cart) {
    cart = await Cart.create({
      user: req.user.id,
      items: [{ product, quantity }],
    });
  } else {
    const existingItem = cart.items.find(
      item => item.product.toString() === product
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }

    await cart.save();
  }

  res.json(cart);
};


export const removeFromCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id });
  cart.items = cart.items.filter(
    item => item.product.toString() !== req.params.productId
  );
  await cart.save();
  res.json(cart);
};
