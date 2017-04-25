var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log("hbsObject " + JSON.stringify(hbsObject));
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.create([
        "burger_name", "devoured", "date"
    ], [
        req.body.burger_name, req.body.devoured, req.body.date
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("put condition ", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("delete condition ", condition);

    burger.delete(condition, function() {
        res.redirect("/");
    });
});

// EXPORT ROUTER
module.exports = router;