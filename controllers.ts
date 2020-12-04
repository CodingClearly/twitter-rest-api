import * as mongoose from 'mongoose';
import { UserSchema, TweetSchema } from './models';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema)
const Tweet = mongoose.model('Tweet', TweetSchema)


export class TweetController{
    
    public addNewTweet(req: Request, res: Response) {
        let newTweet = new Tweet(req.body);

        newTweet.save()

        User.findOneAndUpdate({_id: req.query.user},{ $addToSet:{tweets:[newTweet]}}, (err, user) => {

            if(err){
                res.send(err);
            }
            res.json(newTweet);
        });
    }


    public getTweets(req: Request, res: Response) {
        Tweet.find({}, (err, tweet) => {
            if(err){
                res.send(err);
            }
            res.json(tweet);
        });
    }

    public getTweetById(req: Request, res: Response) {
        Tweet.findById(req.params.tweetId, (err, tweet) => {
            if(err){
                res.send(err);
            }
            res.json(tweet);
        });
    }

    public deleteTweet(req: Request, res: Response) {
        Tweet.remove({ _id: req.params.tweetId }, (err, tweet) => {
            if(err) {
                res.send(err);
            }
            res.json({ message: 'Tweet deleted'});
        });
    }

    public findTweets(req: Request, res: Response) {
            User.findOne({_id: req.query.name}).populate('tweets').sort({created_date: -1}).exec(function(err, user) {
                if(err){
                    res.send(err);
                }
                res.json(user.tweets);
            });
    }
}


export class UserController{
    
    public addNewUser(req: Request, res: Response) {
        let newUser = new User(req.body);
        
        newUser.save((err, user) => {
            if(err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUsers(req: Request, res: Response) {
        User.find({}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserById(req: Request, res: Response) {
        User.findById(req.params.id, (err, user) => {
            
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser(req: Request, res: Response) {
        User.remove({ _id: req.params.userId }, (err, user) => {
            if(err) {
                res.send(err);
            }
            res.json({ message: 'user deleted'});
        });
    }

    public getUserTweets(req: Request, res: Response) {
        console.log(req.params);
            User.findOne({_id: req.params.name}).populate('tweets').exec(function(err, user) {
                if(err){
                    res.send(err);
                }
                res.json(user.tweets);
            });
    }

}




