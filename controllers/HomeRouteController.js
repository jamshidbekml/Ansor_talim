
module.exports = class  UsersController{
    static async HomeGetController(req, res, next) {
        try { 

            const news = await req.db.news.findAll({
                raw: true,
                order:[['updatedAt', 'DESC']]
            }) 

            const courses = await req.db.courses.findAll({
                raw: true,
                order:[['updatedAt', 'DESC']]
            }) 

            const scenes = await req.db.scenes.findAll({
                raw: true,
                order:[['updatedAt', 'DESC']]
            }) 

            const results = await req.db.results.findAll({
                raw: true,
                order:[['updatedAt', 'DESC']]
            })

            const comments = await req.db.comments.findAll({
                raw: true,
                order:[['updatedAt', 'DESC']]
            })

            const address = await req.db.address.findOne({
                raw: true, 
            }); 
            // const teachers = await req.db.teachers.findAll({
            //     raw: true,
            //     order:[['updatedAt', 'DESC']]
            // }) 

            res.render("index", { 
                news,
                courses,
                scenes,
                results,
                comments,
                address
                // teachers
            })
            
        } catch (error) { 
            next(error)
        }
    } 
}