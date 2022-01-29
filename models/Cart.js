const mongoose = require("mogoose")

const CartSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true, unique: true},
        products: [
            {
                productsId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    {timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);