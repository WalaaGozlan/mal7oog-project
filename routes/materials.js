const router = require('express').Router();
let Material = require('../models/material.model');


router.route('/').get((req, res) => {
    Material.find() 
         .then(materials => res.json(materials))  
        .catch(err => res.status(400).json('Error: ' + err));
    });


router.route('/add').post((req, res) => { //create?
     const material = req.body.material; 
      const description = req.body.description; 
       const duration = Number(req.body.duration); 
        
  const newMaterial = new Material({  
    material,  
    description,  
    duration, 
    }); 
      
  newMaterial.save()  
  .then(() => res.json('Material added!'))  
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {  
  console.log(req.params)
    Material.findById(req.params.id)    
    .then(material => res.json(material))    
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {  
    Material.findByIdAndDelete(req.params.id)    
    .then(() => res.json('Material deleted.'))    
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => { 
  //console.log(req.body) 
    Material.findById(req.params.id)    
    .then(material => {      
        material.material = req.body.material;      
        material.description = req.body.description;      
        material.duration = Number(req.body.duration);      
    
        material.save()        
      .then(() => res.json('material updated!'))        
      .catch(err => res.status(400).json('Error: ' + err));    
    })    
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;