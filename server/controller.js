module.exports={

    getHouses: (req, res, next)=>{
        const dbInstance= req.app.get('db')

        dbInstance.get_houses()
        .then(response=>{
            console.log(response)
            res.status(200).json(response)
        }).catch(err=>{
            res.status(500).json("Error getting houses")
            console.log(err)
        })
    },

    postHouse: (req, res, next)=>{
        const dbInstance= req.app.get('db')
        const {name, address, city, state, zip}= req.body

        dbInstance.post_house([name, address, city, state, zip])
        .then(response=>{
            console.log(response)
            res.status(200).json(response)
        }).catch(err=>{
            res.status(500).json("Error posting house")
            console.log(err)
        })
    },

    deleteHouse: (req, res, next)=>{
        const dbInstance= req.app.get('db')
        console.log(req)

        dbInstance.delete_house(req.params.id)
        .then(response=>{
            console.log(response)
            res.status(200).json(response)
        }).catch(err=>{
            res.status(500).json("Error deleting house")
            console.log(err)
        })

    },

    //this function is only here to cover competencies not completed on last sim
    editHouse: (req, res, next)=>{
        const dbInstance= req.app.get('db')
        console.log(req)
        const {name, address, city, state, zip}= req.body


        dbInstance.edit_house([req.params.id, name, address, city, state, zip])
        .then(response=>{
            console.log(response)
            res.status(200).json(response)
        }).catch(err=>{
            res.status(500).json("Error updating house")
            console.log(err)
        })
    }

}