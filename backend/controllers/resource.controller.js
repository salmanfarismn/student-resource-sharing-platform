const { json } = require("express");
const Resource = require("../models/resource.model");

module.exports.createResource = async(req, res) => {
    const { title, description, subject } = req.body;
    let createdBy = req.user.id;

    if(!title || !description || !subject) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const newResource = await Resource.create({ title, description, subject, createdBy });
    console.log(newResource);

    res.status(200).json({
        success: true,
        message: "Resouces added successfully"
    });
};

module.exports.getResources = async(req, res) => {
    const resources = await Resource.find({});
    if(!resources) {
        return res.status(404).json({
            success: false,
            message: "Resources are empty!"
        });
    }

    //* Every user can see all the resources without logging in
    // const currentUser = req.user;
    // if(!currentUser) {
    //     return res.status(500).json({
    //         success: false,
    //         message: "User not logged in"
    //     });
    // }


    return res.status(200).json({
        success: true,
        resources
    });
};

module.exports.getResourceById = async(req, res) => {
    // Retrieve the resource Id from the parameters 
    const { id } = req.params;

    // Get the resoure
    const resource = await Resource.findById(id);

    // return the resource to the frontend
    res.status(200).json({
        success: true,
        message: "Resource fetched",
        resource
    });
}

module.exports.updateResource = async(req, res) => {
    // Retrive the current resource id
    const { id } = req.params;

    // Get the new datas from the body
    const { title, description, subject, createdBy } = req.body;

    // updates the resource
    await Resource.findByIdAndUpdate(id, {title, description, subject, createdBy}, {returnDocument: "after"});
    return res.status(200).json({
        success: true,
        mesasge: "Resource updated successfully!"
    });
};

module.exports.destroyResource = async(req, res) => {
    // Retrive the current resource id
    const { id } = req.params;

    // Deletes the resource
    await Resource.findByIdAndDelete(id);
    res.status(200).json({
        success: true,
        message: "Resource deleted successfully"
    });
}