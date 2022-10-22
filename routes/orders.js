const express = require('express')
const router = express.Router()
// import controllers
const {createOrder, getSingleOrder, getAllOrders, updateOrder,deleteOrder } = require('../controller/order')


router.route("/").get(getAllOrders).post(createOrder)

router.route('/:id').get(getSingleOrder).patch(updateOrder).delete(deleteOrder)


module.exports = router