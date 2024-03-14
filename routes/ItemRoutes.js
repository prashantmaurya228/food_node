const express = require("express");
const router = express.Router();
const Item = require("../models/item");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newItem = new Item(data);
    const response = await newItem.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Item.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:foodType", async (req, res) => {
  try {
    const tasteType = req.params.foodType;
    if (
      tasteType == "sweet" ||
      tasteType == "saulty" ||
      tasteType == "bitter"
    ) {
      const data = await Item.find({ taste: tasteType });
      console.log("data found");
      res.status(200).json(data);
    } else {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  } catch (err) {}
});

router.put("/:id", async (req, res) => {
  try {
    const Id = req.params.id;
    const updatedData = req.body;
    const response = await Item.findByIdAndUpdate(Id, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: "food not found" });
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const Id = req.params.id;
    const response = await Item.findByIdAndDelete(Id);
    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    res.status(200).json({ message: "food deleted suss" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
