const express = require('express');
const restaurantsModel = require('../models/Restaurants');
const app = express();

app.get('/restaurants', async (req, res) => {
    const restaurants = new restaurantsModel(req.body);

    try {
        await restaurants.save((err) => {
            if (err) {
                res.send(err)
            } else {
                res.send(restaurants);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/cuisine/Japanese', async (req, res) => {
    const restaurants = new restaurantsModel(req.body);

    try {
        await restaurants.save((err) => {
            if (err) {
                res.send(err)
            } else {
                res.send(restaurants);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/cuisine/bakery', async (req, res) => {
    const restaurants = new restaurantsModel(req.body);

    try {
        await restaurants.save((err) => {
            if (err) {
                res.send(err)
            } else {
                res.send(restaurants);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/cuisine/italian', async (req, res) => {
    const restaurants = new restaurantsModel(req.body);

    try {
        await restaurants.save((err) => {
            if (err) {
                res.send(err)
            } else {
                res.send(restaurants);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/cuisine/italian', async (req, res) => {
    const restaurants = new restaurantsModel(req.body);

    try {
        await restaurants.save((err) => {
            if (err) {
                res.send(err)
            } else {
                res.send(restaurants);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants', async (req, res) => {
    const restaurants = await restaurantsModel.find({}).sort({ "restaurant_id": 1 });

    try {
        await restaurants.save((err) => {
            if (err) {
                res.send(err)
            } else {
                res.send(restaurants);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = restaurantsModel.
            find({})
            .where('cuisine').equals('Delicatessen')
            .where('city').ne("Brooklyn")
            .exec((err, data) => {
                if (err) {
                    res.send(JSON.stringify({ status: false, message: "No data found" }));
                } else {
                    res.send(data);
                }
            });
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = app