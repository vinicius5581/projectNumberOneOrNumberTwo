const Restroom = require("../models/restroom");
const mongoose = require("mongoose");

exports.restrooms_create_restroom = (req, res, next) => {
  console.log(req.file);
  const restroom = new Restroom({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    address: req.body.address
  });
  restroom
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: `Created restroom successfully`,
        createdRestroom: {
          name: result.name,
          address: result.address,
          _id: result._id,
          request: {
            type: "GET",
            url: `http://localhost:4200/api/restrooms/${result._id}`
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.restrooms_get_all = (req, res, next) => {
  Restroom.find()
    .select("name address _id")
    .exec()
    .then(restrooms => {
      const response = {
        count: restrooms.length,
        restrooms: restrooms.map(restroom => {
          return {
            name: restroom.name,
            address: restroom.price,
            _id: restroom.id,
            request: {
              type: "GET",
              url: "http://localhost:4200/api/restrooms/" + restroom.id
            }
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.restrooms_get_restroom = (req, res, next) => {
  const id = req.params.restroomId;
  Restroom.findById(id)
    .select("name address _id")
    .exec()
    .then(restroom => {
      console.log(restroom);
      if (restroom) {
        res.status(200).json({
          restroom: restroom,
          request: {
            type: "GET",
            description: "Get all restrooms",
            url: "http://localhost:4200/api/restrooms"
          }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.restrooms_delete_restroom = (req, res, next) => {
  const id = req.params.restroomId;
  Restroom.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Restroom deleted",
        request: {
          type: "POST",
          url: "http://localhost:4200/api/restrooms",
          body: { name: "String", address: "String" }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
