/**
 * AreaController
 *
 * @description :: Server-side logic for managing areas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    list:function(req, res){
        Area.find({}).exec(function(err, area){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('list', {
                area:area
            });
        });
    },
    add: function(req, res){
        res.view('add');
    },
    create:function(req, res){
        var name = req.body.name;
        var description = req.body.description;
        Area.create(
            {
                name:name, 
                description:description
            }
            ).exec(function(err){
                if(err){
                    res.send(500, {error: 'Database Error'});
                }
                res.redirect('/area/list');
            });
    },
    delete: function(req, res){
        Area.destroy(
            {
                id:req.params.id
            }
        ).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/area/list');
        });
        return false;
    },
    edit: function(req, res){
        Area.findOne({id:req.params.id}).exec(function(err, area){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('edit', {
                area:area
            });
        });
    },
    update: function(req, res){
        var name = req.body.name;
        var description = req.body.description;
        Area.update(
            {
                id: req.params.id
            },{
                name:name, 
                description:description
            }
        ).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/area/list');
        });

        return false;
    }
};

