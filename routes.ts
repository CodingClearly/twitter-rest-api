import {Request, Response, NextFunction} from "express";
import { UserController, TweetController } from "./controllers";

export class Routes { 
    
    public userController: UserController = new UserController()
    public tweetController: TweetController = new TweetController()
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'welcome to mock twitter'
            })
        })
        
        app.route('/user')
        .get(this.userController.getUsers)   
        .post(this.userController.addNewUser)

        app.route('/user/:id')
        .get(this.userController.getUserById) 

        app.route('/user/:id/tweet')
        .get(this.userController.getUserTweets)

        app.route('/tweet')
        .get(this.tweetController.getTweets)
        .post(this.tweetController.addNewTweet)

        app.route('tweet:id')
        .get(this.tweetController.getTweetById)


        app.route('/search')
        .get(this.tweetController.findTweets);


    }
}