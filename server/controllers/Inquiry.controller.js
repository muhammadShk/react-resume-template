const { Inquiry } = require('../models/Inquiry.model')

module.exports.list = (request, response) => {
    Inquiry.find({})
    // .sort({"dueDate": -1})
    // get list ordered ordered by due date 
    .then(inquiry => {
        response.json(inquiry);
    })
    .catch(err=>{
        response.status(400).json(err);
    })
}

module.exports.create = (request, response) =>{
    Inquiry.create(request.body)
        .then(inquiry => {
            response.json(inquiry)
        })
        .catch(err=>{
            response.status(400).json(err)
        })
}   

module.exports.detail = (request, response) => {
    const {id}= request.params;
    Inquiry.findOne({_id:id})
    .then(inquiry => {
        response.json(inquiry)
    })
    .catch(err => {
        response.status(400).json(err)
    })
}

// Below routes are unnecessary for the Portfolio app
// module.exports.update = (request, response) => {
//     const { id } = request.params;
//     const {Inquiry} = request.body;
//     Inquiry.findOneAndUpdate({_id: id},{
//         Inquiry
//     },
//         {
//             new:true,
//             useFindAndModify: true
//         })
//         .then(Inquiry =>{
//             response.json(Inquiry)
//         })
//         .catch(err => {
//             response.status(400).json(err)
//         })
// }
module.exports.delete = (request, response) => {
    const {id} = request.params;
    Inquiry.deleteOne({_id:id})
    .then(deleteConfirmation => {
        response.json(deleteConfirmation);
    })
    .catch(err=>{
        response.json(err)
    })
}